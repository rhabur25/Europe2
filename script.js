// script.js — initialize Leaflet map and add markers + sidebar interactions
const places = [
  {
    id: 'brussels-airbus',
    name: 'Brussels, Belgium',
    coords: [50.8503, 4.3517],
    desc: 'EU public affairs'
  },
  {
    id: 'diegem-airbus',
    name: 'Diegem, Belgium',
    coords: [50.9131, 4.4436],
    desc: 'Airbus Defense and Space operations'
  },
  {
    id: 'nivelles-airbus',
    name: 'Nivelles, Belgium',
    coords: [50.6004, 4.3281],
    desc: 'Airbus Defense and Space majority share'
  },
  {
    id: 'helsinki-airbus',
    name: 'Helsinki, Finland',
    coords: [60.1699, 24.9384],
    desc: 'Public Safety & Security and Intelligence'
  },
  {
    id: 'jyvaskyla-airbus',
    name: 'Jyväskylä, Finland',
    coords: [62.2426, 25.7473],
    desc: 'Public Safety & Security and Intelligence'
  },
  {
    id: 'toulouse-airbus',
    name: 'Toulouse, France',
    coords: [43.6045, 1.4440],
    desc: 'Headquarters'
  },
  {
    id: 'marignane-airbus',
    name: 'Marignane, France',
    coords: [43.4167, 5.2140],
    desc: 'Manufacturing center'
  },
  {
    id: 'bremen-airbus',
    name: 'Bremen, Germany',
    coords: [53.0793, 8.8017],
    desc: 'A400M fuselage assembly and production of the European Service Module (ESM) - critical for NASA\'s spacecraft for the next moon missions'
  },
  {
    id: 'friedrichshafen-airbus',
    name: 'Friedrichshafen, Germany',
    coords: [47.6514, 9.4797],
    desc: 'Focuses on satellite development, earth observation, and space exploration.'
  },
  {
    id: 'ottobrunn-airbus',
    name: 'Ottobrunn, Germany',
    coords: [48.0672, 11.6581],
    desc: 'Produces optical instruments, solar panels for satellites and rocket engines.'
  },
  {
    id: 'taufkirchen-airbus',
    name: 'Taufkirchen, Germany',
    coords: [48.0481, 11.6526],
    desc: 'Produces optical instruments, solar panels for satellites and rocket engines.'
  },
  {
    id: 'rome-airbus',
    name: 'Rome, Italy',
    coords: [41.9028, 12.4964],
    desc: 'Airbus Italia location'
  },
  {
    id: 'warsaw-airbus',
    name: 'Warsaw, Poland',
    coords: [52.2297, 21.0122],
    desc: 'Manufacturing'
  },
  {
    id: 'lodz-airbus',
    name: 'Łódź, Poland',
    coords: [51.7592, 19.4560],
    desc: 'Manufacturing'
  },
  {
    id: 'gdansk-airbus',
    name: 'Gdańsk, Poland',
    coords: [54.3520, 18.6466],
    desc: 'Manufacturing'
  },
  {
    id: 'getafe-airbus',
    name: 'Getafe, Spain',
    coords: [40.3086, -3.7327],
    desc: 'The nation\'s hub for satellite and launcher production.'
  },
  {
    id: 'stevenage-airbus',
    name: 'Stevenage, UK',
    coords: [51.9038, -0.1966],
    desc: 'Important manufacturing location'
  },
  {
    id: 'portsmouth-airbus',
    name: 'Portsmouth, UK',
    coords: [50.8198, -1.0880],
    desc: 'A world leader in radar design and manufacture having built the instrument for the NovaSAR-1 satellite'
  }
];

// Add OHB sites (company: 'ohb') — green pins
places.push(
  {
    id: 'bremen-ohb',
    name: 'Bremen, Germany (OHB)',
    coords: [53.0793, 8.8017],
    type: 'ohb',
    desc: 'OHB HQ and satellite/manufacturing facilities in Bremen.'
  },
  {
    id: 'oberpfaffenhofen-ohb',
    name: 'Oberpfaffenhofen, Germany (OHB)',
    coords: [48.0841, 11.2835],
    type: 'ohb',
    desc: 'Space systems, mission operations, and test facilities near Munich.'
  },
  {
    id: 'augsburg-ohb',
    name: 'Augsburg, Germany (OHB)',
    coords: [48.3715, 10.8985],
    type: 'ohb',
    desc: 'OHB engineering and subsystem development site.'
  },
  {
    id: 'milan-ohb',
    name: 'Milan, Italy (OHB)',
    coords: [45.4642, 9.1900],
    type: 'ohb',
    desc: 'OHB presence for European subsystems and integration.'
  },
  {
    id: 'stockholm-ohb',
    name: 'Stockholm, Sweden (OHB)',
    coords: [59.3293, 18.0686],
    type: 'ohb',
    desc: 'OHB activities in Sweden for payloads and instruments.'
  },
  {
    id: 'antwerp-ohb',
    name: 'Antwerp, Belgium (OHB)',
    coords: [51.2194, 4.4025],
    type: 'ohb',
    desc: 'OHB presence supporting European manufacturing and logistics.'
  },
  {
    id: 'betzdorf-ohb',
    name: 'Betzdorf, Germany (OHB)',
    coords: [50.6125, 7.8122],
    type: 'ohb',
    desc: 'Technical and support site for OHB activities.'
  },
  {
    id: 'kourou-ohb',
    name: 'Kourou, French Guiana (OHB)',
    coords: [5.2360, -52.7758],
    type: 'ohb',
    desc: 'Guiana Space Centre (Arianespace/launch integration) — OHB-related activity.'
  }
);

