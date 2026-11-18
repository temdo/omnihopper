---
name: OmniHopper
description: One autonomous surface vessel shown as a lit wireframe on tactical black, with one acid signal colour, oversized grotesk words and big figures.
colors:
  void: "#0A0B0C"
  hull: "#121416"
  deck: "#1A1D20"
  line: "#2A2E33"
  line-2: "#474C53"
  wire: "#C9CDD1"
  text: "#F2F3EF"
  text-2: "#8C9197"
  text-3: "#787D84"
  signal: "#D7F23A"
  signal-ink: "#0A0B0C"
typography:
  backdrop:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "clamp(8rem, 24vw, 22rem)"
    fontWeight: 500
    lineHeight: 0.8
    letterSpacing: "-0.055em"
  display:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 5.5rem)"
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3.25rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.03em"
  figure:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "-0.04em"
    fontFeature: "'tnum' 1"
  title:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Geist Mono Variable, Geist Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.06em"
  caption:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.35
rounded:
  none: "0px"
  pill: "999px"
spacing:
  s1: "4px"
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s5: "24px"
  s6: "32px"
  s7: "48px"
  s8: "80px"
  s9: "128px"
  s10: "200px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.signal-ink}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.text}"
    textColor: "{colors.signal-ink}"
  button-ghost:
    backgroundColor: "{colors.void}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "13px 27px"
  nav-chip:
    backgroundColor: "{colors.deck}"
    textColor: "{colors.text-2}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  nav-chip-active:
    backgroundColor: "{colors.text}"
    textColor: "{colors.void}"
  panel:
    backgroundColor: "{colors.deck}"
    textColor: "{colors.text-2}"
    rounded: "{rounded.none}"
    padding: "32px"
  stat-figure:
    textColor: "{colors.text}"
    typography: "{typography.figure}"
  stat-figure-key:
    textColor: "{colors.signal}"
    typography: "{typography.figure}"
  input:
    backgroundColor: "{colors.hull}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "14px 16px"
---

# Design System: OmniHopper

## Overview

**Creative North Star: "The Lit Wireframe"**

The vessel is the page. One OmniHopper hull, drawn as a white wireframe in 3D, floats in a black room under a soft spotlight. Everything else steps back: a huge word sits behind the hull like a watermark, a few large figures with tiny captions sit beside it, and one acid signal colour marks the single most important thing on screen. The visitor is a procurement officer or a commander. The page reads like a defence-industry product sheet, not like a gadget launch: calm, dark, precise, and confident enough to leave most of the screen empty.

The system is built from three references that M chose. From Keileth it takes the wireframe model: structure shown as lines, no photo. From Stalker it takes a single 3D model owning the hero, with numbered hotspots on it. From VREX it takes the oversized word behind the object, the stack of big figures with small captions, the lime accent, and the idea of one object whose skin changes with each use case.

It replaces photoreal imagery with schematic imagery, as the client asked, without falling back to flat icons. The wireframe is abstract and still looks like real engineering.

**Key characteristics**

- Tactical black ground, graphite surfaces, no gradients except the spotlight behind the model.
- One 3D wireframe hull is the hero and the main visual of the use-case switcher.
- Giant backdrop word behind the model (Sea., Air., Strike., Rescue., Cargo.).
- Big figures (60 kn, 500 nm, 600 kg) with small mono captions. The key figure is lime.
- Mono bracket labels such as `[ 01 MISSIONS ]` for section kickers.
- Pills for everything you can press, square corners for everything you read.
- Most of each screen is empty on purpose.

## Colors

Near-black with three graphite steps, cool white text, and one acid lime used sparingly.

### Primary

