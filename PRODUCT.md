# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: Astro, static output. Chosen because the site is a content-led marketing site with no app logic, Astro ships zero JS by default, and static output deploys directly to Cloudflare Pages. Hosting is not final; Cloudflare is the likely target. The contact form needs a backend path that works on static hosting (e.g. Cloudflare Pages Functions or a form service): open decision.

## Users

Primary: decision-makers in armed forces, navies, coast guards and security services of various states who evaluate and procure autonomous unmanned surface vessels (USVs) and the services around them. They read the site to qualify a supplier before a technical conversation: what the platforms are, what they can carry and do, whether the supplier can adapt, test and sustain them.

Secondary (inferred from the inquiry types on the current site, not confirmed): technical and programme staff who request specifications, sea-trial slots or sustainment support after the decision-maker's first look.

## Product Purpose

OmniHopper offers high-endurance maritime platforms for mission-critical operations: autonomous unmanned tactical boats, plus the full complex of services around them. The site exists to make a qualified buyer request technical documentation or a consultation.

Client brief for this redesign: replace the photorealistic imagery of the current site with abstract / schematic visuals. (Recorded as a binding brief constraint; the visual world itself is decided in new-work, not here.)

## Positioning

Platforms and services as one offer: the vessel, its adaptation to the mission, its validation at sea, and its sustainment in the field come from one supplier, so the buyer does not assemble hull, integration, trials and MRO from separate vendors.

Open: the sharper differentiator against other USV suppliers has not been stated by the client yet.

## Operating Context

Services, as stated on the current omnihopper.com (our own site, reusable verbatim):

- Platform adaptation and engineering: rapid retrofitting and structural optimisation of hulls for mission profiles; sensor integration (EO/IR, SIGINT, active/passive sonar); antenna mast design for high-gain, EW-resilient communications; power management for long-endurance autonomous and semi-autonomous operation.
- Operational sea trials and validation: rapid prototyping and TRL advancement through on-water testing; environmental stress testing up to Sea State 4+; launch and recovery support for USVs and UUVs.
- Fleet sustainment and MRO: predictive maintenance, remote field support teams, lifecycle management from commissioning to decommissioning.

Mission sectors (from the ALMAR deck, rewrite before use): defense (air and sea defense, electronic warfare, mine countermeasures and strike, ISR and tactical logistics), government (border and EEZ security, port and offshore infrastructure protection, search and rescue, maritime firefighting, environmental monitoring), commercial (hydrographic survey, subsea cable and wind-farm inspection, offshore logistics, autonomous ferry).

Inquiry types on the current site: platform specifications, sea-trial availability, fleet sustainment and MRO, technical consultation, other.

## Capabilities and Constraints

Platforms:

- **LANCIA (M-08 USV)**: autonomous high-speed vessel for patrol, maritime security and logistics. Dual-use. Operates without constant human oversight; integrates with UAVs and other systems.
  - L.O.A. 8.23 m (deck: 8,323 mm), beam 2.25 m, draft 0.33 m
  - Light displacement 700 kg, max weight 1,300 kg, useful load 600 kg
  - Cruise speed 35 kn; max speed 60 kn (ALMAR site only)
  - Engine: outboard, Mercury Marine V6, 200 bhp / 149 kW, max 5,800 rpm; propeller Mercury Enertia 14 ¾ × 19"
  - Fuel 1,200 l
  - Towed payload: 6.8 kg, anchored on the bow
- **CETUS drone carrier**: 44-ft catamaran carrying 2 remotely controlled combat units and a crew of 8.
  - L.O.A. 13.27 m, beam 7.30 m, draft 1.13 m, light displacement 18 t
  - Max 20 kn, cruise 14 kn, 2 × 370 hp
  - Fuel 2,700 l, water 690 l; 4 berths, 2 heads; control room with 2 inline drone-control positions

Content rules (from the client):

- omnihopper.com is our own site: any of its copy may be reused as is.
- almarsystems.com: facts may be used, wording may not. Every sentence taken from it must be rewritten.

Open decisions (do not resolve by guessing):

- Conflicting figures: range 500 nm (deck) vs up to 300 nm (ALMAR site); payload 600 kg (deck) vs "1 ton" (ALMAR site headline); deck draft "33 mm" is read as 0.33 m. Which values to publish?
- The ALMAR deck is marked "Proprietary and confidential". Confirm which of its specs and use cases may be public.
- Whether named weapon systems in the use cases (AIM-9X, Black Scorpion, Cobra/SeaFox, loitering munitions) may appear on a public site.
- Relationship to ALMAR (manufacturer, partner, own brand?) and whether ALMAR, LANCIA and CETUS are named publicly.
- Open technical question from the deck: what sea state LANCIA survives.

## Brand Commitments

- Name: OmniHopper.
- Existing hero line: "High-Endurance Maritime Platforms for Mission-Critical Operations". Section line: "Forged at Sea. Built for Resilience."
- Voice on the current site: technical, sober, procurement-literate English (TRL, MRO, STANAG, Sea State).

## Evidence on Hand

- Current site copy: omnihopper.com (single page; reusable).
- Platform specs and use cases: Google Slides "ALMAR technical data and Q&A" (link held by the client; marked confidential).
- Public spec page: almarsystems.com/product/lancia-m08-usv (facts only, rewrite required).
- Standards listed on the current site: IEEE 12207, ISO 9001, SOLAS/IMO, relevant NATO STANAGs, ISO/IEC 27001. Unconfirmed whether these are certifications or claimed compliance: do not upgrade the wording to "certified".
- Absent, must not be fabricated: customers, deployments, testimonials, sea-trial results, combat record, pricing, team, country of origin, certificates.
- Imagery: no schematic assets exist yet; current photoreal imagery is being retired by brief.

## Product Principles

1. Specification before adjective. Buyers here verify; every claim should point to a number, a standard or a service they can request.
2. One supplier for the whole lifecycle: platform, adaptation, trials, sustainment read as one system.
3. Say less than you know. Publish only what the client cleared; sensitive capability stays behind the documentation request.
4. Every page leads to a qualified inquiry, not a generic contact.