// Add SENER locations (company: 'sener') — purple pins
places.push(
  {
    id: 'getxo-sener',
    name: 'Getxo, Spain (SENER)',
    coords: [43.3470, -3.0333],
    type: 'sener',
    desc: 'Global headquarters; corporate leadership and origin of the company.'
  },
  {
    id: 'tres-cantos-sener',
    name: 'Tres Cantos, Madrid, Spain (SENER)',
    coords: [40.5430, -3.6958],
    type: 'sener',
    desc: 'Aerospace & defense engineering campus; satellite systems and space hardware.'
  },
  {
    id: 'arganda-sener',
    name: 'Arganda del Rey, Spain (SENER)',
    coords: [40.3457, -3.3607],
    type: 'sener',
    desc: 'Integration & testing center for space and defense components.'
  },
  {
    id: 'cerdanyola-sener',
    name: 'Cerdanyola del Vallès, Barcelona, Spain (SENER)',
    coords: [41.4851, 2.1086],
    type: 'sener',
    desc: 'Engineering office; civil, energy, and aerospace projects.'
  },
  {
    id: 'la-garriga-sener',
    name: 'La Garriga, Spain (SENER)',
    coords: [41.7117, 2.2878],
    type: 'sener',
    desc: 'Space communications facility; RF equipment and satellite electronics.'
  },
  {
    id: 'erandio-sener',
    name: 'Erandio, Spain (SENER)',
    coords: [43.3176, -2.9738],
    type: 'sener',
    desc: 'Manufacturing plant; heavy industrial and energy components.'
  },
  {
    id: 'mexicocity-sener',
    name: 'Mexico City, Mexico (SENER)',
    coords: [19.4326, -99.1332],
    type: 'sener',
    desc: 'Latin America HQ; energy and infrastructure projects across the region.'
  },
  {
    id: 'losangeles-sener',
    name: 'Los Angeles, USA (SENER)',
    coords: [34.0522, -118.2437],
    type: 'sener',
    desc: 'U.S. HQ; rail, aerospace, and defense business development.'
  },
  {
    id: 'warsaw-sener',
    name: 'Warsaw, Poland (SENER)',
    coords: [52.2297, 21.0122],
    type: 'sener',
    desc: 'Central Europe office; space technology center and satellite hardware production.'
  },
  {
    id: 'abu-dhabi-sener',
    name: 'Abu Dhabi, UAE (SENER)',
    coords: [24.4539, 54.3773],
    type: 'sener',
    desc: 'Middle East office; energy and metro infrastructure projects.'
  },
  {
    id: 'sydney-sener',
    name: 'Sydney, Australia (SENER)',
    coords: [-33.8688, 151.2093],
    type: 'sener',
    desc: 'Asia-Pacific HQ; transport and energy engineering for Oceania.'
  }
);

// Add Beyond Gravity locations (company: 'beyond') — pink pins
places.push(
  {
    id: 'bern-beyond',
    name: 'Bern, Switzerland (Beyond Gravity)',
    coords: [46.9480, 7.4474],
    type: 'beyond',
    desc: 'Engineering and production of satellites and launcher structures.'
  },
  {
    id: 'emmen-beyond',
    name: 'Emmen, Switzerland (Beyond Gravity)',
    coords: [47.1379, 8.2831],
    type: 'beyond',
    desc: 'Center of competence and production for lean, innovative manufacturing of structures for launch vehicles.'
  },
  {
    id: 'nyon-beyond',
    name: 'Nyon, Switzerland (Beyond Gravity)',
    coords: [46.3833, 6.2333],
    type: 'beyond',
    desc: 'Engineering and manufacturing of customized sliprings and high-accuracy electro-mechanical systems.'
  },
  {
    id: 'zurich-beyond',
    name: 'Zurich, Switzerland (Beyond Gravity)',
    coords: [47.3769, 8.5417],
    type: 'beyond',
    desc: 'Global HQ with competence centers and production for mechatronics and satellite structures.'
  },
  {
    id: 'decatur-beyond',
    name: 'Decatur, Alabama, USA (Beyond Gravity)',
    coords: [34.6059, -87.0164],
    type: 'beyond',
    desc: 'U.S. office HQ and modern production hall for launcher structures.'
  },
  {
    id: 'titusville-beyond',
    name: 'Titusville, Florida, USA (Beyond Gravity)',
    coords: [28.6122, -80.8076],
    type: 'beyond',
    desc: 'Semi-automated satellite panel production facility focused on the constellation market.'
  },
  {
    id: 'gothenburg-beyond',
    name: 'Gothenburg, Sweden (Beyond Gravity)',
    coords: [57.7089, 11.9746],
    type: 'beyond',
    desc: 'Competence center for high-reliability electronic products and mechatronics.'
  },
  {
    id: 'linkoping-beyond',
    name: 'Linkoping, Sweden (Beyond Gravity)',
    coords: [58.4108, 15.6214],
    type: 'beyond',
    desc: 'Engineering and production of dispensers and separation systems for major launch vehicles.'
  },
  {
    id: 'vienna-beyond',
    name: 'Vienna, Austria (Beyond Gravity)',
    coords: [48.2082, 16.3738],
    type: 'beyond',
    desc: 'Market leader for high-performance satellite navigation receivers.'
  },
  {
    id: 'berndorf-beyond',
    name: 'Berndorf, Austria (Beyond Gravity)',
    coords: [47.9276, 16.1379],
    type: 'beyond',
    desc: 'Supplier of electric propulsion pointing mechanisms.'
  },
  {
    id: 'tampere-beyond',
    name: 'Tampere, Finland (Beyond Gravity)',
    coords: [61.4982, 23.7610],
    type: 'beyond',
    desc: 'Engineering and production competence for interface and power electronics; ISO 8 cleanroom and radiation testing services.'
  },
  {
    id: 'lisbon-beyond',
    name: 'Lisbon, Portugal (Beyond Gravity)',
    coords: [38.7223, -9.1393],
    type: 'beyond',
    desc: 'Innovation and digital hub focusing on AI and digital infrastructure.'
  }
);


