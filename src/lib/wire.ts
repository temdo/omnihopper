// 3D wireframe of the vessel, projected to SVG at build time.
// World axes, in centimetres: x forward from the transom, y to port, z up from
// the keel baseline. The camera sits off the starboard bow, above the deck, so
// the bow points right and slightly toward the viewer.
import { L, BEAM, DEPTH, DRAFT, deckHalf, sheerZ, keelZ, section } from './hull';

export type V3 = [number, number, number];
export type Line3 = V3[];

/* ---------- projection ---------- */

export type Camera = { pos: V3; f: number; F: V3; R: V3; U: V3 };

const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = (a: V3): V3 => {
  const l = Math.hypot(...a);
  return [a[0] / l, a[1] / l, a[2] / l];
};

export function camera(dir: V3 = [0.36, -0.84, 0.44], dist = 3.4 * L, target: V3 = [L * 0.48, 0, DEPTH * 0.6]): Camera {
  const d = norm(dir);
  const pos: V3 = [target[0] + d[0] * dist, target[1] + d[1] * dist, target[2] + d[2] * dist];
  const F = norm(sub(target, pos));
  const R = norm(cross(F, [0, 0, 1]));
  const U = cross(R, F);
  return { pos, f: dist, F, R, U };
}

export function project(c: Camera, p: V3): [number, number, number] {
  const v = sub(p, c.pos);
  const z = dot(v, c.F);
  return [(dot(v, c.R) * c.f) / z, (-dot(v, c.U) * c.f) / z, z];
}

const n1 = (n: number) => n.toFixed(1);
export function toPath(c: Camera, lines: Line3[]): string {
  return lines
    .map((ln) => ln.map((p, i) => {
      const [u, v] = project(c, p);
      return `${i ? 'L' : 'M'}${n1(u)},${n1(v)}`;
    }).join(''))
    .join('');
}

/* ---------- primitives ---------- */

const range = (n: number) => Array.from({ length: n }, (_, i) => i);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Circle of radius r around centre c, in the plane spanned by unit vectors a and b. */
export function circle(c: V3, a: V3, b: V3, r: number, seg = 20): Line3 {
  return range(seg + 1).map((i) => {
    const t = (i / seg) * Math.PI * 2;
    return [c[0] + r * (Math.cos(t) * a[0] + Math.sin(t) * b[0]), c[1] + r * (Math.cos(t) * a[1] + Math.sin(t) * b[1]), c[2] + r * (Math.cos(t) * a[2] + Math.sin(t) * b[2])];
  });
}

function basis(axis: V3): [V3, V3] {
  const k = norm(axis);
  const ref: V3 = Math.abs(k[2]) > 0.9 ? [1, 0, 0] : [0, 0, 1];
  const a = norm(cross(k, ref));
  return [a, cross(k, a)];
}

/** Cylinder from p0 to p1: end rings, intermediate rings and generator lines. */
export function cylinder(p0: V3, p1: V3, r: number, rings = 2, gens = 8, seg = 20): Line3[] {
  const axis = sub(p1, p0);
  const [a, b] = basis(axis);
  const out: Line3[] = [];
  range(rings).forEach((i) => {
    const t = rings === 1 ? 0 : i / (rings - 1);
    out.push(circle([lerp(p0[0], p1[0], t), lerp(p0[1], p1[1], t), lerp(p0[2], p1[2], t)], a, b, r, seg));
  });
  range(gens).forEach((i) => {
    const t = (i / gens) * Math.PI * 2;
    const o: V3 = [r * (Math.cos(t) * a[0] + Math.sin(t) * b[0]), r * (Math.cos(t) * a[1] + Math.sin(t) * b[1]), r * (Math.cos(t) * a[2] + Math.sin(t) * b[2])];
    out.push([[p0[0] + o[0], p0[1] + o[1], p0[2] + o[2]], [p1[0] + o[0], p1[1] + o[1], p1[2] + o[2]]]);
  });
  return out;
}

