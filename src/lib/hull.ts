// Lines-plan geometry for the vessel, in centimetres.
// x runs from the transom (0) to the stem (L); z is height above the keel
// baseline; y is the half-breadth from the centreline.
// The shape is a stylised planing hull fitted to the published particulars
// (L.O.A. 8,323 mm, beam 2,250 mm, draft 0.33 m, freeboard 441 mm). It is a
// schematic, not a construction drawing.

export const L = 832.3;
export const BEAM = 225;
export const DRAFT = 33;
export const FREEBOARD = 44.1;
export const DEPTH = DRAFT + FREEBOARD; // moulded depth amidships

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

/** Deck half-breadth. Parallel aft, fair entry forward. */
export function deckHalf(x: number): number {
  const t = x / L;
  if (t <= 0.5) return BEAM / 2 - 3 * (0.5 - t) ** 2; // tiny tumble toward the transom
  const u = (t - 0.5) / 0.5;
  return (BEAM / 2) * Math.sqrt(clamp(1 - u ** 2.2));
}

/** Sheer height: flat aft, rising toward the bow. */
export function sheerZ(x: number): number {
  const t = x / L;
  return DEPTH + 20 * clamp((t - 0.45) / 0.55) ** 2;
}

/** Keel height: flat run aft, forefoot sweeping up to the stem head. */
export function keelZ(x: number): number {
  const t = x / L;
  const u = clamp((t - 0.62) / 0.38);
  return (DEPTH + 20) * u ** 2.4;
}

/** Chine: half-breadth and height. */
export function chine(x: number): { y: number; z: number } {
  const t = x / L;
  const k = keelZ(x);
  const s = sheerZ(x);
  const y = deckHalf(x) * (0.86 - 0.1 * clamp((t - 0.6) / 0.4));
  const z = k + (s - k) * (0.28 + 0.32 * clamp((t - 0.4) / 0.6) ** 1.5);
  return { y, z };
}

/** A section at station x as a polyline from keel to sheer: [y, z][]. */
export function section(x: number): [number, number][] {
  const k = keelZ(x);
  const c = chine(x);
  const s = sheerZ(x);
  const h = deckHalf(x);
  // keel -> slight convex bottom -> chine -> flared topside -> sheer
  const mid: [number, number] = [c.y * 0.55, k + (c.z - k) * 0.42];
  return [
    [0, k],
    mid,
    [c.y, c.z],
    [c.y + (h - c.y) * 0.7, c.z + (s - c.z) * 0.55],
    [h, s],
  ];
}

/** Half-breadth of a section at height z (linear along the polyline). */
export function halfAtZ(x: number, z: number): number | null {
  const pts = section(x);
  for (let i = 0; i < pts.length - 1; i++) {
    const [y0, z0] = pts[i];
    const [y1, z1] = pts[i + 1];
    if ((z >= z0 && z <= z1) || (z <= z0 && z >= z1)) {
      const f = z1 === z0 ? 0 : (z - z0) / (z1 - z0);
      return y0 + (y1 - y0) * f;
    }
  }
  return null;
}

export const stations = Array.from({ length: 11 }, (_, i) => (L * i) / 10);

const f = (n: number) => n.toFixed(1);

/** Sample a function along x into an SVG path. */
export function pathAlong(
  fn: (x: number) => number | null,
  map: (x: number, v: number) => [number, number],
  x0 = 0,
  x1 = L,
  steps = 80,
): string {
  let d = '';
  let pen = false;
  for (let i = 0; i <= steps; i++) {
    const x = x0 + ((x1 - x0) * i) / steps;
    const v = fn(x);
    if (v === null || Number.isNaN(v)) {
      pen = false;
      continue;
    }
    const [px, py] = map(x, v);
    d += `${pen ? 'L' : 'M'}${f(px)},${f(py)}`;
    pen = true;
  }
  return d;
}

export function polyline(pts: [number, number][]): string {
  return pts.map(([a, b], i) => `${i ? 'L' : 'M'}${f(a)},${f(b)}`).join('');
}
