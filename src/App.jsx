import React, { useState, useEffect, useRef } from 'react';
import { translations } from './i18n';
import { presets } from './presets';
import './index.css';

const EMPTY_FORM = {
  title: '',
  concept: '',
  genrePlatform: '',
  coreLoop: '',
  lore: '',
  coop: '',
  risk: '',
  ui: '',
  assets: '',
  monetization: '',
  techSpecs: '',
  marketing: '',
  milestones: ''
};

const EMPTY_MODULES = {
  lore: false,
  coop: false,
  risk: false,
  ui: false,
  assets: false,
  monetization: false,
  techSpecs: false,
  marketing: false,
  milestones: false
};

const MODULE_KEYS = Object.keys(EMPTY_MODULES);
const STORAGE_KEY = 'opengdd-draft-v2';

export default function App() {
  const [lang, setLang] = useState('tr');
  const t = translations[lang];

  const [formData, setFormData] = useState(EMPTY_FORM);
  const [activeModules, setActiveModules] = useState(EMPTY_MODULES);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [autosavedPulse, setAutosavedPulse] = useState(false);
  const fileInputRef = useRef(null);
  const firstRender = useRef(true);

  // Restore the last draft when the page loads
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.formData) setFormData({ ...EMPTY_FORM, ...parsed.formData });
        if (parsed.activeModules) setActiveModules({ ...EMPTY_MODULES, ...parsed.activeModules });
        if (parsed.lang) setLang(parsed.lang);
      }
    } catch (e) {
      // Invalid draft; ignore it silently
    }
  }, []);

  // Auto-save with debounce
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const handle = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ formData, activeModules, lang }));
        setAutosavedPulse(true);
        setTimeout(() => setAutosavedPulse(false), 1500);
      } catch (e) {
        // Storage is full or unavailable; ignore it silently
      }
    }, 600);
    return () => clearTimeout(handle);
  }, [formData, activeModules, lang]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleModule = (mod) => {
    setActiveModules({ ...activeModules, [mod]: !activeModules[mod] });
  };

  const toggleLang = () => setLang(lang === 'tr' ? 'en' : 'tr');

  const loadPreset = (presetKey) => {
    if (formData.title || formData.concept) {
      if (!window.confirm(t.confirmLoadPreset)) return;
    }
    const p = presets[presetKey];
    const next = { ...EMPTY_FORM };
    Object.keys(EMPTY_FORM).forEach((field) => {
      if (field === 'title' || field === 'genrePlatform') {
        next[field] = p[field] ? (p[field][lang] || p[field].en) : '';
      } else {
        next[field] = p[field] ? (p[field][lang] || p[field].en) : '';
      }
    });
    setFormData(next);
    setActiveModules({ ...EMPTY_MODULES, ...p.activeModules });
    setShowTemplates(false);
  };

  const handleNew = () => {
    if (window.confirm(t.confirmNew)) {
      setFormData(EMPTY_FORM);
      setActiveModules(EMPTY_MODULES);
    }
  };

  const downloadBlob = (content, filename, mime) => {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const slug = (formData.title || 'opengdd').toLowerCase()
    .replace(/[^a-z0-9ğüşıöç\s-]/gi, '')
    .trim()
    .replace(/\s+/g, '-') || 'opengdd';

  const moduleTitleMap = {
    lore: 'Lore & Universe',
    coop: 'Co-op & Multiplayer',
    risk: 'Risk & Reward',
    ui: 'UI/UX & Controls',
    assets: 'Asset Checklist',
    monetization: 'Monetization & Business Model',
    techSpecs: 'Technical Specs',
    marketing: 'Marketing & Positioning',
    milestones: 'Roadmap & Milestones'
  };

  const exportMarkdown = () => {
    let md = `# ${formData.title || t.untitledGame}\n\n`;
    md += `_${formData.concept || ''}_\n\n`;
    md += `**${t.genrePlatformLabel}** ${formData.genrePlatform || '-'}\n\n`;
    md += `## Core Game Loop\n\n${formData.coreLoop || '-'}\n\n`;
    MODULE_KEYS.forEach((key) => {
      if (activeModules[key]) {
        md += `## ${moduleTitleMap[key]}\n\n${formData[key] || '-'}\n\n`;
      }
    });
    downloadBlob(md, `${slug}.md`, 'text/markdown');
    setShowExport(false);
  };

  const exportJson = () => {
    const payload = { formData, activeModules, lang, exportedAt: new Date().toISOString() };
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
        const parsed = JSON.parse(evt.target.result);
        setFormData({ ...EMPTY_FORM, ...(parsed.formData || {}) });
        setActiveModules({ ...EMPTY_MODULES, ...(parsed.activeModules || {}) });
        if (parsed.lang) setLang(parsed.lang);
      } catch (err) {
        alert('JSON parse error');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const categories = ['action', 'narrative', 'strategy', 'mobile'];
  const categoryLabels = { action: t.catAction, narrative: t.catNarrative, strategy: t.catStrategy, mobile: t.catMobile };

  return (
    <div className="app-container">
      <input type="file" accept="application/json" ref={fileInputRef} onChange={handleImportFile} style={{ display: 'none' }} />

      <header className="header">
        <div className="brand">
          <span className="brand-mark">GDD</span>
          <div>
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
          </div>
        </div>
        <div className="header-actions">
          <span className={`autosave-pill ${autosavedPulse ? 'pulse' : ''}`}>● {t.autosaved}</span>
          <button className="ghost-btn" onClick={handleNew}>{t.newBtn}</button>
          <button className="ghost-btn" onClick={() => setShowTemplates(true)}>🚀 {t.templatesBtn}</button>
          <div className="export-wrap">
            <button className="ghost-btn" onClick={() => setShowExport(!showExport)}>⇩ {t.exportBtn}</button>
            {showExport && (
              <div className="export-menu">
                <button onClick={exportMarkdown}>{t.exportMarkdown}</button>
                <button onClick={exportJson}>{t.exportJson}</button>
                <button onClick={exportPdf}>{t.exportPdf}</button>
                <hr />
                <button onClick={triggerImport}>{t.importJsonLabel}</button>
              </div>
            )}
          </div>
          <button className="lang-btn" onClick={toggleLang}>🌐 {t.langToggle}</button>
        </div>
      </header>

      {showTemplates && (
        <div className="modal-backdrop" onClick={() => setShowTemplates(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h2>{t.templatePickerTitle}</h2>
                <p>{t.templatePickerSubtitle}</p>
              </div>
              <button className="modal-close" onClick={() => setShowTemplates(false)}>✕</button>
            </div>
            <div className="modal-body">
              {categories.map((cat) => (
                <div key={cat} className="template-category">
                  <h4>{categoryLabels[cat]}</h4>
                  <div className="template-grid">
                    {Object.entries(presets)
                      .filter(([, p]) => p.category === cat)
                      .map(([key, p]) => (
                        <button key={key} className="template-card" onClick={() => loadPreset(key)}>
                          <span className="template-icon">{p.icon}</span>
                          <span className="template-name">{p.title[lang] || p.title.en}</span>
                          <span className="template-genre">{p.genrePlatform[lang] || p.genrePlatform.en}</span>
                        </button>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="workspace">
        <div className="editor-pane">
          <div className="card">
            <h2>{t.coreInfo}</h2>
            <div className="form-group">
              <label>{t.workingTitle}</label>
              <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder={t.placeholderTitle} />
            </div>
            <div className="form-group">
              <label>{t.conceptStatement}</label>
              <textarea name="concept" value={formData.concept} onChange={handleInputChange} placeholder={t.placeholderConcept} />
            </div>
            <div className="form-group">
              <label>{t.genrePlatform}</label>
              <input type="text" name="genrePlatform" value={formData.genrePlatform} onChange={handleInputChange} placeholder={t.placeholderGenrePlatform} />
            </div>
            <div className="form-group">
              <label>{t.coreLoop}</label>
              <textarea name="coreLoop" value={formData.coreLoop} onChange={handleInputChange} placeholder={t.placeholderCoreLoop} />
            </div>
          </div>

          <div className="card">
            <h3>{t.modulesTitle}</h3>
            <div className="checkbox-group">
              {MODULE_KEYS.map((mod) => (
                <label key={mod}>
                  <input type="checkbox" checked={activeModules[mod]} onChange={() => toggleModule(mod)} />
                  {t[`mod${mod.charAt(0).toUpperCase() + mod.slice(1)}`]}
                </label>
              ))}
            </div>
          </div>

          {activeModules.lore && (
            <div className="card">
              <h3>{t.modLore}</h3>
              <textarea name="lore" value={formData.lore} onChange={handleInputChange} placeholder={t.placeholderLore} />
            </div>
          )}
          {activeModules.coop && (
            <div className="card">
              <h3>{t.modCoop}</h3>
              <textarea name="coop" value={formData.coop} onChange={handleInputChange} placeholder={t.placeholderCoop} />
            </div>
          )}
          {activeModules.risk && (
            <div className="card">
              <h3>{t.modRisk}</h3>
              <textarea name="risk" value={formData.risk} onChange={handleInputChange} placeholder={t.placeholderRisk} />
            </div>
          )}
          {activeModules.ui && (
            <div className="card">
              <h3>{t.modUi}</h3>
              <textarea name="ui" value={formData.ui} onChange={handleInputChange} placeholder={t.placeholderUi} />
            </div>
          )}
          {activeModules.assets && (
            <div className="card">
              <h3>{t.modAssets}</h3>
              <textarea name="assets" value={formData.assets} onChange={handleInputChange} placeholder={t.placeholderAssets} />
            </div>
          )}
          {activeModules.monetization && (
            <div className="card">
              <h3>{t.modMonetization}</h3>
              <textarea name="monetization" value={formData.monetization} onChange={handleInputChange} placeholder={t.placeholderMonetization} />
            </div>
          )}
          {activeModules.techSpecs && (
            <div className="card">
              <h3>{t.modTechSpecs}</h3>
              <textarea name="techSpecs" value={formData.techSpecs} onChange={handleInputChange} placeholder={t.placeholderTechSpecs} />
            </div>
          )}
          {activeModules.marketing && (
            <div className="card">
              <h3>{t.modMarketing}</h3>
              <textarea name="marketing" value={formData.marketing} onChange={handleInputChange} placeholder={t.placeholderMarketing} />
            </div>
          )}
          {activeModules.milestones && (
            <div className="card">
              <h3>{t.modMilestones}</h3>
              <textarea name="milestones" value={formData.milestones} onChange={handleInputChange} placeholder={t.placeholderMilestones} />
            </div>
          )}
        </div>

        <div className="preview-pane">
          <div className="preview-card" id="gdd-preview">
            <h2 className="preview-heading">📄 {t.previewTitle}</h2>
            <div className="preview-content">
              <h1>{formData.title || t.untitledGame}</h1>
              <p><em>{formData.concept || t.conceptPlaceholderPreview}</em></p>

              <hr />
              <p><strong>{t.genrePlatformLabel}</strong> {formData.genrePlatform || "-"}</p>

              <h3>Core Game Loop</h3>
              <p>{formData.coreLoop || "-"}</p>

              {MODULE_KEYS.map((key) => activeModules[key] && (
                <React.Fragment key={key}>
                  <h3>{moduleTitleMap[key]}</h3>
                  <p>{formData[key] || "-"}</p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