// Add Avio locations (company: 'avio') — red pins
places.push(
  {
    id: 'rivalta-avio',
    name: 'Rivalta di Torino, Italy (Avio)',
    coords: [45.1668, 7.5500],
    type: 'avio',
    desc: 'Mechanical Transmissions, Headquarters.'
  },
  {
    id: 'torino-sangone-avio',
    name: 'Torino - Sangone, Italy (Avio)',
    coords: [45.1333, 7.5667],
    type: 'avio',
    desc: 'Mechanical Transmissions, Test Plant.'
  },
  {
    id: 'borgaretto-avio',
    name: 'Borgaretto (Torino), Italy (Avio)',
    coords: [45.2000, 7.5500],
    type: 'avio',
    desc: 'Mechanical Transmissions, Foundry.'
  },
  {
    id: 'cameri-avio',
    name: 'Cameri (Novara), Italy (Avio)',
    coords: [45.6833, 8.6333],
    type: 'avio',
    desc: 'Additive Manufacturing.'
  },
  {
    id: 'pomigliano-avio',
    name: 'Pomigliano d\'Arco (Napoli), Italy (Avio)',
    coords: [40.8842, 14.3322],
    type: 'avio',
    desc: 'Services, Turbomachinery.'
  },
  {
    id: 'brindisi-avio',
    name: 'Brindisi, Italy (Avio)',
    coords: [40.6350, 17.9435],
    type: 'avio',
    desc: 'Test, Case & Frames, Services.'
  },
  {
    id: 'bielsko-avio',
    name: 'Bielsko-Biała, Poland (Avio)',
    coords: [49.8165, 19.0516],
    type: 'avio',
    desc: 'Turbomachinery.'
  },
  {
    id: 'prague-avio',
    name: 'Prague, Czech Republic (Avio)',
    coords: [50.0755, 14.4378],
    type: 'avio',
    desc: 'Turboprop engines.'
  }
  ,
  {
    id: 'arlington-avio',
    name: 'Arlington, Virginia, USA (Avio)',
    coords: [38.8816, -77.0910],
    type: 'avio',
    desc: 'USA manufacturing headquarters.'
  }
);

// Add Thales Alenia Space locations (marked with type: 'thales')
places.push(
  {
    id: 'belfast-thales',
    name: 'Belfast, Northern Ireland',
    coords: [54.5973, -5.9301],
    type: 'thales',
    desc: 'Manufacturer, assembly, integration and testing of satellite platforms; chemical and electric propulsion.'
  },
  {
    id: 'harwell-thales',
    name: 'Harwell, Oxfordshire',
    coords: [51.5710, -1.3210],
    type: 'thales',
    desc: 'Design authority for chemical, electric and bi-propellant propulsion; engineering, quality, project and program management.'
  },
  {
    id: 'leuven-thales',
    name: 'Leuven, Belgium',
    coords: [50.8798, 4.7005],
    type: 'thales',
    desc: 'Automated production of solar panels and smart data.'
  },
  {
    id: 'hasselt-thales',
    name: 'Hasselt, Belgium',
    coords: [50.9313, 5.3378],
    type: 'thales',
    desc: 'Development of avionics and micro-electronics equipment for satellites and launch vehicles.'
  },
  {
    id: 'charleroi-thales',
    name: 'Charleroi, Belgium',
    coords: [50.4114, 4.4448],
    type: 'thales',
    desc: 'Development and production of electronics and software products for the European satellite and launch vehicle markets.'
  },
  {
    id: 'luxembourg-thales',
    name: 'Luxembourg',
    coords: [49.6116, 6.1319],
    type: 'thales',
    desc: 'Focus on AI, data valorization, cybersecurity, secured digital platform, data analytics, digital twins, and cloud-native solutions.'
  },
  {
    id: 'zurich-thales',
    name: 'Zurich, Switzerland',
    coords: [47.3769, 8.5417],
    type: 'thales',
    desc: 'Optical communications, radiation and space weather monitors, drive and control electronics, photonics, and camera and remote sensing.'
  },
  {
    id: 'toulouse-thales',
    name: 'Toulouse, France (Thales)',
    coords: [43.6045, 1.4440],
    type: 'thales',
    desc: 'Telecommunications payloads, navigation, ground segments, and system engineering.'
  },
  {
    id: 'cannes-thales',
    name: 'Cannes, France',
    coords: [43.5528, 7.0174],
    type: 'thales',
    desc: 'Headquarters and industrial site; telecommunications platforms, VHR optical instruments, assembly, integration and tests for satellites.'
  },
  {
    id: 'madrid-thales',
    name: 'Madrid, Spain',
    coords: [40.4168, -3.7038],
    type: 'thales',
    desc: 'Telecommunications payloads, satellite communications systems, observation instruments, software and ground segments, RF units and digital electronics.'
  },
  {
    id: 'turin-thales',
    name: 'Turin, Italy',
    coords: [45.0703, 7.6869],
    type: 'thales',
    desc: 'Pressurized habitable and logistic modules, space transportation, exploration probes, scientific satellites, orbital infrastructure, robotic exploration, on-orbit servicing.'
  },
  {
    id: 'gorgonzola-thales',
    name: 'Gorgonzola, Italy',
    coords: [45.5167, 9.3667],
    type: 'thales',
    desc: 'Radar earth observation, telecommunications, defense applications, antennas and reflectors, and transponders.'
  },
  {
    id: 'laquila-thales',
    name: "L'Aquila, Italy",
    coords: [42.3498, 13.3995],
    type: 'thales',
    desc: 'Radar earth observation, telecommunications, defense applications, antennas and reflectors, and transponders.'
  },
  {
    id: 'rome-thales',
    name: 'Rome, Italy',
    coords: [41.9028, 12.4964],
    type: 'thales',
    desc: 'Satellite assembly, integration and testing, space systems design, earth navigation, telecoms, defense satellites, and antennas.'
  }
);

