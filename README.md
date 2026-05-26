# OCW-PW: Open Courseware Pemrograman Web

![Vanilla JS](https://img.shields.io/badge/Vanilla%20JS-ES6%2B-yellow)
![Zero Dependency](https://img.shields.io/badge/Zero-Dependency-green)
![No Build Step](https://img.shields.io/badge/No--Build-Step-blue)
![Modules](https://img.shields.io/badge/Modules-16-orange)
![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey)
![DOI](https://img.shields.io/badge/DOI-10.5281%2Ffigshare.XXXXXXXX-blue)

Open courseware platform for the **Pemrograman Web** course. Built on [DonatJS](https://donat.id) — a zero-dependency, no-build-step, JSON-driven micro-framework. Covers 16 structured modules guiding students from HTML5 boilerplate through Single Page Application architecture, culminating in a fully functional CMS called **Niura Article System**.

---

## Key Features

- **16-Module Curriculum** — 4 structured parts: Fondasi & Antarmuka → JavaScript & Logika UI → Data, Storage & Async → CRUD Penuh & Finalisasi.
- **Project-Driven Learning** — Every module is one puzzle piece. End result: a deployable CMS with Full CRUD, SPA navigation, LocalStorage persistence, and Fetch API hydration.
- **JSON-Driven Architecture** — All lecture content defined as plain JavaScript objects (`pages.learn`). No CMS backend, no database.
- **Zero-Dependency Runtime** — No Node.js, Webpack, Babel, or external libraries. Runs in any ES6+ browser.
- **Integrated Quiz Engine** — Password-protected UTS/UAS assessment with `btoa`-encoded answer keys and passing grade enforcement.
- **Certificate Verifier** — Credential lookup with unique ID validation (`SLS-YYYY-NNN` format).
- **Prev/Next Navigation** — `learn-patch.js` adds sequential module navigation with "Baca Penuh" modal reader and keyboard shortcuts.
- **Micro Routing System** — Query-string SPA routing with automatic content resolution and History API support.

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

### Curriculum Structure

| Bagian | Pertemuan | Topik |
|---|---|---|
| 1: Fondasi & Antarmuka | P1–P4 | HTML5 semantik, CSS3 Flexbox/Grid/Variables, Modal & Toast component |
| 2: JavaScript & Logika UI | P5–P8 | DOM manipulation, event listeners, renderTable(), validasi, UTS |
| 3: Data, Storage & Async | P9–P12 | Object/Array ES6+, JSON, LocalStorage, Fetch API + hydration pattern |
| 4: CRUD Penuh & Finalisasi | P13–P16 | Update & Delete, SPA navigation, Final Review, UAS |

### Learning Module Schema (`pages.learn`)

```javascript
pages.learn = {
    categories: [
        {
            name: 'Bagian 1: Fondasi & Antarmuka',
            items: [
                {
                    id: 'modul01',
                    title: 'Pertemuan 1: Pengenalan Ekosistem Web',
                    lines: [
                        '**Bold text** dan *italic* didukung.',
                        'card:Judul:Deskripsi konten kartu.',
                        'skill:85%:Label kompetensi:Tag level',
                        'table:[{"Kolom A": "Nilai 1", "Kolom B": "Nilai 2"}]',
                        '```javascript',
                        'const x = 1; // blok kode',
                        '```'
                    ]
                }
            ]
        }
    ]
};
```

### Inline Directives (inside `lines` arrays)

| Directive | Output |
|---|---|
| `card:Judul:Deskripsi` | Feature card (auto-gridded) |
| `skill:85%:Label:Tag` | Skill progress bar |
| `table:[{...}]` | Rendered data table |
| `` ```javascript `` ... `` ``` `` | Syntax-highlighted code block |
| `step:year:Label:Detail` | Timeline step |
| `form:quiz` | Protected quiz form |
| `form:validate-cert` | Certificate lookup form |

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
                    q: 'Apa fungsi localStorage.setItem()?',
                    options: ['Menghapus data', 'Menyimpan data', 'Membaca data', 'Mengubah data'],
                    ans: btoa('Menyimpan data')
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
        exam: 'Pemrograman Web — Semester Genap 2026',
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
├── learn-patch.js      # Prev/Next navigation + "Baca Penuh" modal
├── pages/
│   ├── index.js        # pageFiles manifest
│   ├── home.js         # Landing page — ringkasan kurikulum & sitasi
│   ├── learn.js        # 16-modul konten kuliah (Niura Article System)
│   ├── kuis.js         # Quiz engine data (UTS/UAS)
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
  title        = {{OCW-PW: Open Courseware Pemrograman Web}},
  year         = {2026},
  publisher    = {Figshare},
  doi          = {10.5281/figshare.XXXXXXXX},
  url          = {https://doi.org/10.5281/figshare.XXXXXXXX},
  note         = {Open courseware for Pemrograman Web.
                  16 modules. Target project: Niura Article System (Vanilla JS CMS).
                  Built on DonatJS zero-dependency micro-framework.
                  Repository: https://github.com/sismadi/ocw-pw}
}
```
