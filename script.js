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
    id:
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

  if (place.company === 'thales') {
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
  } else {
    airbusList.appendChild(li);
  }
});

// Update counts in headings
const airbusCountEl = document.getElementById('airbus-count');
const thalesCountEl = document.getElementById('thales-count');
const ohbCountEl = document.getElementById('ohb-count');
const beyondCountEl = document.getElementById('beyond-count');
const senerCountEl = document.getElementById('sener-count');
const avioCountEl = document.getElementById('avio-count');
const safranCountEl = document.getElementById('safran-count');
if (airbusCountEl) airbusCountEl.textContent = `(${airbusList.children.length})`;
if (thalesCountEl) thalesCountEl.textContent = `(${thalesList.children.length})`;
if (ohbCountEl) ohbCountEl.textContent = `(${ohbList ? ohbList.children.length : 0})`;
if (beyondCountEl) beyondCountEl.textContent = `(${beyondList ? beyondList.children.length : 0})`;
if (senerCountEl) senerCountEl.textContent = `(${senerList ? senerList.children.length : 0})`;
if (avioCountEl) avioCountEl.textContent = `(${avioList ? avioList.children.length : 0})`;
if (safranCountEl) safranCountEl.textContent = `(${safranList ? safranList.children.length : 0})`;

// Helper: get country from place name
function getCountry(place) {
  // Try to extract country from name (last word or after comma)
  const name = place.name;
  let main = name.split('(')[0].trim();
  if (main.includes(',')) {
    return main.split(',').pop().trim();
  }
  const parts = main.split(' ');
  return parts[parts.length - 1];
}

// Build country set
const countrySet = new Set();
places.forEach(place => {
  countrySet.add(getCountry(place));
});

// Populate dropdown
const countrySelect = document.getElementById('country-select');
if (countrySelect) {
  Array.from(countrySet).sort().forEach(country => {
    const opt = document.createElement('option');
    opt.value = country;
    opt.textContent = country;
    countrySelect.appendChild(opt);
  });
}

function filterByCountry(selectedCountry) {
  // Show/hide sidebar entries and map markers
  places.forEach(place => {
    const country = getCountry(place);
    const show = (selectedCountry === 'all' || country === selectedCountry);
    // Sidebar
    const li = document.querySelector(`li[data-id="${place.id}"]`);
    if (li) li.style.display = show ? '' : 'none';
    // Map marker
    const marker = markers[place.id];
    if (marker) {
      if (show) clusterGroup.addLayer(marker);
      else clusterGroup.removeLayer(marker);
    }
  });
  // Update counts
  function updateCount(list, countEl) {
    if (list && countEl) {
      const visible = Array.from(list.children).filter(li => li.style.display !== 'none').length;
      countEl.textContent = `(${visible})`;
    }
  }
  updateCount(airbusList, airbusCountEl);
  updateCount(thalesList, thalesCountEl);
  updateCount(ohbList, ohbCountEl);
  updateCount(beyondList, beyondCountEl);
  updateCount(senerList, senerCountEl);
  updateCount(avioList, avioCountEl);
  updateCount(safranList, safranCountEl);
}

if (countrySelect) {
  countrySelect.addEventListener('change', function() {
    filterByCountry(this.value);
  });
}
