# OpenGDD

A game design document tool for indie developers. It starts as a one-pager; tick what your game has (story, characters, economy, multiplayer...) and the matching full-GDD sections open. Export to Markdown, JSON, or PDF whenever you're ready.

---

## Features

- **One-pager first**: identity, design pillars, summary, audience, core loop, features, controls, art, music and roadmap are always there
- **Go deeper with checkboxes**: 14 yes/no questions ("Does the game have a story?", "Are there characters?"...) each open a full-GDD section only when your game needs it
- **Your own sections**: add sections the list doesn't cover
- **10 starter templates** across action/co-op, narrative/RPG, strategy/puzzle, and mobile categories; each fills the one-pager and opens the sections that fit
- **Live preview** that updates as you type
- **Export to Markdown, JSON, or print/PDF**; re-import a JSON file to continue where you left off
- **Autosaved drafts** in `localStorage`
- **Bilingual TR/EN interface**

## Running

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build
npm run preview    # preview the build
```

## Project Structure

```
src/
  App.jsx        # editor, preview, template picker, export/import
  sections.js    # the document schema: one-pager fields and optional sections
  presets.js     # starter templates (10 genres, 4 categories)
  i18n.js        # TR/EN interface strings
  index.css      # styles
  main.jsx       # React entry point
```

## Changing the Document

Everything the editor, preview and Markdown export show comes from `src/sections.js`.

- A field in `CORE_BLOCKS` is part of the one-pager and always visible.
- An entry in `GROUPS` is an optional section: `question` is the checkbox text, `fields` are what opens when it is ticked.

Every label, hint and question is bilingual (`{ tr: "...", en: "..." }`).

## Adding a New Template

Add a key to `src/presets.js`. `category` must be one of `action`, `narrative`, `strategy`, `mobile`, and every text must be bilingual. Preset keys are mapped onto editor fields by `presetToState` at the bottom of that file; one-pager extras (`mantra`, `pillars`, `audience`) go in the `onePager` object.

## Known Limitations

- Templates ship in Turkish and English only; template content (`presets.js`) needs a separate translation per language.
- Export/import and autosave are fully client-side (no server or database); use JSON export/import to move between devices.

## License

This project is licensed under the MIT License.
