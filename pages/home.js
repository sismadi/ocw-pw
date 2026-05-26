pages.home = [
    // 1. HERO
    {
        section: 'hero',
        title: 'Open Courseware Pemrograman Web',
        tagline: 'Dari HTML Boilerplate hingga Single Page Application — Satu Semester, Satu Aplikasi Nyata.',
        description: 'Platform belajar terbuka untuk mata kuliah Pemrograman Web di Universitas IPWIJA. 16 modul terstruktur memandu mahasiswa membangun aplikasi CMS fungsional berbasis Vanilla JS — tanpa framework eksternal, tanpa jalan pintas.',
        badges: [
            'Vanilla JS ES6+',
            'Zero-Dependency',
            '16 Modul',
            'CRUD + SPA',
            'License: MIT',
            'DOI: 10.5281/figshare.XXXXXXXX'
        ],
        cta: {
            text: 'Mulai Belajar',
            link: 'learn'
        },
        imgClass: 'di-donat'
    },

    // 2. KEY FEATURES — diambil dari 4 bagian kurikulum learn.js
    {
        section: 'features',
        items: [
            {
                icon: 'di-code',
                title: 'Fondasi & Antarmuka',
                content: 'HTML5 semantik, CSS3 modern (Flexbox, Grid, Variables), komponen modal dan toast notification. 4 pertemuan untuk membangun UI yang siap disambung logika.',
                linkText: 'Mulai Bagian 1 &raquo;',
                linkTarget: 'learn/modul01'
            },
            {
                icon: 'di-web',
                title: 'JavaScript & Logika UI',
                content: 'DOM selection, event listeners, renderTable(), validasi input, dan prototipe CRUD penuh. Diuji di UTS dengan standar industri.',
                linkText: 'Mulai Bagian 2 &raquo;',
                linkTarget: 'learn/modul05'
            },
            {
                icon: 'di-setting',
                title: 'Data, Storage & Async',
                content: 'Object & Array ES6+, JSON, LocalStorage persistensi, Fetch API dengan pola hydration. Dari aplikasi sementara menjadi aplikasi yang benar-benar berfungsi.',
                linkText: 'Mulai Bagian 3 &raquo;',
                linkTarget: 'learn/modul09'
            }
        ]
    },

    // 3. KURIKULUM + CARA SITASI
    {
        section: 'article',
        leftCol: {
            subtitle: 'Kurikulum 16 Modul',
            lines: [
                '### Bagian 1: Fondasi & Antarmuka',
                '**P1** — Pengenalan Ekosistem Web & Kontrak Perkuliahan',
                '**P2** — HTML5: Struktur Data & Semantik Antarmuka',
                '**P3** — CSS3: Desain & Layout Modern',
                '**P4** — Manipulasi Layout & Komponen (Modal, Toast)',
                '---',
                '### Bagian 2: JavaScript & Logika UI',
                '**P5** — Vanilla JS & Manipulasi DOM',
                '**P6** — Interaktivitas & Logika Render',
                '**P7** — Review & Integrasi Prototipe',
                '**P8** — UTS: Evaluasi Tengah Semester',
                '---',
                '### Bagian 3: Data, Storage & Async',
                '**P9** — Advanced JS: Object, Array & JSON',
                '**P10** — Persistensi Data dengan LocalStorage',
                '**P11** — Asynchronous JS & Fetch API',
                '**P12** — CRUD: Create & Read dengan Fetch + Hydration',
                '---',
                '### Bagian 4: CRUD Penuh & Finalisasi',
                '**P13** — CRUD: Update & Delete',
                '**P14** — Integrasi Proyek & Finalisasi',
                '**P15** — Final Review & Demo Project',
                '**P16/UAS** — Pengembangan SPA: CMS Fungsional'
            ]
        },
        rightCol: {
            subtitle: 'Target Proyek & Cara Sitasi',
            lines: [
                '### Target Proyek Akhir Semester',
                'Mahasiswa membangun **Niura Article System** — CMS berbasis Single Page Application dengan:',
                '```javascript',
                '// Fitur yang wajib berfungsi di UAS:\n// ✅ SPA Navigation (Dashboard / List / Add-Edit)\n// ✅ Full CRUD: Create, Read, Update, Delete\n// ✅ Persistensi LocalStorage + Fetch Hydration\n// ✅ Responsif di mobile\n// ✅ Toast Notification & Modal Edit\n// ✅ Search real-time\n// ✅ Dashboard Stats (total artikel, bulan ini)',
                '```',
                '---',
                '### Bobot Penilaian UAS',
                'skill:30%:Logika CRUD Penuh (C-R-U-D tanpa error):Utama',
                'skill:20%:Arsitektur SPA (min 3 menu, tanpa reload):Arsitektur',
                'skill:20%:Persistensi Data (LocalStorage + Fetch):Teknis',
                'skill:20%:UI/UX Responsif & CSS Variables:Desain',
                'skill:10%:Kualitas Kode & Dokumentasi:Profesional',
                '---',
                '### How to Cite This Courseware',
                '**Wawan Sismadi.** (2026). *OCW-PW: Open Courseware Pemrograman Web*. Universitas IPWIJA. Figshare. DOI: 10.5281/figshare.XXXXXXXX'
            ]
        }
    }
];