// Add Safran locations (company: 'safran') — teal pins
places.push(
  {
    id: 'paris-safran',
    name: 'Paris, France (Safran)',
    coords: [48.8566, 2.3522],
    type: 'safran',
    desc: 'Safran headquarters; aerospace propulsion, equipment, and defense.'
  },
  {
    id: 'bordes-safran',
    name: 'Bordes, France (Safran)',
    coords: [43.1856, -0.3764],
    type: 'safran',
    desc: 'Safran Helicopter Engines HQ and major production site.'
  },
  {
    id: 'villaroche-safran',
    name: 'Villaroche, France (Safran)',
    coords: [48.6017, 2.6706],
    type: 'safran',
    desc: 'Safran Aircraft Engines; large civil and military engine assembly.'
  },
  {
    id: 'issoudun-safran',
    name: 'Issoudun, France (Safran)',
    coords: [46.9500, 2.0000],
    type: 'safran',
    desc: 'Safran Seats; aircraft seating manufacturing.'
  },
  {
    id: 'le-creusot-safran',
    name: 'Le Creusot, France (Safran)',
    coords: [46.8101, 4.4861],
    type: 'safran',
    desc: 'Safran Landing Systems; wheels and brakes.'
  },
  {
    id: 'charleroi-safran',
    name: 'Charleroi, Belgium (Safran)',
    coords: [50.4114, 4.4448],
    type: 'safran',
    desc: 'Safran Aero Boosters; engine components.'
  },
  {
    id: 'hamburg-safran',
    name: 'Hamburg, Germany (Safran)',
    coords: [53.5511, 9.9937],
    type: 'safran',
    desc: 'Safran Cabin; aircraft interiors.'
  },
  {
    id: 'gloucester-safran',
    name: 'Gloucester, UK (Safran)',
    coords: [51.8642, -2.2382],
    type: 'safran',
    desc: 'Safran Landing Systems; wheels and brakes.'
  },
  {
    id: 'burnley-safran',
    name: 'Burnley, UK (Safran)',
    coords: [53.7893, -2.2400],
    type: 'safran',
    desc: 'Safran Nacelles; engine nacelle manufacturing.'
  },
  {
    id: 'casablanca-safran',
    name: 'Casablanca, Morocco (Safran)',
    coords: [33.5731, -7.5898],
    type: 'safran',
    desc: 'Safran Aircraft Engines and Safran Electrical & Power; production and MRO.'
  },
  {
    id: 'queretaro-safran',
    name: 'Querétaro, Mexico (Safran)',
    coords: [20.5888, -100.3899],
    type: 'safran',
    desc: 'Safran Aircraft Engines and Safran Landing Systems; manufacturing and MRO.'
  },
  {
    id: 'singapore-safran',
    name: 'Singapore (Safran)',
    coords: [1.3521, 103.8198],
    type: 'safran',
    desc: 'Safran Electronics & Defense; Asia-Pacific regional office.'
  },
  {
    id: 'suzhou-safran',
    name: 'Suzhou, China (Safran)',
    coords: [31.2989, 120.5853],
    type: 'safran',
    desc: 'Safran Electrical & Power; wiring and electrical systems.'
  },
  {
    id: 'hyderabad-safran',
    name: 'Hyderabad, India (Safran)',
    coords: [17.3850, 78.4867],
    type: 'safran',
    desc: 'Safran Aircraft Engines and Safran Electrical & Power; engineering and production.'
  },
  {
    id: 'dallas-safran',
    name: 'Dallas, Texas, USA (Safran)',
    coords: [32.7767, -96.7970],
    type: 'safran',
    desc: 'Safran USA HQ; aerospace and defense business development.'
  },
  {
    id: 'redmond-safran',
    name: 'Redmond, Washington, USA (Safran)',
    coords: [47.673988, -122.121513],
    type: 'safran',
    desc: 'Safran Cabin; aircraft interiors.'
  }
);

