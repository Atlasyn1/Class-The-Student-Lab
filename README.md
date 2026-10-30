# CLASS — The Student Lab
A cinematic, responsive science learning website starter using HTML, CSS, JavaScript, plus a TypeScript foundation.

## Run
Extract the ZIP and open `index.html` in your browser. No package install or build step is required. For best local development, open the folder in VS Code and use Live Server.

## Pages
- `index.html` — cinematic homepage, three subjects, initiative and learning method
- `pages/biology.html` — Biology branches
- `pages/botany.html`, `zoology.html`, `anatomy.html`, `microbiology.html`, `ecology.html`, `genetics.html` — separate Biology topic maps
- `pages/physics.html` — Physics zones
- `pages/physics-topics.html` — searchable Physics topic index
- `pages/chemistry.html` — 12 categories and all 106 supplied chemistry experiment ideas
- `assets/style.css` — visual design and responsive layouts
- `assets/app.js` — topographic flow canvas, scroll reveals, mobile navigation and topic search
- `assets/class-types.ts` — TypeScript contracts for future experiments

The chemistry experiment cards are deliberately a catalogue only. We'll build and link individual interactive simulations one by one as you request them. The source topic lists are based on the files you supplied; board coverage can vary. Google Fonts require internet access; fallback fonts are defined.

## Interactive 3D Plant Structures
Open `pages/plant-structures.html` from the Biology → Botany section, or use the featured 3D lab link on the Botany page. The specimen is procedurally modelled with Three.js loaded from a CDN, so an internet connection is required for the 3D engine and web fonts. Drag to rotate, scroll to zoom, adjust slow auto-rotation, and select any of the 30 structure cards to read its explanation. The visual is an educational illustration and is not to scale.
