---
name: OmniHopper
description: A naval reference annual entry for one autonomous surface vessel, drawn as a lines plan in two inks, bookcloth and one signal orange.
colors:
  ink: "#0e1512"
  ink-2: "#33433b"
  page: "#f2f5f3"
  cloth: "#2c4a3d"
  cloth-ink: "#eaf1ec"
  cloth-ink-2: "#bcd0c3"
  signal: "#f05a14"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 9vw, 6rem)"
    fontWeight: 850
    lineHeight: 0.86
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 68"
  headline:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 72"
  title:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 75"
  dek:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.7vw, 1.4rem)"
    fontWeight: 500
    lineHeight: 1.32
  body:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "'tnum' 1, 'lnum' 1"
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 800
    lineHeight: 1.25
    fontVariation: "'wdth' 80"
  figure:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 750
    lineHeight: 1.5
    fontFeature: "'tnum' 1, 'lnum' 1"
    fontVariation: "'wdth' 85"
  caption:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  annotation:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    fontFeature: "'tnum' 1, 'lnum' 1"
    fontVariation: "'wdth' 80"
rounded:
  none: "0px"
spacing:
  s1: "4px"
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s5: "24px"
  s6: "32px"
  s7: "48px"
  s8: "72px"
  s9: "112px"
  gutter: "clamp(16px, 4vw, 48px)"
  max: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.page}"
  button-small:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "40px"
  masthead:
    backgroundColor: "{colors.cloth}"
    textColor: "{colors.cloth-ink}"
    height: "64px"
  mission-option:
    backgroundColor: "transparent"
    textColor: "{colors.cloth-ink-2}"
    padding: "10px 0"
  mission-option-selected:
    textColor: "{colors.cloth-ink}"
    padding: "10px 0 10px 12px"
  field:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px"
    height: "48px"
  lit-value:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    padding: "1px 4px"
---

# Design System: OmniHopper

## Overview

**Creative North Star: "The Reference Annual Entry"**

Every surface reads as one entry in a naval reference annual: a vessel set down in black ink on cool white paper, measured, lettered and cross-referenced, with deep grey-green bookcloth binding whole fields of the page. The vessel is never photographed or rendered; it is drawn as a naval architect's lines plan (profile, half-breadth, body plan) with stations, waterlines, dimension callouts and a scale bar. The drawings are the imagery and the component language at once.

The system is two inks and one signal. Ink and page carry the content; bookcloth owns entire bands (masthead, the mission field, the enquiry field) rather than tinting small surfaces; signal orange appears only where something is actionable or has just changed. Density is that of a reference work: hairline rules between every row, tabular lining figures everywhere, labels set narrow and heavy, values set right-aligned and bold. Nothing floats, nothing is rounded, nothing glows.

Motion is short and declarative: a drawing inks itself once on load, a changed value lights orange and holds its light until the next change. Everything else is a colour swap.

**Key Characteristics:**
- Two inks (ink on page, cloth-ink on cloth) plus one signal orange
- Lines-plan drawings as the only imagery, built in SVG with non-scaling strokes
- Hairline (1px) and heavy (2px) ink rules as the structural device; no cards, no shadows
- One variable family (Archivo) doing all work through width and weight axes
- Square corners throughout (0px)
- Lettered references (A to E) that tie table rows to dimensions on the drawings

## Colors

A cold, nearly monochrome two-ink palette on a green-tinted white, with one hot orange held in reserve.

### Primary
- **Signal Orange** (signal): the primary action fill (every button), the selected-mission marker, the payload strokes on the mission drawing, the lit background of a changed value, the focus outline, text selection, caret and the invalid-field bar. Text on it is always Ink.

### Secondary
- **Bookcloth Green** (cloth): a deep grey-green that owns whole fields: the sticky masthead band, the mission section and the enquiry section. Also the `theme-color`. Used at 9% mixed into page for the table-row hover tint, its only partial use.

### Neutral
- **Drawing Ink** (ink): all text and all drawing strokes on page; every structural rule; the footer field; the hover fill of the primary button.
- **Second Ink** (ink-2): a dark green-grey for secondary text on page: class line, row keys, captions, lead paragraphs, placeholders.
- **Cool Paper** (page): the page ground, the inset ground of the mission drawing plate inside the cloth field, form field fill, and the knock-out halo behind dimension figures.
- **Cloth Ink** (cloth-ink): primary text on bookcloth.
- **Cloth Ink Faded** (cloth-ink-2): secondary text and hairline rules on bookcloth; unselected mission options; footer text.

