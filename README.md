# OpenGDD 🎮

A universal, dynamic Game Design Document (GDD) tool for indie developers. Fill out the form and get a live, preview on the right — export to Markdown, JSON, or PDF whenever you're ready.

---

## Features

- **10 universal starter templates** across action/co-op, narrative/RPG, strategy/puzzle, and mobile/hyper-casual categories, each with genre-specific, production-grade content
- **9 toggleable modules** — Lore, Co-op, Risk & Reward, UI/UX, Assets, Monetization, Tech Specs, Marketing, Milestones
- **Live preview pane** that updates as you type
- **Export to Markdown, JSON, or print/PDF**; re-import a JSON file to continue where you left off
- **Autosaved drafts** in `localStorage` — safe to close the tab and come back later
- **Bilingual TR/EN interface**, switch with one click

## Without Docker

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build
npm run preview    # preview the build
```

## With Docker

```bash
docker compose up --build
# app available at http://localhost:8080
```

## Project Structure

```
src/
  App.jsx        # main app: template gallery, modules, export/import logic
  i18n.js        # TR/EN interface translations
  presets.js     # template dataset (10 genres, 4 categories)
  index.css      # design tokens and styles
  main.jsx       # React entry point
```

## Adding a New Template

Add a new key to `src/presets.js`. `category` must be one of `action`, `narrative`, `strategy`, `mobile`; every text field must be bilingual (`{ tr: "...", en: "..." }`), and `activeModules` must declare all 9 module keys (even if inactive).

```js
myNewPreset: {
  category: "action",
  icon: "🛸",
  title: { tr: "...", en: "..." },
  concept: { tr: "...", en: "..." },
  genrePlatform: { tr: "...", en: "..." },
  coreLoop: { tr: "...", en: "..." },
  activeModules: { lore: true, coop: false, risk: true, ui: true, assets: false,
                    monetization: false, techSpecs: false, marketing: false, milestones: false },
  lore: { tr: "...", en: "..." },
  coop: emptyModule, // { tr: "", en: "" }
  // ...
}
```

## Known Limitations

- Templates currently ship in Turkish and English only; UI strings (`i18n.js`) can be extended to a new language easily, but template content (`presets.js`) needs separate translation per language.
- Export/import and autosave are fully client-side (no server/database); use JSON export/import to sync between devices.

## License
This project is licensed under the MIT License.