/** Sphere as latitude and longitude rings. */
export function sphere(c: V3, r: number, lat = 4, lon = 6): Line3[] {
  const out: Line3[] = [];
  range(lat).forEach((i) => {
    const phi = -Math.PI / 2 + ((i + 1) * Math.PI) / (lat + 1);
    out.push(circle([c[0], c[1], c[2] + r * Math.sin(phi)], [1, 0, 0], [0, 1, 0], r * Math.cos(phi)));
  });
  range(lon).forEach((i) => {
    const t = (i / lon) * Math.PI;
    out.push(circle(c, [Math.cos(t), Math.sin(t), 0], [0, 0, 1], r));
  });
  return out;
}

/** Axis-aligned box with optional subdivision lines on its long faces. */
export function box(x0: number, x1: number, y0: number, y1: number, z0: number, z1: number, divX = 0, divZ = 0): Line3[] {
  const out: Line3[] = [];
  for (const z of [z0, z1]) out.push([[x0, y0, z], [x1, y0, z], [x1, y1, z], [x0, y1, z], [x0, y0, z]]);
  for (const x of [x0, x1]) for (const y of [y0, y1]) out.push([[x, y, z0], [x, y, z1]]);
  range(divX).forEach((i) => {
    const x = lerp(x0, x1, (i + 1) / (divX + 1));
    out.push([[x, y0, z0], [x, y0, z1]], [[x, y1, z0], [x, y1, z1]]);
  });
  range(divZ).forEach((i) => {
    const z = lerp(z0, z1, (i + 1) / (divZ + 1));
    out.push([[x0, y0, z], [x1, y0, z], [x1, y1, z], [x0, y1, z], [x0, y0, z]]);
  });
  return out;
}

/** Extrude a side profile [x, z][] across the beam from y0 to y1, with extra ribs. */
export function extrude(profile: [number, number][], y0: number, y1: number, ribs = 0): Line3[] {
  const closed = [...profile, profile[0]];
  const out: Line3[] = [];
  range(ribs + 2).forEach((i) => {
    const y = lerp(y0, y1, i / (ribs + 1));
    if (i === 0 || i === ribs + 1) out.push(closed.map(([x, z]) => [x, y, z] as V3));
  });
  profile.forEach(([x, z]) => out.push([[x, y0, z], [x, y1, z]]));
  return out;
}

const seg = (a: V3, b: V3): Line3 => [a, b];

/* ---------- hull ---------- */

const deckZ = (x: number) => sheerZ(x);

/** Resample a section polyline at parameter t in [0, 1] along its length. */
function along(pts: [number, number][], t: number): [number, number] {
  const lens = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
  const total = lens.reduce((a, b) => a + b, 0) || 1;
  let d = t * total;
  for (let i = 0; i < lens.length; i++) {
    if (d <= lens[i] || i === lens.length - 1) {
      const f = lens[i] ? Math.min(1, d / lens[i]) : 0;
      return [lerp(pts[i][0], pts[i + 1][0], f), lerp(pts[i][1], pts[i + 1][1], f)];
    }
    d -= lens[i];
  }
  return pts[pts.length - 1];
}

export type Hull = { near: Line3[]; far: Line3[]; deck: Line3[]; water: Line3[] };

/** Catamaran layout: two demihulls under one bridge deck, 2,250 mm overall. */
export const CAT = { yc: 70.5, s: 42 / (BEAM / 2), bridgeEnd: L * 0.84, wet: 22 };

