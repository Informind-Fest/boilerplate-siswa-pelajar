# 🚀 Boilerplate INFORMIND FEST VOL. II 2026 (Kategori Pelajar)

Selamat datang di repositori resmi untuk kompetisi **INFORMIND FEST VOL. II 2026**. Repositori ini dikhususkan untuk kategori Pelajar (SMA/SMK/Sederajat) dengan menggunakan ekosistem **Vanilla JS (HTML murni, CSS murni, dan JavaScript murni)**.

Repositori ini telah dilengkapi dengan sistem pengawasan kode (*Linter* & *Anti-Plagiasi*) standar industri untuk membantu Anda belajar menulis kode yang bersih dan profesional!

## 🛠️ Persyaratan Sistem
Sebelum mulai membuat karya, pastikan perangkat Anda telah terinstal:
- [Node.js](https://nodejs.org/) (Dibutuhkan untuk menjalankan sistem pengecekan kode)
- Akun Git / GitHub
- Code Editor (Disarankan menggunakan **VS Code** beserta ekstensi *Live Server*)

## 📦 Cara Memulai (Instalasi)

1. **Clone Repositori Ini**
   Clone repositori ini ke akun GitHub tim Anda masing-masing. **Pastikan repositori Anda disetting ke PUBLIC**.
   
2. **Instalasi Sistem Penilai**
   Buka terminal di dalam folder proyek ini, lalu jalankan perintah:
   ```bash
   npm install

3. **Mulai Membuat Antarmuka**
   Anda bisa langsung menulis kode di dalam folder `src/.` Buka file `src/index.html` menggunakan browser Anda, atau gunakan ekstensi Live Server di VS Code untuk melihat perubahannya secara langsung.

## ATURAN KETAT PENJURIAN (WAJIB DIBACA)
Repositori ini telah ditanamkan sistem Auto-Grader Panitia. Kualitas penulisan kode (Clean Code) Anda akan dinilai secara otomatis oleh mesin sebelum masuk ke tahap penjurian manual.

Tim Anda DILARANG KERAS melakukan modifikasi, menghapus, atau mengubah konfigurasi pada file-file pengawas berikut:
- `eslint.config.js`
- `.htmlhintrc`
- `.stylelintrc.json`
- `.jscpd.json`
- `package.json ` (khususnya pada bagian `scripts`)

Jika panitia menemukan indikasi kecurangan atau manipulasi pada file-file di atas, tim Anda akan **DIGUGURKAN SECARA OTOMATIS (SKOR 0)**.

## Parameter Penilaian Mesin:
1. **Kerapian HTML & CSS**
   - Dilarang ada tag HTML yang lupa ditutup atau penggunaan ID yang ganda.
   - Penulisan class CSS harus rapi, dilarang ada selector yang duplikat, dan wajib menggunakan kode warna yang valid.
2. **Aturan Javascript**
   - Dilarang meninggalkan `console.log()` pada hasil akhir kode Anda.
   - Dilarang membuat variabel yang pada akhirnya tidak pernah digunakan.
3. **Anti-Duplikasi (Copy-Paste)**
   - Sistem akan mendeteksi jika Anda terlalu banyak melakukan copy-paste pada file `.css` dan `.js` (Batas toleransi duplikasi maksimal adalah **35%**). Usahakan menulis kode secara mandiri dan rapi!
   - Pengulangan pada file HTML tidak akan terkena penalti.

## Cara Mengecek Kode Anda Sendiri
Sebelum mengumpulkan, Anda bisa mengecek apakah kode Anda sudah bersih dari error dengan menjalankan perintah berikut di terminal:
- Cek Error JavaScript: `npm run lint`
- Cek Error HTML: `npm run htmlhint`
- Cek Error CSS: `npm run stylelint`

## Pengumpulan Final
Pastikan Anda telah melakukan commit dan push seluruh kode final Anda ke repositori **GitHub Public** masing-masing sebelum batas waktu yang ditentukan. URL repositori tersebut akan diserahkan kepada panitia melalui formulir resmi.

# Selamat berkreasi dan buktikan logika terbaikmu! 🔥
**HIMA UNIBI | Divisi Acara INFORMIND FEST 2026**