### Named Rules
**The Change-State Rule.** Signal orange marks only two things: the action to take and the value that just changed. It never decorates, never fills a section, never colours a heading.

**The Whole-Field Rule.** Bookcloth is applied to full-bleed bands, never to cards or chips. A surface on cloth uses cloth-ink and cloth-ink-2; a drawing inside a cloth field sits on its own page-coloured plate.

**The Two-Ink Rule.** No greys outside the defined inks, no gradients, no photography. Secondary text uses ink-2 or cloth-ink-2, never opacity.

## Typography

**Display Font:** Archivo Variable (with Archivo, system-ui, sans-serif)
**Body Font:** Archivo Variable
**Label Font:** Archivo Variable, narrowed through the `wdth` axis

**Character:** One grotesque family stretched across its width axis: headings condensed and very heavy like an annual's entry names, labels narrow and bold like plate lettering, body at normal width. Figures are tabular and lining everywhere, set globally on `body`.

### Hierarchy
- **Display** (850, clamp(3.25rem, 9vw, 6rem), 0.86, wdth 68): the vessel name only, once per page.
- **Headline** (800, clamp(2rem, 5vw, 3.75rem), 0.95, wdth 72): section heads, always sitting on a 2px rule with a short explanatory paragraph beside them.
- **Title** (800, clamp(1.5rem, 3vw, 2.25rem), 1, wdth 75): phases within a section (Adaptation, Sea trials, Sustainment).
- **Dek** (500, clamp(1.125rem, 1.7vw, 1.4rem), 1.32): the standfirst beside the vessel name, max 40ch.
- **Body** (400, 1.0625rem, 1.5): running text, max 52 to 70ch.
- **Label** (800, wdth 80): definition terms, table column heads, fieldset legends, run-in labels such as "Enquiries" and "Plate 1".
- **Figure** (700 to 750, wdth 85, right-aligned or last column): measured values in particulars blocks and tables.
- **Caption** (400, 0.875rem, ink-2, on a 1px rule): plate captions, led by the bold plate number in ink.
- **Annotation** (600, 13px in viewBox units, wdth 80): station numbers, labels and dimensions inside drawings; dimension figures carry a page-coloured stroke halo so they read over linework.

### Named Rules
**The Tabular Rule.** Every number is a tabular lining figure, set with thousands separators and units (8,323 mm, 1,300 kg).

**The Width-Axis Rule.** Hierarchy is made with `wdth` and weight, not with additional families. Narrower and heavier means more structural.

## Layout

A single centred column (max 1320px) with a fluid gutter (clamp(16px, 4vw, 48px)). Spacing uses a nine-step scale from 4px to 112px; section padding is s9 top and s8 bottom on desktop, stepping down to s8/s7 under 860px.

Sections open with a two-column head (headline left, paragraph right, both bottom-aligned) above a 2px rule. Content below is either a full-width drawing plate, a definition grid (four columns in the hero particulars, two in the mission entry), or a key/value grid with a fixed term column (9rem, 11rem or 13rem). Every row is separated by a 1px rule; groups are opened by a 2px rule.

One breakpoint carries the system: at 860px every multi-column grid collapses to one column and the masthead nav hides. A second at 520px shortens the masthead button label; at 640px drawings drop station numbers and enlarge their annotations so labels remain legible in viewBox units.

The masthead is sticky (64px) and scroll padding is 72px.

## Elevation & Depth

The system is flat. There are no drop shadows, no layering, no blur. Depth is conveyed only by field changes (page to bookcloth to an inset page plate) and by rule weight (2px opens a group, 1px separates rows). The single `box-shadow` in the build is an inset 4px signal bar under an invalid form field, a state mark rather than elevation.

### Named Rules
**The Ruled-Not-Lifted Rule.** Separation is a ruled line or a change of field, never a shadow or a card.

## Shapes

All corners are square (0px), including buttons and form fields. Form fields have no border except a 2px bottom edge. The only small geometric marks are the 10px square checkbox-style marker on mission options (outlined in current colour, filled signal when selected) and the CSS-drawn chevron on the select. The drawings themselves supply all curves: hull sheer, chine, waterlines, with dashed and dot-dash line types for waterlines, stations and the design waterline.