export function hull(): Hull {
  const near: Line3[] = [];
  const far: Line3[] = [];
  const deckL: Line3[] = [];
  const { yc, s, bridgeEnd, wet } = CAT;
  const N = 26; // sections per demihull
  const M = 7; // longitudinals per side of each demihull
  const xs = range(N + 1).map((i) => (L * 0.995 * i) / N);
  const secs = xs.map((x) => ({ x, pts: section(x) }));
  const half = (x: number) => s * deckHalf(x); // demihull half-breadth at the deck

  // each demihull: c is its centreline, sides are outer (away from the boat's centre) and inner
  for (const c of [-yc, yc]) {
    const nearHull = c < 0;
    const out = Math.sign(c);
    const sides = [out, -out];
    sides.forEach((dir, k) => {
      const bucket = nearHull && k === 0 ? near : far;
      secs.forEach(({ x, pts }) => bucket.push(pts.map(([y, z]) => [x, c + dir * s * y, z] as V3)));
      range(M + 1).forEach((j) => {
        if (k === 1 && j === 0) return; // keel drawn once
        const line = secs.map(({ pts }) => along(pts, j / M));
        bucket.push(line.map(([y, z], i) => [xs[i], c + dir * s * y, z] as V3).concat([[L, c, sheerZ(L)]]));
      });
    });
    // stem and transom
    (nearHull ? near : far).push(range(13).map((i) => {
      const x = lerp(L * 0.66, L, i / 12);
      return [x, c, keelZ(x)] as V3;
    }));
    const tr = section(0);
    (nearHull ? near : far).push([...tr].reverse().map(([y, z]) => [-(z / DEPTH) * 6, c - s * y, z] as V3).concat(tr.map(([y, z]) => [-(z / DEPTH) * 6, c + s * y, z] as V3)));
    // rub rail on the outer sheer
    (nearHull ? near : far).push(xs.filter((x) => x < L * 0.92).map((x) => [x, c + out * (half(x) + 1.5), sheerZ(x) - 5] as V3));
    // demihull decks forward of the bridge
    xs.filter((x) => x > bridgeEnd).forEach((x) => deckL.push([[x, c - half(x), sheerZ(x)], [x, c + half(x), sheerZ(x)]]));
    deckL.push(xs.filter((x) => x >= bridgeEnd).map((x) => [x, c, sheerZ(x)] as V3));
  }

  // bridge deck across both hulls, with beams and fore-and-aft lines
  const outer = (x: number) => yc + half(x);
  const bx = xs.filter((x) => x <= bridgeEnd).concat([bridgeEnd]);
  bx.forEach((x, i) => {
    if (i % 2 && x !== bridgeEnd) return;
    deckL.push(range(13).map((k) => {
      const y = lerp(-outer(x), outer(x), k / 12);
      return [x, y, sheerZ(x) + 2 * (1 - (y / outer(x)) ** 2)] as V3;
    }));
  });
  [-0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75].forEach((f) => {
    deckL.push(bx.map((x) => [x, f * outer(x), sheerZ(x) + 2 * (1 - f * f)] as V3));
  });
  // wet deck: the tunnel roof between the hulls, and the bridge front face
  const inner = (x: number) => yc - half(x);
  far.push(bx.map((x) => [x, -inner(x), sheerZ(x) - wet] as V3), bx.map((x) => [x, inner(x), sheerZ(x) - wet] as V3));
  bx.forEach((x, i) => { if (i % 4 === 0) far.push([[x, -inner(x), sheerZ(x) - wet], [x, inner(x), sheerZ(x) - wet]]); });
  const zb = sheerZ(bridgeEnd);
  near.push([[bridgeEnd, -inner(bridgeEnd), zb - wet], [bridgeEnd, inner(bridgeEnd), zb - wet]]);
  near.push(range(13).map((k) => {
    const y = lerp(-inner(bridgeEnd), inner(bridgeEnd), k / 12);
    return [bridgeEnd + 10 * (1 - (y / inner(bridgeEnd)) ** 2), y, zb] as V3;
  }));
  // transom bar across the tunnel
  near.push([[-4, -inner(0), sheerZ(0)], [-4, inner(0), sheerZ(0)], [-4, inner(0), sheerZ(0) - wet], [-4, -inner(0), sheerZ(0) - wet], [-4, -inner(0), sheerZ(0)]]);

  // water plane: a sparse grid at the design waterline
  const water: Line3[] = [];
  for (let x = -160; x <= L + 160; x += 104) water.push([[x, -300, DRAFT], [x, 300, DRAFT]]);
  for (let y = -300; y <= 300; y += 100) water.push([[-160, y, DRAFT], [L + 160, y, DRAFT]]);
  return { near, far, deck: deckL, water };
}