// Add Telespazio locations (company: 'telespazio') — navy blue pins
places.push(
  // France
  { id: 'toulouse-telespazio', name: 'Toulouse, France (Telespazio)', coords: [43.6045, 1.4440], type: 'telespazio', desc: '26, Avenue J.F. Champollion Bâtiment, 31100 Toulouse, France. Phone: +33 (0)53435 6575. HQ for Telespazio France.' },
  { id: 'paris-telespazio', name: 'Paris, France (Telespazio)', coords: [48.8566, 2.3522], type: 'telespazio', desc: '83 boulevard de Montparnasse 75006 Paris, France. Phone: +33 (0)1 49 27 66 11. Permanent Establishment.' },
  { id: 'bordeaux-telespazio', name: 'Bordeaux, France (Telespazio)', coords: [44.8333, -0.5667], type: 'telespazio', desc: '(c/o AEROCAMPUS) 1, route de Cénac, 33 360 Latresne France Bordeaux. Phone: +33 (0)5 56 21 01 38. Permanent Establishment.' },
  { id: 'kourou-telespazio', name: 'Kourou, French Guiana (Telespazio)', coords: [5.1658, -52.6417], type: 'telespazio', desc: 'ZI De Pariacabo, BP 878 97388 Kourou, French Guyane. Phone: +594 594 22 33 36. Permanent Establishment.' },
  // Germany
  { id: 'darmstadt-telespazio', name: 'Darmstadt, Germany (Telespazio)', coords: [49.8728, 8.6512], type: 'telespazio', desc: 'Europaplatz, 5 D-64293 Darmstadt (Germany). Phone: +49 (0)6151–8257-0/ +49 (0)6151–8257–799. Headquarters.' },
  { id: 'gilching-telespazio', name: 'Gilching, Germany (Telespazio)', coords: [48.1106, 11.2936], type: 'telespazio', desc: 'Friedrichshafener Str. 3 (Asto Park) D-82205 Gilching (Germany). Phone: +49 (0)6151–8257-0/ +49 (0)6151–8257–799. Branch office.' },
  { id: 'munich-gaf-telespazio', name: 'Munich, Germany (GAF/Telespazio)', coords: [48.1351, 11.5820], type: 'telespazio', desc: 'Arnulfstrasse, 199 D-80634 Munich (Germany). Phone: +49-89-121528-0 /+49-89-121528-79. GAF Headquarters.' },
  { id: 'neustrelitz-gaf-telespazio', name: 'Neustrelitz, Germany (GAF/Telespazio)', coords: [53.3333, 13.0167], type: 'telespazio', desc: 'Kalkhorstweg, 53 D-17235 Neustrelitz (Germany). Phone: +49 3981 48830/ +49 3981 488320. GAF branch office.' },
  { id: 'munich-spaceopal-telespazio', name: 'Munich, Germany (Spaceopal/Telespazio)', coords: [48.1486, 11.5411], type: 'telespazio', desc: 'Arnulfstrasse, 58 D-80335 Munich (Germany). Phone: +49 (0) 89 4111856 0 / +49 (0) 89 4111856 29. HQ and operations building.' },
  // Italy
  { id: 'rome-telespazio', name: 'Rome, Italy (Telespazio)', coords: [41.9028, 12.4964], type: 'telespazio', desc: 'Via Tiburtina, 965 00156 Rome, Italy. Headquarters.' },
  { id: 'scanzano-telespazio', name: 'Scanzano, Italy (Telespazio)', coords: [38.0167, 13.3833], type: 'telespazio', desc: 'SP. Piana degli Albanesi Km 39,5 90037 - Palermo, Italy. Phone: +39 091 8451 111. Space Center.' },
  { id: 'matera-telespazio', name: 'Matera, Italy (Telespazio/e-GEOS)', coords: [40.6663, 16.6042], type: 'telespazio', desc: 'Contrada Terlecchie 75100 Matera (Italy). Phone: +39 0835 375 422. Geospatial operations.' },
  { id: 'naples-telespazio', name: 'Naples, Italy (Telespazio)', coords: [40.8522, 14.2681], type: 'telespazio', desc: 'Via Luis Bleriot 82 80144 Naples, Italy. Commercial office.' },
  { id: 'fucino-telespazio', name: 'Fucino, Italy (Telespazio)', coords: [41.9583, 13.6667], type: 'telespazio', desc: 'Strada 31 Fucino snc 67050 - Ortucchio (AQ), Italy. Phone: +39 0863 550239/550240. Space Center.' },
  { id: 'lario-telespazio', name: 'Gera Lario, Italy (Telespazio)', coords: [46.1833, 9.3667], type: 'telespazio', desc: 'Loc. Pian di Spagna I-22050 Gera Lario (CO), Italy. Phone: +39 0344 93111. Space Center.' },
  // Latin America
  { id: 'rj-barao-tefe-telespazio', name: 'Rio de Janeiro, Brazil (Barão de Tefé Teleport/Telespazio)', coords: [-22.9068, -43.1729], type: 'telespazio', desc: 'Barão de Tefé Teleport. Operations facility.' },
  { id: 'itaborai-telespazio', name: 'Itaboraí, Brazil (Telespazio)', coords: [-22.7447, -42.8578], type: 'telespazio', desc: 'Itaboraí Teleport. Operations facility.' },
  { id: 'marica-telespazio', name: 'Maricá, Brazil (Telespazio)', coords: [-22.935, -42.8214], type: 'telespazio', desc: 'Maricá Teleport. Operations facility.' },
  { id: 'benavidez-telespazio', name: 'Benavidez, Argentina (Telespazio)', coords: [-34.375, -58.6667], type: 'telespazio', desc: 'Benavidez Teleport, Buenos Aires province, ARSAT affiliated. Operations facility.' },
  { id: 'malargue-telespazio', name: 'Malargüe, Argentina (Telespazio)', coords: [-35.4833, -69.5833], type: 'telespazio', desc: 'Deep Space Antenna 3, Mendoza, ESA facility. Operations facility.' },
  { id: 'rj-hq-telespazio', name: 'Rio de Janeiro, Brazil (Telespazio HQ)', coords: [-22.9068, -43.1729], type: 'telespazio', desc: 'Av. Rio Branco, 1 / 1808/1803 – Centro Rio de Janeiro - Brasil  CEP : 20090-003. Phone: +55 21 21413100. Brazil HQ/sales facility.' },
  { id: 'buenosaires-hq-telespazio', name: 'Buenos Aires, Argentina (Telespazio HQ)', coords: [-34.6037, -58.3816], type: 'telespazio', desc: 'Av. Del Libertador N° 5926/30, Piso 7° Torre Sur (C1428ARP) Ciudad Autónoma de Buenos Aires, Argentina. Phone: + 54 11 4852 8700. Argentina HQ/sales facility.' },
  { id: 'santiago-hq-telespazio', name: 'Santiago, Chile (Telespazio HQ)', coords: [-33.4372, -70.6506], type: 'telespazio', desc: 'Av. Vespucio Norte, Nro. 1090, Depto: 304 Comuna: Vitacura, Ciudad: Santiago, ROL: 439-29. Chile HQ/sales facility.' },
  { id: 'lima-hq-telespazio', name: 'Lima, Peru (Telespazio HQ)', coords: [-12.0464, -77.0428], type: 'telespazio', desc: 'Calle Camino Real 159, oficina 300, San isidro, Lima. Phone: +54 11 4852 8720. Peru HQ/sales facility.' },
  { id: 'bogota-hq-telespazio', name: 'Bogotá, Colombia (Telespazio HQ)', coords: [4.7110, -74.0721], type: 'telespazio', desc: 'Edificio Emprendu. Cra. 13 #83-19, Piso 3. Oficinas 36 a 44 Chapinero, Bogotá. Colombia HQ/sales facility.' },
  { id: 'costarica-hq-telespazio', name: 'San José, Costa Rica (Telespazio HQ)', coords: [9.9281, -84.0907], type: 'telespazio', desc: 'San Pedro, Los Yoses, De la esquina sur del ICE, 150 mts oeste sobre AV.1O, entre calle 45 Y 47. Edificio Oslavia, San José. Phone: +506 4034 9085. Costa Rica HQ/sales facility.' },
  // Romania
  { id: 'bucharest-hq-telespazio', name: 'Bucharest, Romania (Telespazio HQ)', coords: [44.4268, 26.1025], type: 'telespazio', desc: '70 Dr. Iacob Felix Street, Sector 1, 011041 - Bucharest, Romania. Phone: +4021 319.68.04/+4021 319.68.05. HQ.' },
  { id: 'cheia-spacecenter-telespazio', name: 'Cheia, Romania (Telespazio)', coords: [45.3667, 25.9333], type: 'telespazio', desc: 'Statia de Sol Cheia, Judetul Prahova, Romania. Largest teleport in Europe, 12 antennas, 20,000 sqm. In-orbit communication/control. Built in 1977.' },
  // Spain
  { id: 'madrid-hq-telespazio', name: 'Madrid, Spain (Telespazio Ibérica HQ)', coords: [40.4168, -3.7038], type: 'telespazio', desc: 'Avenida de Manoteras 18, Floor 5 - Office 3 28050, Madrid - Spain. Phone: +34 915 533 865. HQ.' },
  { id: 'barcelona-telespazio', name: 'Barcelona, Spain (Telespazio)', coords: [41.3851, 2.1734], type: 'telespazio', desc: 'Marqués de Sentmenat, 54 1º 3ª 08029, Barcelona - Spain. Phone: +34 935 830 200. Branch office.' },
  { id: 'vigo-telespazio', name: 'Vigo, Spain (Telespazio)', coords: [42.2406, -8.7207], type: 'telespazio', desc: 'Calle de Puerto Rico, 20 36204, Vigo - Spain. Phone: +34 935 830 200. Branch office.' },
  { id: 'fuerteventura-telespazio', name: 'Fuerteventura, Spain (Telespazio)', coords: [28.5006, -13.8627], type: 'telespazio', desc: 'Antiguo Aeropuerto de los Estancos sn 35612, Las Palmas - Fuerteventura - Spain. Phone: +34 935 830 200. Branch office.' },
  // UK
  { id: 'luton-hq-telespazio', name: 'Luton, UK (Telespazio HQ)', coords: [51.8787, -0.4200], type: 'telespazio', desc: '350 Capability Green, Luton, Bedfordshire LU1 3LU - UK - (For SatNav enter LU1 3PG). Phone: +44 (0)1582 399 000. HQ.' },
  { id: 'harwell-telespazio', name: 'Harwell, UK (Telespazio)', coords: [51.5710, -1.3210], type: 'telespazio', desc: 'Harwell Science and Innovation Campus Electron Building, Fermi Avenue, Harwell, Oxfordshire OX11 0QR – UK. Phone: +44 (0)1235 438400 (Switchboard). Sales office.' }
);
places.push(
  // France
  {
    id: 'brest-arianegroup',
    name: 'Brest, France (ArianeGroup)',
    coords: [48.2826, -4.4896],
    type: 'arianegroup',
    desc: 'Site de Guenvenez, 29160 Crozon, France. Assembly station.'
  },
  {
    id: 'lehaillan-arianegroup',
    name: 'Le Haillan, France (ArianeGroup)',
    coords: [44.8722, -0.6706],
    type: 'arianegroup',
    desc: 'Les Cinq Chemins, Rue de Touban, 33185 Le Haillan. Center for design and production of solid fuel engines and their main components.'
  },
  {
    id: 'lesmureaux-arianegroup',
    name: 'Les Mureaux, France (ArianeGroup)',
    coords: [48.9947, 1.9147],
    type: 'arianegroup',
    desc: '66 Route de Verneuil, 78130 Les Mureaux. Main production center for launcher development programs, final assembly lines for Ariane 6, Ariane Group headquarters.'
  },
  {
    id: 'saintmedard-centre-arianegroup',
    name: 'Saint-Médard-en-Jalles Centre, France (ArianeGroup)',
    coords: [44.9000, -0.7167],
    type: 'arianegroup',
    desc: 'Avenue Gay Lussac, 33165 Saint-Médard-en-Jalles. Decommissions and depollutes end of life missiles.'
  },
  {
    id: 'saintmedard-issac-arianegroup',
    name: 'Saint-Médard-en-Jalles ISSAC, France (ArianeGroup)',
    coords: [44.9000, -0.7167],
    type: 'arianegroup',
    desc: 'Rue du Général Niox, 33165 Saint-Médard-en-Jalles. Designs and builds high-pressure tanks, thermal protection systems, cabling, and re-entry heat shields. Helix network telescopes.'
  },
  {
    id: 'toulouse-arianegroup',
    name: 'Toulouse, France (ArianeGroup)',
    coords: [43.6045, 1.4440],
    type: 'arianegroup',
    desc: '19 Chemin de la Loge, 31400 Toulouse. Develops and produces ammonium perchlorate for solid fuel engines.'
  },
  {
    id: 'vernon-arianegroup',
    name: 'Vernon, France (ArianeGroup)',
    coords: [49.0926, 1.4852],
    type: 'arianegroup',
    desc: 'Forêt de Vernon, 27207 Vernon. Integrates and tests cryogenic space launcher engines, Vulcain 2.1 and Vinci engines.'
  },
  {
    id: 'vertlepetit-arianegroup',
    name: 'Vert-le-Petit, France (ArianeGroup)',
    coords: [48.5372, 2.3897],
    type: 'arianegroup',
    desc: 'Rue Lavoisier, 91710 Vert-le-Petit. Centre of excellence for energetic materials, solid propulsion, pyrotechnic systems.'
  },
  {
    id: 'kourou-arianegroup',
    name: 'Kourou, French Guiana (ArianeGroup)',
    coords: [5.2360, -52.7758],
    type: 'arianegroup',
    desc: 'CSG, Site ELA2, Bâtiment Kepler, BP 832, Centre Spatiale, 97210 Kourou. Europe’s Spaceport, Ariane 6 integration and launch campaigns.'
  },
  // Germany
  {
    id: 'bremen-arianegroup',
    name: 'Bremen, Germany (ArianeGroup)',
    coords: [53.0793, 8.8017],
    type: 'arianegroup',
    desc: 'Airbus-Allee 1, 28199 Bremen. Development and manufacture of the upper stage of Ariane launchers.'
  },
  {
    id: 'lampoldshausen-arianegroup',
    name: 'Lampoldshausen, Germany (ArianeGroup)',
    coords: [49.2422, 9.3833],
    type: 'arianegroup',
    desc: 'Im Langen Grund, 74239 Lampoldshausen. Centre of excellence for propulsion systems for satellites, spacecraft, and orbital platforms.'
  },
  {
    id: 'ottobrunn-arianegroup',
    name: 'Ottobrunn, Germany (ArianeGroup)',
    coords: [48.0672, 11.6581],
    type: 'arianegroup',
    desc: 'Robert-Koch-Str. 1, 82024 Taufkirchen. Centre of excellence for space engine combustion chambers.'
  },
  {
    id: 'trauen-arianegroup',
    name: 'Trauen, Germany (ArianeGroup)',
    coords: [52.8667, 10.2833],
    type: 'arianegroup',
    desc: 'Eugen-Sänger-Str. 52, 29328 Faßberg. Centre of excellence for hydrazine production and transformation.'
  }
);