## Components

### Buttons
Blunt, filled and unmistakable: the only orange rectangles on the page.
- **Shape:** square corners (0px).
- **Primary:** signal fill, ink text, label weight 700 at wdth 90, 48px min height, 24px side padding.
- **Small:** 40px min height, 16px side padding, 0.9375rem; used in the masthead.
- **Hover:** fill swaps to ink, text to page (0.2s, ease-out expo `cubic-bezier(0.16, 1, 0.3, 1)`).
- **Focus:** 2px signal outline at 3px offset (global).
- **Disabled:** 55% opacity, progress cursor.
- On mobile the form and enquiry-line buttons go full width with centred labels.

### Masthead
A sticky bookcloth band (64px): the wordmark (a line-drawn hull glyph plus "OmniHopper", 800, wdth 110), section links in cloth-ink-2 (600, wdth 90; hover to cloth-ink with underline), and the small primary button pushed right.

### Particulars Block
A definition grid ruled like an almanac: 2px top rule, each pair on its own 1px-ruled row, term left in ink-2 at wdth 85, figure right in 750 at wdth 85. Four columns on desktop, one on mobile; long entries span two columns.

### Spec Table
Real `<table>` markup, 2px top rule, 1px row rules, column heads in label style. Columns: lettered reference (A to E, 800), key in ink-2, value in 700. Hovering a lettered row dims all other dimension callouts on the drawings to 25% so the matching dimension stands alone; row hover tints the row with 9% cloth.

### Mission Picker (signature)
A radiogroup of sector fieldsets on bookcloth. Each option is a full-width text row with a 1px cloth-ink-2 top rule and a 10px square marker at the right. Unselected: cloth-ink-2 text, outlined marker. Selected: cloth-ink text, 12px indent, signal-filled marker. Arrow keys move selection. Selecting redraws the payload in signal orange on the page-coloured mission plate and updates the mission entry below.

### Lit Value
When a mission changes, every value in the mission entry that changed takes a signal background with ink text (1px 4px padding, box-decoration-break clone) and keeps it until the next change. The light fades in over 0.6s when motion is allowed.

### Drawing Plate (signature)
An SVG lines plan in a figure: ink strokes with `vector-effect: non-scaling-stroke` (hull 2.2, standard 1.4, thin 0.9, stations 0.6 dotted, waterlines 6 4 dashed, design waterline 14 4 2 4 dot-dash), lettered dimension callouts with arrowheads, and a chequered scale bar. A caption on a 1px rule names the plate ("Plate 1") in bold ink. On load the drawing inks itself once (1.8s stroke draw, then annotations appear at 1.2s); under reduced motion it renders complete.

### Inputs / Fields
- **Style:** page-coloured fill on bookcloth, ink text, no border, 2px bottom edge in page colour, square corners, 48px min height, 12px padding. Labels sit above in 700 at wdth 85.
- **Focus:** 2px signal outline at 2px offset; caret and accent in signal.
- **Error:** bottom edge and a 4px inset bar in signal; a status line below states which fields are missing.

## Do's and Don'ts

### Do:
- **Do** draw the vessel; show it as a lines plan with stations, waterlines, lettered dimensions and a scale bar.
- **Do** reserve signal orange (signal) for the primary action, the selected marker and changed values.
- **Do** give bookcloth whole bands; place drawings inside a cloth field on a page-coloured plate.
- **Do** separate with ink rules: 2px to open a group, 1px between rows.
- **Do** set every figure tabular and lining, with thousands separators and units.
- **Do** build hierarchy with Archivo's width axis and weight: condensed heavy heads, narrow heavy labels.
- **Do** caption every drawing with a bold plate number on a 1px rule; label illustrative payloads as schematic.

### Don't:
- **Don't** use photography, renders, gradients or decorative imagery; the client brief retired photorealistic imagery.
- **Don't** add shadows, cards or rounded corners.
- **Don't** introduce greys or colours beyond the seven tokens, or fade text with opacity.
- **Don't** use signal orange for headings, section fills or decoration.
- **Don't** place small uppercase labels above headings; section heads are a headline plus a paragraph on a rule.
- **Don't** name the hull's manufacturer anywhere, in copy, drawings, alt text or file names; the vessel is OmniHopper.