/* ---------- topside: housing, gimbal, outboard ---------- */

export const HOUSE = { x0: 34, x1: 168, fwdTop: 136, h: 46, y: 80 };

/** Electronics housing aft: a closed box with a raked front, no glazing, vents and antennas. */
export function housing(): Line3[] {
  const z0 = deckZ(100);
  const { x0, x1, fwdTop, h, y } = HOUSE;
  const roof = z0 + h;
  const out = extrude([[x0, z0], [x1, z0], [fwdTop, roof], [x0 + 4, roof]], -y, y);
  // access panel and vent louvres on the starboard side
  out.push([[48, -y, z0 + 6], [48, -y, z0 + 36], [96, -y, z0 + 36], [96, -y, z0 + 6], [48, -y, z0 + 6]]);
  range(4).forEach((i) => out.push(seg([108 + i * 7, -y, z0 + 12], [108 + i * 7, -y, z0 + 30])));
  // whip antennas and nav light
  out.push(seg([44, -50, roof], [40, -50, roof + 100]), seg([58, 50, roof], [54, 50, roof + 84]));
  out.push(...cylinder([72, 0, roof], [72, 0, roof + 12], 8, 2, 6, 14));
  return out;
}

export function gimbal(x = 108, z = deckZ(100) + HOUSE.h): Line3[] {
  // pedestal, yoke and ball with a sensor window facing forward
  return [
    ...cylinder([x, 0, z], [x, 0, z + 14], 7, 2, 6, 14),
    ...box(x - 14, x + 14, -16, 16, z + 14, z + 18),
    ...sphere([x, 0, z + 36], 17, 3, 6),
    circle([x + 16, -2, z + 38], [0, 1, 0], [0, 0, 1], 6, 14),
  ];
}

export function outboard(): Line3[] {
  return outboardAt(0); // one V6 outboard on the bridge transom, between the hulls
}

function outboardAt(yc: number): Line3[] {
  const zt = deckZ(0);
  // cowling, midsection, leg and gearcase as extruded side profiles
  const cowl = extrude([[-20, zt - 4], [-92, zt - 4], [-98, zt + 24], [-86, zt + 40], [-30, zt + 42], [-18, zt + 24]], -26, 26);
  const mid = extrude([[-28, zt - 4], [-70, zt - 4], [-64, zt - 34], [-34, zt - 34]], -16, 16);
  const leg = extrude([[-38, zt - 34], [-60, zt - 34], [-56, -18], [-40, -18]], -8, 8);
  const plate = box(-74, -26, -20, 20, 12, 14);
  const gear = cylinder([-26, 0, -26], [-76, 0, -26], 8, 2, 6, 14);
  const prop = range(3).map((i) => {
    const t = (i / 3) * Math.PI * 2;
    return [[-22, 0, -26], [-18, 24 * Math.cos(t), -26 + 24 * Math.sin(t)], [-14, 20 * Math.cos(t + 0.5), -26 + 20 * Math.sin(t + 0.5)], [-22, 0, -26]] as Line3;
  });
  return [...cowl, ...mid, ...leg, ...plate, ...gear, ...prop].map((ln) => ln.map(([x, y, z]) => [x, y + yc, z] as V3));
}

/* ---------- mission packages ---------- */

const dz = deckZ;

