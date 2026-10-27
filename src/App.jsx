import React, { useState, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { translations } from './i18n';
import { presets, presetToState } from './presets';
import {
  CORE_BLOCKS,
  GROUPS,
  EMPTY_VALUES,
  EMPTY_ENABLED,
  loc,
  migrateLegacy
} from './sections';
import './index.css';

const STORAGE_KEY = 'opengdd-draft-v3';
const LEGACY_STORAGE_KEY = 'opengdd-draft-v2';
const PREVIEW_SKIP = new Set(['title', 'mantra', 'pillars']);
const CATEGORIES = ['action', 'narrative', 'strategy', 'puzzle', 'mobile', 'jam'];

// textarea that grows with its text
function AutoText({ value, rows = 2, ...rest }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }, [value]);
  return <textarea ref={ref} rows={rows} value={value} {...rest} />;
}

// "Name (note)" -> { name, note }
function splitTitle(title) {
  const m = title.match(/^(.*?)\s*\((.*)\)\s*$/);
  return m ? { name: m[1], note: m[2] } : { name: title, note: '' };
}

export default function App() {
  const [lang, setLang] = useState('tr');
  const t = translations[lang];

  const [values, setValues] = useState(EMPTY_VALUES);
  const [enabled, setEnabled] = useState(EMPTY_ENABLED);
  const [custom, setCustom] = useState([]);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [tplMode, setTplMode] = useState('example');
  const [savedPulse, setSavedPulse] = useState(false);
  const fileInputRef = useRef(null);
  const firstRender = useRef(true);

  // load the saved draft, or migrate a v2 one
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const p = JSON.parse(raw);
        if (p.values) setValues({ ...EMPTY_VALUES, ...p.values });
        if (p.enabled) setEnabled({ ...EMPTY_ENABLED, ...p.enabled });
        if (Array.isArray(p.custom)) setCustom(p.custom);
        if (p.lang) setLang(p.lang);
        return;
      }
      const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
      if (legacy) {
        const p = JSON.parse(legacy);
        const m = migrateLegacy(p.formData, p.activeModules);
        setValues(m.values);
        setEnabled(m.enabled);
        if (p.lang) setLang(p.lang);
      }
    } catch (e) {
      // bad draft, start empty
    }
  }, []);

  // Bungee is caps only, lang decides i vs İ
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // autosave
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    let pulseTimer;
    const handle = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ values, enabled, custom, lang }));
        setSavedPulse(true);
        pulseTimer = setTimeout(() => setSavedPulse(false), 1500);
      } catch (e) {
        // storage full, skip
      }
    }, 600);
    return () => {
      clearTimeout(handle);
      clearTimeout(pulseTimer);
    };
  }, [values, enabled, custom, lang]);

  const setValue = (id, v) => setValues((prev) => ({ ...prev, [id]: v }));
  const toggleGroup = (id) => setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));

  const addCustom = () => setCustom((prev) => [...prev, { id: `c${Date.now()}`, title: '', body: '' }]);
  const updateCustom = (id, patch) =>
    setCustom((prev) => prev.map((c) => (c.id === id ? { ...c, ...patch } : c)));
  const removeCustom = (id) => setCustom((prev) => prev.filter((c) => c.id !== id));

  const hasContent =
    Object.values(values).some((v) => v.trim()) || custom.some((c) => c.title.trim() || c.body.trim());

  const handleNew = () => {
    if (hasContent && !window.confirm(t.confirmNew)) return;
    setValues(EMPTY_VALUES);
    setEnabled(EMPTY_ENABLED);
    setCustom([]);
  };

  const loadPreset = (key) => {
    if (hasContent && !window.confirm(t.confirmLoadPreset)) return;
    const next = presetToState(presets[key], lang, tplMode === 'skeleton');
    setValues({ ...EMPTY_VALUES, ...next.values });
    setEnabled({ ...EMPTY_ENABLED, ...next.enabled });
    setCustom([]);
    setShowTemplates(false);
  };

  const coreFields = useMemo(() => CORE_BLOCKS.flatMap((b) => b.fields), []);
  const filledCore = coreFields.filter((f) => values[f.id].trim()).length;
  const openGroups = useMemo(() => GROUPS.filter((g) => enabled[g.id]), [enabled]);

  const sections = useMemo(() => {
    const out = openGroups.map((g) => ({
      key: g.id,
      title: loc(g.title, lang),
      fields: g.fields.map((f) => ({ label: loc(f.label, lang), value: values[f.id] }))
    }));
    custom.forEach((c) => {
      out.push({
        key: c.id,
        title: c.title.trim() || t.untitledSection,
        fields: [{ label: '', value: c.body }]
      });
    });
    return out;
  }, [openGroups, custom, values, lang, t.untitledSection]);

  const pillars = values.pillars
    .split(/[.,;·\n]+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const slug =
    (values.title || 'opengdd')
      .toLowerCase()
      .replace(/[^a-z0-9ğüşıöç\s-]/gi, '')
      .trim()
      .replace(/\s+/g, '-') || 'opengdd';

  const downloadBlob = (content, filename, mime) => {
    const url = URL.createObjectURL(new Blob([content], { type: mime }));
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportMarkdown = () => {
    const empty = '—';
    let md = `# ${values.title || t.untitledGame}\n\n`;
    if (values.mantra.trim()) md += `> ${values.mantra.trim()}\n\n`;
    if (values.pillars.trim()) md += `**${t.pillarsLabel}:** ${values.pillars.trim()}\n\n`;
    coreFields
      .filter((f) => !PREVIEW_SKIP.has(f.id))
      .forEach((f) => {
        md += `## ${loc(f.label, lang)}\n\n${values[f.id].trim() || empty}\n\n`;
      });
    sections.forEach((s) => {
      md += `## ${s.title}\n\n`;
      if (s.fields.length === 1) {
        md += `${s.fields[0].value.trim() || empty}\n\n`;
      } else {
        s.fields.forEach((f) => {
          md += `### ${f.label}\n\n${f.value.trim() || empty}\n\n`;
        });
      }
    });
    downloadBlob(md, `${slug}.md`, 'text/markdown');
    setShowExport(false);
  };

  const exportJson = () => {
    const payload = { version: 3, values, enabled, custom, lang, exportedAt: new Date().toISOString() };
    downloadBlob(JSON.stringify(payload, null, 2), `${slug}.json`, 'application/json');
    setShowExport(false);
  };

  const exportPdf = () => {
    setShowExport(false);
    setTimeout(() => window.print(), 100);
  };

  const triggerImport = () => {
    setShowExport(false);
    fileInputRef.current?.click();
  };

  const handleImportFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const p = JSON.parse(evt.target.result);
        if (p.values) {
          setValues({ ...EMPTY_VALUES, ...p.values });
          setEnabled({ ...EMPTY_ENABLED, ...(p.enabled || {}) });
          setCustom(Array.isArray(p.custom) ? p.custom : []);
        } else {
          const m = migrateLegacy(p.formData, p.activeModules);
          setValues(m.values);
          setEnabled(m.enabled);
          setCustom([]);
        }
        if (p.lang) setLang(p.lang);
      } catch (err) {
        alert(t.importError);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const catLabels = { action: t.catAction, narrative: t.catNarrative, strategy: t.catStrategy, puzzle: t.catPuzzle, mobile: t.catMobile, jam: t.catJam };

  const renderField = (f) => {
    const common = {
      id: f.id,
      value: values[f.id],
      onChange: (e) => setValue(f.id, e.target.value),
      placeholder: f.ph ? loc(f.ph, lang) : '',
      'aria-describedby': f.hint ? `${f.id}-hint` : undefined
    };
    return (
      <div className="field" key={f.id}>
        <label htmlFor={f.id}>{loc(f.label, lang)}</label>
        {f.hint && <p className="hint" id={`${f.id}-hint`}>{loc(f.hint, lang)}</p>}
        {f.line ? <input type="text" {...common} /> : <AutoText rows={f.rows || 2} {...common} />}
      </div>
    );
  };

  return (
    <div className="app">
      <input type="file" accept="application/json" ref={fileInputRef} onChange={handleImportFile} hidden />

      <header className="topbar">
        <div className="wordmark">
          <h1>Open<span>GDD</span></h1>
          <p>{t.tagline}</p>
        </div>
        <nav className="actions">
          <span className={`saved ${savedPulse ? 'on' : ''}`} aria-live="polite">{t.saved}</span>
          <button className="link-btn" onClick={handleNew}>{t.newBtn}</button>
          <button className="link-btn" onClick={() => setShowTemplates(true)}>{t.templatesBtn}</button>
          <div className="menu-wrap">
            <button className="link-btn" aria-expanded={showExport} onClick={() => setShowExport(!showExport)}>
              {t.exportBtn} ▾
            </button>
            {showExport && (
              <div className="menu">
                <button onClick={exportMarkdown}>{t.exportMarkdown}</button>
                <button onClick={exportJson}>{t.exportJson}</button>
                <button onClick={exportPdf}>{t.exportPdf}</button>
                <hr />
                <button onClick={triggerImport}>{t.importJsonLabel}</button>
              </div>
            )}
          </div>
          <button className="solid-btn" onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}>{t.langToggle}</button>
        </nav>
      </header>

      {showTemplates && (
        <div className="backdrop" onClick={() => setShowTemplates(false)}>
          <div className="dialog" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <div className="dialog-head">
              <div>
                <h2>{t.templatePickerTitle}</h2>
                <p>{t.templatePickerSubtitle}</p>
              </div>
              <button className="link-btn" onClick={() => setShowTemplates(false)}>{t.close}</button>
            </div>
            <div className="dialog-body">
              <div className="tpl-mode" role="radiogroup" aria-label={t.tplModeLabel}>
                {['example', 'skeleton'].map((mode) => (
                  <label key={mode} className={tplMode === mode ? 'on' : ''}>
                    <input type="radio" name="tplMode" checked={tplMode === mode} onChange={() => setTplMode(mode)} />
                    <span>
                      <strong>{mode === 'example' ? t.tplModeExample : t.tplModeSkeleton}</strong>
                      <small>{mode === 'example' ? t.tplModeExampleHint : t.tplModeSkeletonHint}</small>
                    </span>
                  </label>
                ))}
              </div>
              {CATEGORIES.map((cat) => (
                <div key={cat} className="tpl-category">
                  <h3>{catLabels[cat]}</h3>
                  <ul className="tpl-list">
                    {Object.entries(presets)
                      .filter(([, p]) => p.category === cat)
                      .map(([key, p]) => {
                        const { name, note } = splitTitle(p.title[lang] || p.title.en);
                        return (
                          <li key={key}>
                            <button className="tpl" onClick={() => loadPreset(key)}>
                              <span className="tpl-name">{name}</span>
                              <span className="tpl-note">{note}</span>
                              <span className="tpl-mantra">{loc(p.mantra, lang)}</span>
                            </button>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="workspace">
        <div className="editor">
          <section className="part">
            <div className="part-head">
              <h2>{t.onePagerTitle}</h2>
              <span className="count">{t.filledCount(filledCore, coreFields.length)}</span>
            </div>
            <p className="lead">{t.onePagerLead}</p>
            {CORE_BLOCKS.map((block) => (
              <fieldset className="block" key={block.id}>
                <legend>{loc(block.title, lang)}</legend>
                {block.fields.map(renderField)}
              </fieldset>
            ))}
          </section>

          <section className="part">
            <div className="part-head">
              <h2>{t.deepenTitle}</h2>
              <span className="count">{t.sectionsOpen(openGroups.length)}</span>
            </div>
            <p className="lead">{t.deepenLead}</p>
            <ul className="checklist">
              {GROUPS.map((g) => (
                <li key={g.id}>
                  <label className={enabled[g.id] ? 'on' : ''}>
                    <input type="checkbox" checked={enabled[g.id]} onChange={() => toggleGroup(g.id)} />
                    <span>{loc(g.question, lang)}</span>
                  </label>
                </li>
              ))}
            </ul>
          </section>

          {openGroups.map((g) => (
            <section className="part open-group" key={g.id}>
              <div className="part-head">
                <h2>{loc(g.title, lang)}</h2>
                <button className="link-btn quiet" onClick={() => toggleGroup(g.id)}>{t.removeSection}</button>
              </div>
              {g.fields.map(renderField)}
            </section>
          ))}

          <section className="part">
            <div className="part-head">
              <h2>{t.customTitle}</h2>
            </div>
            <p className="lead">{t.customLead}</p>
            {custom.map((c) => (
              <div className="custom" key={c.id}>
                <div className="custom-head">
                  <input
                    type="text"
                    className="custom-name"
                    aria-label={t.customNamePlaceholder}
                    value={c.title}
                    placeholder={t.customNamePlaceholder}
                    onChange={(e) => updateCustom(c.id, { title: e.target.value })}
                  />
                  <button className="link-btn quiet" onClick={() => removeCustom(c.id)}>{t.removeSection}</button>
                </div>
                <AutoText
                  rows={3}
                  aria-label={t.customBodyPlaceholder}
                  value={c.body}
                  placeholder={t.customBodyPlaceholder}
                  onChange={(e) => updateCustom(c.id, { body: e.target.value })}
                />
              </div>
            ))}
            <button className="outline-btn" onClick={addCustom}>+ {t.addCustom}</button>
          </section>
        </div>

        <aside className="preview" aria-label={t.previewTitle}>
          <div className="preview-label">{t.previewTitle}</div>
          <article className="sheet" id="gdd-preview">
            <h1>{values.title || t.untitledGame}</h1>
            {values.mantra.trim() && <p className="mantra">{values.mantra}</p>}
            {pillars.length > 0 && (
              <ul className="pillars" aria-label={t.pillarsLabel}>
                {pillars.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            )}

            {coreFields
              .filter((f) => !PREVIEW_SKIP.has(f.id))
              .map((f) => (
                <div className="entry" key={f.id}>
                  <h3>{loc(f.label, lang)}</h3>
                  {values[f.id].trim() ? <p>{values[f.id]}</p> : <p className="blank">{t.emptyValue}</p>}
                </div>
              ))}

            {sections.map((s) => (
              <div className="doc-section" key={s.key}>
                <h2>{s.title}</h2>
                {s.fields.map((f, i) => (
                  <div className="entry" key={i}>
                    {f.label && s.fields.length > 1 && <h3>{f.label}</h3>}
                    {f.value.trim() ? <p>{f.value}</p> : <p className="blank">{t.emptyValue}</p>}
                  </div>
                ))}
              </div>
            ))}
          </article>
        </aside>
      </main>
    </div>
  );
}