- **Signal Lime** (#D7F23A): the one accent. It goes on the primary call to action, the key figure in each stat stack, the active use-case marker, the hotspot dots and the parts of the model that change with each mission. Never on large fills except the CTA.

### Neutral

- **Void** (#0A0B0C): page background, the "room" the model sits in.
- **Hull** (#121416): sunken areas such as inputs and the spec table background.
- **Deck** (#1A1D20): the one raised panel style and nav chips.
- **Line** (#2A2E33): hairlines, table rules, grid guides, inactive wireframe edges.
- **Line Strong** (#474C53): ghost-button borders, hotspot leaders, drawing guides.
- **Wire** (#C9CDD1): the wireframe edges of the model.
- **Text** (#F2F3EF): headings, figures, primary text, the logo on dark.
- **Text 2** (#8C9197): body copy and captions.
- **Text 3** (#787D84): meta information and the backdrop word's faded end.

### Named rules

**The One Lime Rule.** Lime covers no more than 5% of any screen. On each screen it marks one action and one fact.

**The Spotlight Rule.** The only gradient allowed is a soft radial light behind the model (void to #16191C, centred on the hull). No other gradients, glows or glass effects.

## Typography

**Display and text font:** Geist (variable, OFL, self-hosted through `@fontsource-variable/geist`). It stands in for Neue Montreal from the VREX reference, which is a paid font. If the client licenses Neue Montreal, it is a drop-in swap.

**Label font:** Geist Mono (`@fontsource-variable/geist-mono`), for kickers, captions under figures, coordinates and spec keys, as in the Keileth reference.

**Character:** a neutral, slightly warm grotesk at medium weight with tight tracking. It gets its authority from size and space, not boldness. Nothing heavier than 500.

### Hierarchy

- **Backdrop** (500, clamp(8rem, 24vw, 22rem), line-height 0.8, -0.055em): one word with a full stop ("Sea.", "Strike.", "Rescue."). It sits behind the model, partly hidden by it. It is filled with Text and fades to transparent from its top (mask-image linear-gradient), with a light 2–6px blur on the lower part, as in VREX. It is decoration, so it gets `aria-hidden`; the real heading is the Display line.
- **Display** (500, clamp(2.75rem, 6vw, 5.5rem), 0.95): the hero line and the closing line. Max 3 lines.
- **Headline** (500, clamp(2rem, 3.6vw, 3.25rem), 1): section titles. Often offset into two indented lines ("A platform built / to operate / in the field").
- **Figure** (500, clamp(2.5rem, 4.5vw, 4.5rem), 0.9, tabular): stat numbers. The unit is set in the same line at 45% size ("60 kn", "500 nm").
- **Title** (500, 1.375rem): mission names, card titles.
- **Body** (400, 1rem, 1.55): copy, max 52ch. In Text 2.
- **Label** (Geist Mono 400, 0.75rem, +0.06em, uppercase): kickers in square brackets, captions under figures, table keys.
- **Caption** (400, 0.75rem): footnotes and figure captions.

### Named rules

**The Big-Small Rule.** Never put middle sizes next to each other. Pair a very large element with a very small one (Figure with Label, Backdrop with Body). This contrast is what gives the references their tension.

**The Bracket Rule.** Section kickers are mono, uppercase and bracketed: `[ 02 PARTICULARS ]`.

## Layout

- **Grid:** 12 columns, max 1440px, 24px gutters, side margins clamp(16px, 4vw, 64px). Faint grid guides (Line at 40% opacity) may be drawn in the hero and the identity-style sections only, as in the VREX logo sheet.
- **Hero:** full viewport height. The model takes columns 4–12 and may bleed off the right edge. The Display line and a short dek sit on columns 1–4, bottom left. The stat stack sits on columns 10–12, right. The backdrop word runs behind the model, low in the frame.
- **Use-case switcher (the VREX scene):** a sticky full-height stage. Left: mission chips (pills) grouped by sector. Centre: the same wireframe hull, whose payload and lime highlights change per mission. Behind it: the backdrop word changes ("Air." → "Rescue." → "Cargo."). Right: mission name, one line of text, and three figures, the last one in lime. Switching cross-fades the backdrop word and morphs the model in 600ms. On scroll, each mission can also advance the stage.
- **Rhythm:** alternate between open "scenes" (one idea, lots of black, 200px vertical padding) and dense "sheets" (spec tables, standards, form; 80px padding, hairline rules). Never two dense sheets in a row.
- **Space:** at least 40% of every scene is empty. Text blocks are short and pushed to corners; the model holds the centre.
- **Mobile:** the model goes on top, full width, at about 60vh. Backdrop word at 34vw. Stat stack becomes a 3-up row. The switcher chips become a horizontal scroller.

## Elevation & Depth

The page is flat and shadowless. Depth comes from three things only: the 3D model itself (slow idle rotation, parallax on pointer), the Spotlight radial behind it, and tonal steps from Void to Hull to Deck. Panels never cast shadows; they sit one tone above the page.

## Shapes

- **Pill (999px):** everything interactive: buttons, nav chips, mission chips, the language toggle. The pill echoes the round logo.
- **Square (0px):** everything you read: panels, tables, inputs, image frames.
- **Circle:** the logo, hotspot markers on the model (12px lime dot in a 28px Line ring, with a number in Label), and the mission icons.
- **Lines:** 1px hairlines only. Wireframe edges are 1px Wire at 70% opacity; edges that belong to the active mission's payload are Signal Lime at 100%.

## Components

- **Logo:** the round H mark (`public/brand/logo-white.svg` on dark, `logo-black.svg` on light) followed by the wordmark "OmniHopper" in Geist 500, -0.02em. Minimum mark size 24px. Clear space equals half the mark's diameter.
- **Header:** transparent over the hero, logo left, nav as Label-style pills right, lime pill CTA "Request briefing". It becomes Void at 85% with a Line bottom rule after scroll.
- **Wireframe model:** a three.js (or pre-rendered SVG fallback) mesh of the OmniHopper hull: edges only, no faces, Wire colour. Mission payloads are separate meshes toggled per use case and drawn in lime. Idle rotation of 0.05 rad/s; pauses on hover and under prefers-reduced-motion, where a static front-three-quarter view is shown.
- **Hotspot:** numbered circle on the model with a thin leader line to a Label caption (Stalker-style "Sensor mast", "EO/IR gimbal", "Outboard 200 hp").
- **Stat stack:** a vertical list of 2–4 figures. Each: Figure, then Label caption 8px below in Text 2. The key figure is lime. 32px between items.
- **Mission chip:** pill, Deck background, Text 2, Label type. Active: Text background, Void text, with a lime 6px dot.
- **Panel:** square Deck block with a bracket kicker at top left and a small mono index at bottom left (Keileth-style). Used at most once per screen.
- **Spec table:** two columns, Label keys in Text 3, values in Title type, Line hairlines between rows, no zebra striping.
- **Big-number band:** a sheet of 3–4 huge figures (40+, 10, 600 kg) each with a two-line Label caption, laid on a 4-column grid, as in the VREX closing slide.
- **Form:** square inputs on Hull, Line border, lime focus ring 2px; labels in Label type above; lime pill submit.

## Do's and Don'ts

**Do**

- Let one wireframe hull carry the page and change it per mission instead of adding more pictures.
- Put the backdrop word behind the model so the model overlaps it.
- Pair huge figures with tiny mono captions.
- Keep lime for one action and one fact per screen.
- Keep at least 40% of each scene empty.
- Respect prefers-reduced-motion: no rotation, no morph, instant swaps.

**Don't**

- Don't use photos or photoreal renders. The client asked for schematic visuals.
- Don't add a second accent colour, gradients (other than the Spotlight), glows, glassmorphism or drop shadows.
- Don't use bold weights. Size and space do the work.
- Don't round panels, tables or inputs. Only pressable things are pills.
- Don't name ALMAR, LANCIA, M-08 or CETUS anywhere, including file names, alt text and model metadata. The vessel is OmniHopper.
- Don't copy VREX's pixel logo grid or its exact layouts. Take the principles, not the artwork.

## References

What the three references share, and what this system takes from each.

| | Keileth (DroneOS) | Stalker 5.0 | VREX |
|---|---|---|---|
| Palette | Near-black, white wire, lime-yellow accent | Charcoal, grey 3D render, white | Black, white, Electric Lime |
| Type | Light grotesk headline in accent, mono bracket labels | Medium grotesk, centred statements | Neue Montreal, giant backdrop words, big figures |
| Image | Wireframe drone, bleeds off the right edge | 3D boat on hero with hotspots | Matte 3D vehicles, skin changes per domain (Land., Sea.) |
| Space | Object fills 2/3, copy in a corner | Hero, then a dark spec sheet | Object centred, lots of black, stats to the right |
| Shapes | Square grey panel, X mark | Pill nav chips | Pill buttons, grid guides |

**Common ground:** a dark room, one hero object as the visual, neutral grotesk at medium weight, one acid accent used rarely, mono or small-caps labels, specs as big figures or quiet tables, and a lot of empty space. None of them uses photography of people or busy backgrounds.
