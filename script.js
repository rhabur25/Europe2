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
];

// Create the map centered roughly on western/central Europe
const map = L.map('map', { zoomControl: true }).setView([50.0, 3.0], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

const markers = {};
const group = L.featureGroup().addTo(map);

places.forEach(place => {
  const marker = L.marker(place.coords).addTo(group);
  marker.bindPopup(`<strong>${place.name}</strong><br>${place.desc}`);
  markers[place.id] = marker;
});

// Fit map to show all markers
if (places.length) {
  map.fitBounds(group.getBounds().pad(0.2));
}

// Build sidebar list
const placesList = document.getElementById('places');
places.forEach(place => {
  const li = document.createElement('li');
  li.tabIndex = 0;
  li.setAttribute('data-id', place.id);

  const name = document.createElement('div');
  name.className = 'place-name';
  name.textContent = place.name;

  const sub = document.createElement('div');
  sub.className = 'place-sub';
  sub.textContent = place.desc;

  li.appendChild(name);
  li.appendChild(sub);

  li.addEventListener('click', () => {
    const m = markers[place.id];
    if (m) {
      map.setView(place.coords, 12, { animate: true });
      m.openPopup();
    }
  });

  li.addEventListener('keypress', (ev) => {
    if (ev.key === 'Enter' || ev.key === ' ') li.click();
  });

  placesList.appendChild(li);
});
