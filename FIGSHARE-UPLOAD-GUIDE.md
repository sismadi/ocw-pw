# Panduan Upload ke Figshare — ocw-pw
## Tujuan: Mendapatkan DOI untuk sismadi/ocw-pw

---

## Langkah 1 — Siapkan File ZIP

Download repo dari GitHub sebagai ZIP:
https://github.com/sismadi/ocw-pw/archive/refs/heads/main.zip

Rename file ZIP menjadi:
  ocw-pw-v1.0.0.zip

---

## Langkah 2 — Login Figshare

Buka: https://figshare.com
Login dengan akun Pak Wawan (atau buat akun baru jika belum ada).
Disarankan login via ORCID agar terhubung otomatis:
  ORCID: 0009-0007-2685-5663

---

## Langkah 3 — Buat Item Baru

Klik tombol "+Create new item" atau "My data → Upload"

Upload file: ocw-pw-v1.0.0.zip

---

## Langkah 4 — Isi Metadata (salin dari figshare.json)

TITLE:
  OCW-PW: Open Courseware for Web Programming — Universitas IPWIJA

AUTHORS:
  Wawan Sismadi | ORCID: 0009-0007-2685-5663

ITEM TYPE:
  Software

DESCRIPTION:
  (salin dari field "description" di figshare.json)

CATEGORIES:
  Computer Science > Software Engineering
  Education > Educational Technology

KEYWORDS (paste satu per satu):
  open courseware, web programming, pemrograman web, javascript,
  client-side rendering, json-driven UI, single page application,
  zero dependency, no-build step, micro-framework, DonatJS,
  educational technology, open education, Universitas IPWIJA, Indonesia

LICENSE:
  MIT

FUNDING:
  (kosongkan)

---

## Langkah 5 — Tambah Related Materials

Di bagian "References" atau "Related materials":

  1. https://github.com/sismadi/ocw-pw  (Is supplemented by)
  2. https://donat.id                   (Is documented by)
  3. https://donatjs.github.io/core     (Requires)

---

## Langkah 6 — Publish & Dapatkan DOI

Klik "Save" → lalu klik "Publish"
Figshare akan generate DOI dalam format:
  https://doi.org/10.6084/m9.figshare.XXXXXXX

---

## Langkah 7 — Update DOI di Repo

Setelah DOI diterima, update di 4 tempat:

1. README.md — badge DOI (baris ke-6)
   Ganti: figshare.XXXXXXXX
   Dengan: m9.figshare.[nomor DOI]

2. CITATION.cff — field doi:
   doi: "10.6084/m9.figshare.[nomor DOI]"

3. figshare.json — (untuk arsip referensi)

4. home.js — baris sitasi di rightCol:
   DOI: 10.6084/m9.figshare.[nomor DOI]

---

## Catatan Penting

- DOI Figshare format: 10.6084/m9.figshare.[ID]
- DOI Zenodo format:   10.5281/zenodo.[ID]
- Keduanya berbeda — jangan tertukar saat update metadata
- Setelah publish, DOI tidak bisa dihapus — pastikan metadata benar sebelum klik Publish
