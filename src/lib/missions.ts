// Mission sets. Facts come from the client's platform deck; wording is ours.
// No figures here beyond the published particulars: mission packages are
// described, not quantified.

export type Mission = {
  id: string;
  name: string;
  package: string;
  sensors: string;
  effectors: string;
  note: string;
  /** backdrop word shown behind the vessel */
  word: string;
};

export type Sector = { id: string; name: string; missions: Mission[] };

export const sectors: Sector[] = [
  {
    id: 'defence',
    name: 'Defence',
    missions: [
      {
        id: 'air',
        word: 'Strike.',
        name: 'Air & sea defence',
        package: 'Deck launcher, forward',
        sensors: 'EO/IR turret, surface radar',
        effectors: 'AIM-9X against low-flying targets and drones; Black Scorpion mini-torpedoes and sonobuoys for ASW',
        note: 'Puts an interceptor and an anti-submarine screen where no crewed hull should sit.',
      },
      {
        id: 'ew',
        word: 'Signal.',
        name: 'Electronic warfare',
        package: 'Mast-head antenna array',
        sensors: 'Wideband receivers, direction finding',
        effectors: 'Jamming of communications, GPS/GNSS and radar networks',
        note: 'Radiates from a hull the adversary can target without costing a crew.',
      },
      {
        id: 'mine',
        word: 'Clear.',
        name: 'Mine countermeasures & strike',
        package: 'Aft mission bay with disposal vehicle',
        sensors: 'Hull sonar, EO/IR',
        effectors: 'Cobra / SeaFox mine identification and disposal; loitering munitions for precision strike',
        note: 'Keeps people out of the minefield from detection to neutralisation.',
      },
      {
        id: 'isr',
        word: 'Watch.',
        name: 'ISR & shore delivery',
        package: 'EO/IR mast, open cargo deck',
        sensors: 'EO/IR, radar, covert surveillance suite',
        effectors: 'Tactical delivery of special units and supplies to the shoreline',
        note: 'Watches quietly, then lands what the team ashore needs.',
      },
    ],
  },
  {
    id: 'government',
    name: 'Government',
    missions: [
      {
        id: 'patrol',
        word: 'Patrol.',
        name: 'Border & EEZ security',
        package: 'EO/IR mast, surface radar',
        sensors: 'EO/IR, radar, AIS',
        effectors: 'Round-the-clock patrol, anti-sabotage watch over ports and offshore infrastructure',
        note: 'A patrol that does not need a watch rotation.',
      },
      {
        id: 'sar',
        word: 'Rescue.',
        name: 'Search, rescue & firefighting',
        package: 'Liferaft canisters amidships, water monitor forward',
        sensors: 'EO/IR with thermal search',
        effectors: 'Integrated liferafts; remotely operated fire monitor',
        note: 'First on scene at 65 km/h, with rafts already aboard.',
      },
      {
        id: 'env',
        word: 'Sample.',
        name: 'Environmental monitoring',
        package: 'Sampling boom amidships',
        sensors: 'Water-quality probes, oil-spill detection',
        effectors: 'Persistent monitoring of protected marine areas and biodiversity',
        note: 'Long, quiet transects that a crewed survey could not afford.',
      },
    ],
  },
  {
    id: 'commercial',
    name: 'Commercial',
    missions: [
      {
        id: 'survey',
        word: 'Survey.',
        name: 'Survey & inspection',
        package: 'Hull-mounted multibeam',
        sensors: 'Multibeam echosounder, inspection sonar',
        effectors: 'Hydrographic seafloor mapping; subsea cable and wind-farm asset inspection',
        note: 'Shallow draft lets the survey run where larger vessels cannot.',
      },
      {
        id: 'cargo',
        word: 'Cargo.',
        name: 'Offshore logistics',
        package: 'Open cargo deck, up to 600 kg',
        sensors: 'Navigation suite',
        effectors: 'Equipment and provisions to offshore platforms',
        note: 'Resupply runs without putting a crew on the transfer.',
      },
      {
        id: 'ferry',
        word: 'Ferry.',
        name: 'Autonomous ferry',
        package: 'Personnel seating',
        sensors: 'Navigation suite, collision avoidance',
        effectors: 'Personnel transport in remote or shallow coastal waters',
        note: 'A scheduled crossing with no one at the helm.',
      },
    ],
  },
];

export const allMissions = sectors.flatMap((s) => s.missions.map((m) => ({ ...m, sector: s.name })));
