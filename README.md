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
# Europe2