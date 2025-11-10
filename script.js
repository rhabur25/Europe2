// script.js — initialize Leaflet map and add markers + sidebar interactions
const places = [
  {
    id: 'toulouse',
    name: 'Toulouse, France',
    coords: [43.6045, 1.4440],
    desc: 'Home to Airbus headquarters and several major aircraft components, including the A320 family and A350.'
  },
  {
    id: 'hamburg',
    name: 'Hamburg, Germany',
    coords: [53.5511, 9.9937],
    desc: 'Focuses on the assembly and finishing of aircraft, particularly the A320 family and A330.'
  },
  {
    id: 'seville',
    name: 'Seville, Spain',
    coords: [37.3891, -5.9845],
    desc: 'Final assembly of the A400M military transport aircraft.'
  },
  {
    id: 'broughton',
    name: 'Broughton, Wales',
    coords: [53.1717, -3.0223],
    desc: 'Production of wings for the A320 family and A350.'
  },
  {
    id: 'filton',
    name: 'Filton, England',
    coords: [51.5194, -2.5512],
    desc: 'Production of wings for the A320 family and A350.'
  }
  ,
  {
    id: 'mobile',
    name: 'Mobile, Alabama, USA',
    coords: [30.6954, -88.0399],
    desc: 'Assembles A320 family aircraft for the North American market.'
  },
  {
    id: 'tianjin',
    name: 'Tianjin, China',
    coords: [39.3434, 117.3616],
    desc: 'Final assembly line for the A320 family to cater to Asian demand.'
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
  } else {
    airbusList.appendChild(li);
  }
});

// Update counts in headings
const airbusCountEl = document.getElementById('airbus-count');
const thalesCountEl = document.getElementById('thales-count');
const ohbCountEl = document.getElementById('ohb-count');
const beyondCountEl = document.getElementById('beyond-count');
if (airbusCountEl) airbusCountEl.textContent = `(${airbusList.children.length})`;
if (thalesCountEl) thalesCountEl.textContent = `(${thalesList.children.length})`;
if (ohbCountEl) ohbCountEl.textContent = `(${ohbList ? ohbList.children.length : 0})`;
if (beyondCountEl) beyondCountEl.textContent = `(${beyondList ? beyondList.children.length : 0})`;
