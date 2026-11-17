# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: Astro, static output. Chosen because the site is a content-led marketing site with no app logic, Astro ships zero JS by default, and static output deploys directly to Cloudflare Pages. Hosting is not final; Cloudflare is the likely target. The contact form needs a backend path that works on static hosting (e.g. Cloudflare Pages Functions or a form service): open decision.

## Users

Primary: decision-makers in armed forces, navies, coast guards and security services of various states who evaluate and procure autonomous unmanned surface vessels (USVs) and the services around them. They read the site to qualify a supplier before a technical conversation: what the vessel is, what it can carry and do, whether the supplier can adapt, test and sustain it.

Secondary (inferred from the inquiry types on the current site, not confirmed): technical and programme staff who request specifications, sea-trial slots or sustainment support after the decision-maker's first look.

## Product Purpose

OmniHopper offers one high-endurance autonomous unmanned tactical boat (a USV) and the full complex of services around it. The site exists to make a qualified buyer request technical documentation or a consultation.

Client brief for this redesign: replace the photorealistic imagery of the current site with abstract / schematic visuals. (Recorded as a binding brief constraint; the visual world itself is decided in new-work, not here.)

## Positioning

The vessel and its lifecycle as one offer: the platform, its adaptation to the mission, its validation at sea and its sustainment in the field come from one supplier, so the buyer does not assemble hull, integration, trials and MRO from separate vendors.

Open: the sharper differentiator against other USV suppliers has not been stated by the client yet.

## Operating Context

Services, as stated on the current omnihopper.com (our own site, reusable verbatim):

- Platform adaptation and engineering: rapid retrofitting and structural optimisation of hulls for mission profiles; sensor integration (EO/IR, SIGINT, active/passive sonar); antenna mast design for high-gain, EW-resilient communications; power management for long-endurance autonomous and semi-autonomous operation.
- Operational sea trials and validation: rapid prototyping and TRL advancement through on-water testing; environmental stress testing up to Sea State 4+; launch and recovery support for USVs and UUVs.
- Fleet sustainment and MRO: predictive maintenance, remote field support teams, lifecycle management from commissioning to decommissioning.

Mission sectors (source deck; rewrite before use):

- Defense: air and sea defense (intercepting low-flying targets and drones with AIM-9X; anti-submarine warfare with sonobuoys and Black Scorpion mini-torpedoes); electronic warfare (jamming communications, GPS/GNSS and radar); mine and strike (mine identification and destruction with Cobra / SeaFox, precision strike with loitering munitions); ISR and logistics (covert EO/IR/radar surveillance, tactical delivery of special units and supplies to shorelines).
- Government: 24/7 border security, EEZ monitoring, anti-sabotage for ports and offshore infrastructure; search and rescue with integrated liferafts; maritime firefighting via remote water monitors; environmental monitoring (oil spills, water quality, biodiversity).
- Commercial: hydrographic seafloor mapping, inspection of subsea cables and wind-farm assets; offshore logistics (up to 600 kg payload); autonomous ferry for personnel in remote or shallow coastal regions.

Inquiry types on the current site: platform specifications, sea-trial availability, fleet sustainment and MRO, technical consultation, other.

## Capabilities and Constraints

The vessel (the site is about this one platform only):

- Autonomous high-speed USV for patrol, maritime security and logistics. Dual-use (civil and military). Operates without constant human oversight; integrates with UAVs and other systems. Reinforced hull.
- L.O.A. 8,323 mm; beam 2.25 m; draft 0.33 m (deck reads "33 mm", treated as a typo); freeboard 441 mm
- Empty weight 700 kg; max weight 1,300 kg; useful load 600 kg
- Cruise speed 35 kn (at 0 Beaufort); max speed 60 kn
- Range 500 nm
- Engine: outboard, Mercury Marine V6, 200 bhp / 149 kW, max 5,800 rpm; propeller Mercury Enertia 14 ¾ × 19"
- Fuel 1,200 l
- Towed payload: 6.8 kg, 254 × 366 mm, anchored on the bow

Naming and content rules (from the client):

- The vessel itself is named OmniHopper (company and vessel share the name). Never mention ALMAR, LANCIA, M-08 or CETUS anywhere on the site, in code, metadata, alt text or file names.
- Single-product site: only this vessel and its services. The carrier platform from the source deck is out of scope.
- When sources disagree, the client's deck wins over the manufacturer's public website.
- omnihopper.com is our own site: any of its copy may be reused as is.
- Manufacturer's public website: facts may be used, wording may not. Every sentence taken from it must be rewritten.
- Default to the most compelling site for the client: deck specs, use cases and named weapon systems may be published. The client reviews the finished site and removes anything they object to.

Open decisions:

- What sea state the vessel survives (open question in the source deck); the services copy says testing to Sea State 4+.
- Contact form backend and destination.

## Brand Commitments

- Name: OmniHopper.
- Existing hero line: "High-Endurance Maritime Platforms for Mission-Critical Operations". Section line: "Forged at Sea. Built for Resilience."
- Voice on the current site: technical, sober, procurement-literate English (TRL, MRO, STANAG, Sea State).

## Evidence on Hand

- Current site copy: omnihopper.com (single page; reusable).
- Vessel specs and use cases: client's Google Slides deck (link held by the client).
- Standards listed on the current site: IEEE 12207, ISO 9001, SOLAS/IMO, relevant NATO STANAGs, ISO/IEC 27001. Unconfirmed whether these are certifications or claimed compliance: do not upgrade the wording to "certified".
- Absent, must not be fabricated: customers, deployments, testimonials, sea-trial results, combat record, pricing, team, country of origin, certificates.
- Imagery: no schematic assets exist yet; current photoreal imagery is being retired by brief.

## Product Principles

1. Specification before adjective. Buyers here verify; every claim should point to a number, a standard or a service they can request.
2. One vessel, one supplier, whole lifecycle: platform, adaptation, trials and sustainment read as one system.
3. OmniHopper is the brand of record. Nothing on the site points back to the manufacturer.
4. Every page leads to a qualified inquiry, not a generic contact.