function truss(): Line3[] {
  const x0 = 50, x1 = 130, w = 40, z0 = dz(90), z1 = z0 + 118;
  const out = box(x0, x1, -w, w, z0, z1, 0, 2);
  const lv = [z0, z0 + 39, z0 + 79, z1];
  for (let i = 0; i < 3; i++) {
    const a = lv[i], b = lv[i + 1];
    out.push(seg([x0, -w, a], [x1, -w, b]), seg([x1, -w, a], [x0, -w, b]));
    out.push(seg([x1, -w, a], [x1, w, b]), seg([x1, w, a], [x1, -w, b]));
    out.push(seg([x0, w, a], [x1, w, b]), seg([x1, w, a], [x0, w, b]));
  }
  out.push(...box(x0 - 10, x1 + 10, -w - 10, w + 10, z1, z1 + 4));
  out.push(seg([62, -30, z1 + 4], [56, -30, z1 + 90]));
  return [...out, ...gimbal(90, z1 + 4)];
}

export const packages: Record<string, Line3[]> = {
  air: (() => {
    const z = dz(470);
    const out = [...cylinder([470, 0, z], [470, 0, z + 34], 14, 3, 8), ...box(440, 500, -20, 20, z + 34, z + 44)];
    const a = (12 * Math.PI) / 180;
    const p0: V3 = [380, 0, z + 52];
    const len = 300;
    const p1: V3 = [p0[0] + len * Math.cos(a), 0, p0[2] + len * Math.sin(a)];
    out.push(...cylinder(p0, p1, 10, 5, 8));
    // rail beneath the missile
    out.push(seg([380, -8, z + 40], [p0[0] + 240 * Math.cos(a), -8, z + 40 + 240 * Math.sin(a)]), seg([380, 8, z + 40], [p0[0] + 240 * Math.cos(a), 8, z + 40 + 240 * Math.sin(a)]));
    // nose cone
    out.push(seg(p1, [p1[0] + 34 * Math.cos(a), 0, p1[2] + 34 * Math.sin(a)]));
    const tip: V3 = [p1[0] + 34 * Math.cos(a), 0, p1[2] + 34 * Math.sin(a)];
    out.push(...[[0, 10], [0, -10], [10, 0], [-10, 0]].map(([y, zz]) => seg([p1[0], y, p1[2] + zz], tip)));
    // cruciform tail fins and canards
    const fin = (s: number, r: number, h: number) => {
      const c: V3 = [p0[0] + s * Math.cos(a), 0, p0[2] + s * Math.sin(a)];
      return [[0, 1], [0, -1], [1, 0], [-1, 0]].map(([y, zz]) => [[c[0], y * r, c[2] + zz * r], [c[0] - 6, y * (r + h), c[2] + zz * (r + h)], [c[0] + 26, y * (r + h * 0.4), c[2] + zz * (r + h * 0.4)], [c[0] + 30, y * r, c[2] + zz * r]] as Line3);
    };
    out.push(...fin(4, 10, 24), ...fin(250, 10, 12));
    return out;
  })(),
  ew: (() => {
    const z = dz(100) + HOUSE.h;
    return [...cylinder([60, 0, z], [60, 0, z + 120], 5, 2, 4, 10), ...box(48, 72, -30, 30, z + 100, z + 112), ...box(48, 72, -30, 30, z + 70, z + 82), ...[-24, -8, 8, 24].map((y) => seg([60, y, z + 112], [60, y, z + 150]))];
  })(),
  mine: (() => {
    const z = dz(420);
    return [...box(330, 520, -50, 50, z, z + 22), ...cylinder([350, 0, z + 44], [500, 0, z + 44], 18, 4, 8), ...cylinder([500, 0, z + 44], [522, 0, z + 44], 9, 2, 6), ...[[360, -18], [360, 18], [470, -18], [470, 18]].map(([x, y]) => seg([x, y, z + 22], [x, y * 0.6, z + 30]))];
  })(),
  isr: (() => {
    const z = dz(310);
    return [...cylinder([310, 0, z], [310, 0, z + 150], 6, 3, 4, 10), ...box(296, 324, -22, 22, z + 150, z + 154), ...sphere([310, 0, z + 172], 18, 3, 6), ...box(420, 500, -60, -10, dz(460), dz(460) + 40, 1), ...box(420, 500, 10, 60, dz(460), dz(460) + 40, 1)];
  })(),
  patrol: (() => {
    const z = dz(100) + HOUSE.h;
    return [...cylinder([60, 0, z], [60, 0, z + 60], 5, 2, 4, 10), ...cylinder([60, 0, z + 60], [60, 0, z + 72], 36, 3, 12, 28), ...box(560, 600, -24, 24, dz(580), dz(580) + 20), ...sphere([580, 0, dz(580) + 36], 15, 3, 6)];
  })(),
  sar: (() => {
    const z = dz(380);
    const out: Line3[] = [...box(300, 480, -40, 40, z, z + 8)];
    // two liferaft canisters on a cradle, with a strap round each
    for (const [a, b] of [[310, 384], [400, 474]]) out.push(...cylinder([a, 0, z + 38], [b, 0, z + 38], 30, 4, 10), circle([(a + b) / 2, 0, z + 38], [0, 1, 0], [0, 0, 1], 32, 22));
    // fire monitor on the bow
    const zb = dz(690);
    out.push(...cylinder([690, 0, zb], [690, 0, zb + 36], 9, 3, 6), ...sphere([690, 0, zb + 44], 9, 2, 4));
    const a = (22 * Math.PI) / 180;
    out.push(...cylinder([690, 0, zb + 44], [690 + 110 * Math.cos(a), 0, zb + 44 + 110 * Math.sin(a)], 6, 3, 6));
    out.push(...cylinder([690 + 110 * Math.cos(a), 0, zb + 44 + 110 * Math.sin(a)], [690 + 132 * Math.cos(a), 0, zb + 44 + 132 * Math.sin(a)], 3.5, 2, 6));
    // hose aft along the deck
    out.push(range(14).map((i) => {
      const x = lerp(680, 300, i / 13);
      return [x, -18, dz(x) + 4] as V3;
    }));
    return out;
  })(),
  env: (() => {
    const z = dz(420);
    return [...cylinder([420, -60, z], [420, -60, z + 40], 7, 2, 6), seg([420, -60, z + 40], [420, -190, z + 20]), seg([420, -60, z + 30], [420, -190, z + 20]), seg([420, -190, z + 20], [420, -190, DRAFT - 30]), ...cylinder([420, -190, DRAFT - 30], [420, -190, DRAFT - 60], 6, 2, 6), ...box(460, 520, -40, 40, dz(490), dz(490) + 30, 1)];
  })(),
  survey: [...cylinder([380, 0, -24], [540, 0, -24], 14, 4, 8), ...cylinder([540, 0, -24], [560, 0, -24], 7, 2, 6), seg([440, 0, -10], [440, 0, dz(440) - CAT.wet]), seg([480, 0, -10], [480, 0, dz(480) - CAT.wet]), ...box(400, 470, -30, 30, dz(430), dz(430) + 26)],
  cargo: [...box(300, 460, -72, 72, dz(380), dz(380) + 82, 7, 0), ...box(476, 636, -66, 66, dz(556), dz(556) + 76, 7, 0), ...truss()],
  ferry: (() => {
    const out: Line3[] = [];
    [330, 410, 490].forEach((x) => [-46, 46].forEach((y) => {
      const z = dz(x);
      out.push(...box(x, x + 44, y - 22, y + 22, z + 22, z + 30), ...box(x - 6, x, y - 22, y + 22, z + 22, z + 66), seg([x + 22, y, z], [x + 22, y, z + 22]));
    }));
    return out;
  })(),
};

/** Missions that replace the solid housing with the lattice tower. */
export const noHousing = new Set(['cargo']);

/* ---------- labelled points for hotspots ---------- */

export const points: Record<string, V3> = {
  gimbal: [108, 0, deckZ(100) + HOUSE.h + 36],
  housing: [72, -HOUSE.y, deckZ(100) + 22],
  outboard: [-60, -26, deckZ(0) + 30],
  deck: [470, -40, deckZ(470) + 4],
  bow: [L - 20, 0, sheerZ(L - 20)],
};