// Create the map centered roughly on western/central Europe
const map = L.map('map', { zoomControl: true }).setView([50.0, 3.0], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

const markers = {};
const group = L.featureGroup().addTo(map);

// Unified marker shape (pin) for both companies, different colors.
// Also use MarkerClusterGroup so overlapping markers are spiderfied and both are accessible.
const companyColor = {
  airbus: '#0074D9', // blue
  thales: '#e67e22'  // orange
};

// OHB (green)
companyColor.ohb = '#2ecc40';
// Beyond Gravity (pink)
companyColor.beyond = '#ff69b4';
// SENER (purple)
companyColor.sener = '#8e44ad';
// Avio (red)
companyColor.avio = '#e74c3c';
// Safran (teal)
companyColor.safran = '#20b2aa';
// ArianeGroup (yellow)
companyColor.arianegroup = '#ffd600';

// Create marker cluster group (handles spiderfy for overlapping markers)
const clusterGroup = L.markerClusterGroup({
  spiderfyOnMaxZoom: true,
  showCoverageOnHover: false,
  disableClusteringAtZoom: 12
}).addTo(map);

// Helper: create a simple SVG pin icon data URL for a given color
function createPinIcon(color) {
  const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="32" height="44" viewBox="0 0 32 44">` +
    `<path d="M16 0C9.372 0 4 5.372 4 12c0 9.333 12 24 12 24s12-14.667 12-24c0-6.628-5.372-12-12-12z" fill="${color}" stroke="#333" stroke-width="1"/>` +
    `<circle cx="16" cy="12" r="5" fill="white" opacity="0.9"/>` +
    `</svg>`;
  const url = "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  return L.icon({
    iconUrl: url,
    iconSize: [32, 44],
    iconAnchor: [16, 44],
    popupAnchor: [0, -40]
  });
}

// Pre-create icons per company
const icons = {
  airbus: createPinIcon(companyColor.airbus),
  thales: createPinIcon(companyColor.thales)
};
// add OHB icon
icons.ohb = createPinIcon(companyColor.ohb);
// add Beyond Gravity icon
icons.beyond = createPinIcon(companyColor.beyond);
// add SENER icon
icons.sener = createPinIcon(companyColor.sener);
// add Avio icon
icons.avio = createPinIcon(companyColor.avio);
// add Safran icon
icons.safran = createPinIcon(companyColor.safran);
// add ArianeGroup icon
icons.arianegroup = createPinIcon(companyColor.arianegroup);

places.forEach(place => {
  // company is determined by place.type when provided; default to 'airbus'
  const company = place.type || 'airbus';
  const icon = icons[company] || createPinIcon('#666');
  const marker = L.marker(place.coords, { icon: icon });
  marker.bindPopup(`<strong>${place.name}</strong><br>${place.desc}`);
  markers[place.id] = marker;
  place.company = company; // remember company for sidebar placement
  clusterGroup.addLayer(marker);
});

// Fit map to show all markers (use clusterGroup bounds)
if (places.length) {
  const bounds = clusterGroup.getBounds();
  if (bounds.isValid()) map.fitBounds(bounds.pad(0.2));
}

// Build sidebar lists split by company (show only names; descriptions as hover titles)
const airbusList = document.getElementById('airbus-places');
const thalesList = document.getElementById('thales-places');
const ohbList = document.getElementById('ohb-places');
const beyondList = document.getElementById('beyond-places');
const senerList = document.getElementById('sener-places');
const avioList = document.getElementById('avio-places');
const safranList = document.getElementById('safran-places');
const arianegroupList = document.getElementById('arianegroup-places');
const argentinaList = document.getElementById('argentina-places');
const chileList = document.getElementById('chile-places');
const brazilList = document.getElementById('brazil-places');
const colombiaList = document.getElementById('colombia-places');
const costaricaList = document.getElementById('costarica-places');
const peruList = document.getElementById('peru-places');
const romaniaList = document.getElementById('romania-places');
const telespazioList = document.getElementById('telespazio-places');

places.forEach(place => {
  const li = document.createElement('li');
  li.tabIndex = 0;
  li.setAttribute('data-id', place.id);

  const name = document.createElement('div');
  name.className = 'place-name';
  name.textContent = place.name;
  li.title = place.desc || '';

  li.appendChild(name);
  // add a company-specific class for coloring in the sidebar
  if (place.company === 'thales') li.classList.add('company-thales');
  else if (place.company === 'ohb') li.classList.add('company-ohb');
  else if (place.company === 'beyond') li.classList.add('company-beyond');
  else if (place.company === 'sener') li.classList.add('company-sener');
  else if (place.company === 'avio') li.classList.add('company-avio');
  else if (place.company === 'safran') li.classList.add('company-safran');
  else if (place.company === 'arianegroup') li.classList.add('company-arianegroup');
  else if (place.company === 'telespazio') li.classList.add('company-telespazio');
  else li.classList.add('company-airbus');

  li.addEventListener('click', () => {
    const m = markers[place.id];
    if (m) {
      map.setView(place.coords, 12, { animate: true });
      setTimeout(() => m.openPopup(), 300);
    }
  });

  li.addEventListener('keypress', (ev) => {
    if (ev.key === 'Enter' || ev.key === ' ') li.click();
  });

  const country = getCountry(place);
  if (country === 'Argentina') {
    if (argentinaList) argentinaList.appendChild(li);
  } else if (country === 'Chile') {
    if (chileList) chileList.appendChild(li);
  } else if (country === 'Brazil') {
    if (brazilList) brazilList.appendChild(li);
  } else if (country === 'Colombia') {
    if (colombiaList) colombiaList.appendChild(li);
  } else if (country === 'Costa Rica') {
    if (costaricaList) costaricaList.appendChild(li);
  } else if (country === 'Peru') {
    if (peruList) peruList.appendChild(li);
  } else if (country === 'Romania') {
    if (romaniaList) romaniaList.appendChild(li);
  } else if (place.company === 'thales') {
    thalesList.appendChild(li);
  } else if (place.company === 'ohb') {
    if (ohbList) ohbList.appendChild(li);
  } else if (place.company === 'beyond') {
    if (beyondList) beyondList.appendChild(li);
  } else if (place.company === 'sener') {
    if (senerList) senerList.appendChild(li);
  } else if (place.company === 'avio') {
    if (avioList) avioList.appendChild(li);
  } else if (place.company === 'safran') {
    if (safranList) safranList.appendChild(li);
  } else if (place.company === 'arianegroup') {
    if (arianegroupList) arianegroupList.appendChild(li);
  } else if (place.company === 'telespazio') {
    if (telespazioList) telespazioList.appendChild(li);
  } else {
    airbusList.appendChild(li);
  }
});

// Update counts in headings
const argentinaCountEl = document.getElementById('argentina-count');
const chileCountEl = document.getElementById('chile-count');
const brazilCountEl = document.getElementById('brazil-count');
const colombiaCountEl = document.getElementById('colombia-count');
const costaricaCountEl = document.getElementById('costarica-count');
const peruCountEl = document.getElementById('peru-count');
const romaniaCountEl = document.getElementById('romania-count');
if (argentinaCountEl) argentinaCountEl.textContent = `(${argentinaList ? argentinaList.children.length : 0})`;
if (chileCountEl) chileCountEl.textContent = `(${chileList ? chileList.children.length : 0})`;
if (brazilCountEl) brazilCountEl.textContent = `(${brazilList ? brazilList.children.length : 0})`;
if (colombiaCountEl) colombiaCountEl.textContent = `(${colombiaList ? colombiaList.children.length : 0})`;
if (costaricaCountEl) costaricaCountEl.textContent = `(${costaricaList ? costaricaList.children.length : 0})`;
if (peruCountEl) peruCountEl.textContent = `(${peruList ? peruList.children.length : 0})`;
if (romaniaCountEl) romaniaCountEl.textContent = `(${romaniaList ? romaniaList.children.length : 0})`;
const airbusCountEl = document.getElementById('airbus-count');
const thalesCountEl = document.getElementById('thales-count');
const ohbCountEl = document.getElementById('ohb-count');
const beyondCountEl = document.getElementById('beyond-count');
const senerCountEl = document.getElementById('sener-count');
const avioCountEl = document.getElementById('avio-count');
const safranCountEl = document.getElementById('safran-count');
const arianegroupCountEl = document.getElementById('arianegroup-count');
const telespazioCountEl = document.getElementById('telespazio-count');
if (airbusCountEl) airbusCountEl.textContent = `(${airbusList.children.length})`;
if (thalesCountEl) thalesCountEl.textContent = `(${thalesList.children.length})`;
if (ohbCountEl) ohbCountEl.textContent = `(${ohbList ? ohbList.children.length : 0})`;
if (beyondCountEl) beyondCountEl.textContent = `(${beyondList ? beyondList.children.length : 0})`;
if (senerCountEl) senerCountEl.textContent = `(${senerList ? senerList.children.length : 0})`;
if (avioCountEl) avioCountEl.textContent = `(${avioList ? avioList.children.length : 0})`;
if (safranCountEl) safranCountEl.textContent = `(${safranList ? safranList.children.length : 0})`;
if (arianegroupCountEl) arianegroupCountEl.textContent = `(${arianegroupList ? arianegroupList.children.length : 0})`;
if (telespazioCountEl) telespazioCountEl.textContent = `(${telespazioList ? telespazioList.children.length : 0})`;

// Helper: get country from place name
function getCountry(place) {
  const name = place.name;
  const knownCountries = [
    'Belgium','Finland','France','Germany','Italy','Poland','Spain','UK','Sweden','Austria','Portugal','Czech Republic','Luxembourg','Morocco','Mexico','USA','China','India','UAE','Australia','French Guiana','Switzerland','Singapore'
  ];
  // Manual mapping for ambiguous cases
  if (/Oxfordshire|Stevenage|Portsmouth|Gloucester|Belfast|Harwell|Burnley/i.test(name)) return 'UK';
  if (/D'arco|Cameri|Borgaretto|Rivalta|Turin|Torino|Brindisi|Pomigliano|Milan|Gorgonzola|L'Aquila|Rome|Villaroche|Le Creusot|Issoudun|Bordes|Marignane/i.test(name)) return 'Italy';
  // Find last word after last comma
  let country = name.split(',').pop().trim();
  if (knownCountries.includes(country)) return country;
  for (const c of knownCountries) {
    if (name.includes(c)) return c;
  }
  return country;
}

// Build country set and bounds
const countryBounds = {};
const countrySet = new Set();
places.forEach(place => {
  const country = getCountry(place);
  countrySet.add(country);
  if (!countryBounds[country]) countryBounds[country] = [];
  countryBounds[country].push(place.coords);
});

// Populate country zoom dropdown
const countryZoom = document.getElementById('country-zoom');
// Count companies per country
const countryCounts = {};
places.forEach(place => {
  const country = getCountry(place);
  countryCounts[country] = (countryCounts[country] || 0) + 1;
});

if (countryZoom) {
  // Only show unique country names for Argentina, Brazil, Chile, not company/HQ variants
  const normalizeCountry = c => {
    if (/^Argentina/.test(c)) return 'Argentina';
    if (/^Brazil/.test(c)) return 'Brazil';
    if (/^Chile/.test(c)) return 'Chile';
    if (/^Colombia/.test(c)) return 'Colombia';
    if (/^Costa Rica/.test(c)) return 'Costa Rica';
    if (/^Peru/.test(c)) return 'Peru';
    if (/^Romania/.test(c)) return 'Romania';
    return c;
  };
  const uniqueCountries = Array.from(countrySet).map(normalizeCountry);
  const countryDisplaySet = Array.from(new Set(uniqueCountries));
  countryDisplaySet.sort().forEach(country => {
    const count = Object.keys(countryCounts)
      .filter(c => normalizeCountry(c) === country).map(c => countryCounts[c]).reduce((a, b) => a + b, 0);
    const opt = document.createElement('option');
    opt.value = country;
    opt.textContent = `${country} (${count})`;
    countryZoom.appendChild(opt);
  });
}

if (countryZoom) {
  countryZoom.addEventListener('change', function() {
    const val = this.value;
    if (val && countryBounds[val]) {
      const bounds = L.latLngBounds(countryBounds[val]);
      map.fitBounds(bounds.pad(0.2));
    }
  });
}

const resetZoomBtn = document.getElementById('reset-zoom');
if (resetZoomBtn) {
  resetZoomBtn.addEventListener('click', function() {
    // Fit map to all markers
    if (places.length) {
      const bounds = clusterGroup.getBounds();
      if (bounds.isValid()) map.fitBounds(bounds.pad(0.2));
    }
    if (countryZoom) countryZoom.value = '';
  });
}
