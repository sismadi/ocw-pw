# OCW-PW: Open Courseware for Web Programming

![Vanilla JS](https://img.shields.io/badge/Vanilla%20JS-ES6%2B-yellow)
![Zero Dependency](https://img.shields.io/badge/Zero-Dependency-green)
![No Build Step](https://img.shields.io/badge/No--Build-Step-blue)
![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey)
![DOI](https://img.shields.io/badge/DOI-10.5281%2Ffigshare.XXXXXXXX-blue)

Open courseware platform for the **Pemrograman Web** course at Universitas IPWIJA, Jakarta. Built on [DonatJS](https://donat.id) — a zero-dependency, no-build-step, JSON-driven micro-framework that renders structured page data as dynamic web interfaces entirely in the browser.

Covers 16 structured learning modules from HTML5 semantics through Single Page Application architecture, with an integrated quiz engine and certificate verifier.

---

## Key Features

- **JSON-Driven Architecture** — All layout and content defined as plain JavaScript objects (`pages.*`). No templates, no JSX, no DSL.
- **Zero-Dependency Runtime** — No Node.js, Webpack, Babel, or external libraries. Runs in any ES6+ browser.
- **No-Build Step** — Drop `script.js` into a directory, define your data, open in browser. Done.
- **Micro Routing System** — Query-string-based SPA routing with automatic content resolution and History API support.
- **Modular Page Loader** — `loadPageScripts()` dynamically loads page modules and merges them into the global `pages` registry.
- **Integrated Quiz Engine** — Password-protected quiz with `btoa`-encoded answer keys, passing grade enforcement, and start-time gating.
- **Certificate Verifier** — Credential lookup with unique ID validation (`SLS-YYYY-NNN` format).
- **Prev/Next Navigation** — `learn-patch.js` adds sequential module navigation with keyboard shortcuts (←/→) and position indicator.
- **Auto-Grid Info Cards** — Automatic CSS Grid wrapping for adjacent `.info-card` elements via JS hook on `ui.render`.
- **16-Module Curriculum** — HTML5 → CSS3 → JavaScript ES6+ → LocalStorage → Fetch API → SPA architecture.

---

## Prerequisites & Installation

No runtime dependencies. Only a modern browser supporting ES6+ is required.

1. Clone this repository:
   ```bash
   git clone https://github.com/sismadi/ocw-pw.git
   cd ocw-pw
   ```
2. Serve with any static file server — VS Code Live Server, Python `http.server`, or Nginx.
3. Open `index.html` in the browser. No build step needed.

> `script.js` and `svg.js` are loaded from the DonatJS Core CDN (`https://donatjs.github.io/core/`). Internet connection required on first load, or self-host for offline use.

---

## Quick Start

Define a minimal page in `pages/home.js`:

```javascript
pages.home = [
    {
        section: 'titleHero',
        title: 'Halo Dunia',
        description: 'Konten berbasis JSON-driven.'
    }
];
```

Declare modules in `pages/index.js`:

```javascript
const pageFiles = ['home', 'learn', 'kuis', 'cert'];
```

Define the loader in `dataset.js`:

```javascript
const pages = {};

function loadPageScripts(files, callback) {
    let loaded = 0;
    files.forEach(name => {
        const script = document.createElement('script');
        script.src = `pages/${name}.js`;
        script.onload = () => {
            loaded++;
            if (loaded === files.length) callback();
        };
        document.head.appendChild(script);
    });
}
```

Bootstrap in `index.html` before `</body>`:

```html
<script src="pages/index.js"></script>
<script src="dataset.js"></script>
<script>
    loadPageScripts(pageFiles, () => { renderMenu(); });
</script>
```

---

## Usage

### Page Section Types

| Section | Purpose |
|---|---|
| `hero` | Full-width hero with title, tagline, badges, and CTA |
| `titleHero` | Centered section heading |
| `features` | Icon + title + content cards (3-column grid) |
| `article` | Two-column split layout (`leftCol` / `rightCol`) |
| `learningModule` | Sidebar module list + main content with Prev/Next nav |

### Inline Directives (inside `lines` arrays)

```
skill:84%:Label:Tag          → skill progress bar
card:Title:Description       → feature card (auto-gridded)
step:year:Label:Detail       → timeline step
table:[{...}]                → rendered data table
code:lang:theme:ln:content   → syntax-highlighted code block
form:quiz                    → protected quiz form
form:validate-cert           → certificate lookup form
```

### Quiz Module

```javascript
pages.kuis = [
    {
        section: 'article',
        rightCol: {
            lines: ['form:quiz'],
            startTime: '2026-05-12T08:00:00',
            password: 'YourPassword',
            questions: [
                {
                    q: 'Question text?',
                    options: ['A', 'B', 'C', 'D'],
                    ans: btoa('B')
                }
            ]
        }
    }
];
```

### Certificate Registry

```javascript
pages.certificates = {
    'SLS-2026-001': {
        name: 'Full Name',
        exam: 'Exam Title',
        score: '98/100',
        date: '19 April 2026'
    }
};
```

---

## Repository Structure

```
ocw-pw/
├── index.html          # Entry point & layout shell
├── style.css           # Local overrides (info-card grid patch)
├── dataset.js          # pages registry & loadPageScripts()
├── learn-patch.js      # Prev/Next navigation + auto-grid hook
├── pages/
│   ├── index.js        # pageFiles manifest
│   ├── home.js         # Landing page content
│   ├── learn.js        # 16-module learning content
│   ├── kuis.js         # Quiz engine data
│   └── cert.js         # Certificate registry & verifier page
├── CITATION.cff        # Academic citation metadata
├── zenodo.json         # Zenodo deposit metadata
└── figshare.json       # Figshare deposit metadata
```

---

## How to Cite

```bibtex
@software{sismadi_ocw_pw_2026,
  author       = {Sismadi, Wawan},
  title        = {{OCW-PW: Open Courseware for Web Programming}},
  year         = {2026},
  publisher    = {Figshare},
  doi          = {10.5281/figshare.XXXXXXXX},
  url          = {https://doi.org/10.5281/figshare.XXXXXXXX},
  note         = {Open courseware for Pemrograman Web, Universitas IPWIJA.
                  Built on DonatJS zero-dependency micro-framework.
                  Repository: https://github.com/sismadi/ocw-pw}
}
```
