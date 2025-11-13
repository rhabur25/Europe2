# Airbus Sites — Interactive Map (Frontend only)

This is a minimal front-end web app that shows several Airbus production and assembly sites pinned on an interactive map.

Included files:
- `index.html` — main page
- `styles.css` — basic styling for sidebar and map
- `script.js` — initializes the Leaflet map, adds markers, and creates a clickable sidebar

Included places pinned on the map:
- Toulouse, France — Airbus HQ and production (A320 family, A350)
- Hamburg, Germany — assembly and finishing (A320 family, A330)
- Seville, Spain — final assembly of the A400M
- Broughton, Wales — wing production (A320 family, A350)
- Filton, England — wing production (A320 family, A350)
- Mobile, Alabama, USA — assembles A320 family for North America
- Tianjin, China — A320 final assembly line for Asia

Thales Alenia Space locations (shown in orange on the map):
- Belfast, Northern Ireland — manufacturer, assembly, integration and testing of satellite platforms; chemical and electric propulsion
- Harwell, Oxfordshire — design authority for chemical, electric and bi-propellant propulsion; engineering and program management
- Leuven, Belgium — automated production of solar panels and smart data
- Hasselt, Belgium — avionics and micro-electronics for satellites and launch vehicles
- Charleroi, Belgium — electronics and software for satellite and launch vehicle markets
- Luxembourg — AI, data valorization, cybersecurity, digital twins and cloud-native solutions
- Zurich, Switzerland — optical communications, photonics, remote sensing and space weather monitors
- Toulouse, France (Thales) — telecommunications payloads, navigation, ground segments
- Cannes, France — HQ and industrial site; telecom platforms and VHR optical instruments
- Madrid, Spain — telecom payloads, observation instruments, RF units and digital electronics
- Turin, Italy — pressurized modules, space transportation, exploration probes and orbital infrastructure
- Gorgonzola, Italy — radar observation, telecommunications, antennas and transponders
- L'Aquila, Italy — radar observation, telecommunications and reflectors
- Rome, Italy — satellite assembly, integration and testing; space systems and antennas

OHB locations (shown in green on the map):
- Bremen, Germany — OHB HQ and satellite/manufacturing facilities
- Oberpfaffenhofen, Germany — space systems, mission operations and test facilities
- Augsburg, Germany — engineering and subsystem development
- Milan, Italy — European subsystems and integration
- Stockholm, Sweden — payloads and instruments
- Antwerp, Belgium — manufacturing and logistics support
- Betzdorf, Germany — technical and support site
- Kourou, French Guiana — Guiana Space Centre (launch integration)

Beyond Gravity locations (shown in pink on the map):
- Bern, Switzerland — engineering and production of satellites and launchers
- Emmen, Switzerland — production facility and competence center for launch vehicle structures
- Nyon, Switzerland — sliprings and high-accuracy electro-mechanical systems
- Zurich, Switzerland — global HQ with competence centers and production for mechatronics and satellite structures
- Decatur, Alabama, USA — U.S. office HQ and production hall for launcher structures
- Titusville, Florida, USA — semi-automated satellite panel production focused on constellations
- Gothenburg, Sweden — competence center for high-reliability electronics and mechatronics
- Linkoping, Sweden — engineering and production of dispensers and separation systems
- Vienna, Austria — market leader for high-performance satellite navigation receivers
- Berndorf, Austria — supplier of electric propulsion pointing mechanisms
- Tampere, Finland — engineering and production for interface and power electronics; ISO 8 cleanroom and radiation testing
- Lisbon, Portugal — innovation and digital hub focusing on AI and digital infrastructure

SENER locations (shown in purple on the map):
- Getxo, Spain — Global headquarters; corporate leadership and origin of the company
- Tres Cantos, Madrid, Spain — Aerospace & defense engineering campus; satellite systems and space hardware
- Arganda del Rey, Spain — Integration & testing center for space and defense components
- Cerdanyola del Vallès, Barcelona, Spain — Engineering office; civil, energy, and aerospace projects
- La Garriga, Spain — Space communications facility; RF equipment and satellite electronics
- Erandio, Spain — Manufacturing plant; heavy industrial and energy components
- Mexico City, Mexico — Latin America HQ; energy and infrastructure projects across the region
- Los Angeles, USA — U.S. HQ; rail, aerospace, and defense business development
- Warsaw, Poland — Central Europe office; space technology center and satellite hardware production
- Abu Dhabi, UAE — Middle East office; energy and metro infrastructure projects
- Sydney, Australia — Asia-Pacific HQ; transport and energy engineering for Oceania

Avio locations (shown in red on the map):
- Rivalta di Torino, Italy — Mechanical Transmissions, Headquarters
- Torino - Sangone, Italy — Mechanical Transmissions, Test Plant
- Borgaretto (Torino), Italy — Mechanical Transmissions, Foundry
- Cameri (Novara), Italy — Additive Manufacturing
- Pomigliano d'Arco (Napoli), Italy — Services, Turbomachinery
- Brindisi, Italy — Test, Case & Frames, Services
- Bielsko-Biała, Poland — Turbomachinery
- Prague, Czech Republic — Turboprop engines

How to run

Option 1 — open locally (quickest):
1. Open the file `index.html` in a modern web browser (double-click or use "Open File").

Option 2 — serve with a simple local HTTP server (recommended for some browsers):

```bash
# from the repository root
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

 Notes
 - The map uses OpenStreetMap tiles via Leaflet (CDN). An internet connection is required to load tiles and the Leaflet library from the CDN.
 - Marker icons are now pin-shaped (same shape for both companies) and colored per company.
 - Overlapping markers are handled by MarkerCluster: when multiple markers share the same location they are spiderfied so each individual marker can be clicked.
# Europe2