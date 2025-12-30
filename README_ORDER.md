# Order Page - Heloklin

## Perubahan yang Telah Dilakukan

### 1. Pemisahan CSS dan JavaScript

- **File CSS**: `order.css` - Berisi semua styling untuk halaman order
- **File JavaScript**: `order.js` - Berisi semua fungsi dan logika aplikasi
- **File HTML**: `index.html` - Hanya berisi struktur HTML, lebih bersih dan mudah dibaca

### 2. Welcome Modal

Ditambahkan modal sambutan yang muncul saat pertama kali membuka halaman dengan 2 pilihan:

#### **Ya, Sudah Pernah** (Button Biru)

- Menutup modal dan melanjutkan ke form order
- Menyimpan status bahwa user sudah pernah mengunjungi (menggunakan localStorage)
- Modal tidak akan muncul lagi pada kunjungan berikutnya

#### **Belum, Saya Mau Tanya Dulu** (Button Hijau)

- Mengarahkan user ke WhatsApp untuk chat dengan admin
- Menyimpan status kunjungan agar modal tidak muncul lagi

### Konfigurasi WhatsApp

**PENTING**: Ganti nomor WhatsApp di file `order.js` baris 31:

```javascript
const phoneNumber = "6281234567890"; // Format: 62 + nomor tanpa 0 di depan
```

**Contoh**:

- Jika nomor: 081234567890
- Ganti menjadi: 6281234567890

### File Structure

```
test_live_location/
├── index.html       # Halaman utama (sudah dirapihkan)
├── order.css        # Semua styling
├── order.js         # Semua JavaScript logic
├── checkout.html    # Halaman checkout
├── checkout.css     # CSS checkout
├── checkout.js      # JS checkout
└── images/          # Folder gambar
```

### Fitur Welcome Modal

1. **Tampil Otomatis**: Modal muncul saat pertama kali mengunjungi halaman
2. **Persistent Storage**: Menggunakan localStorage untuk menyimpan status kunjungan
3. **Responsive Design**: Modal responsive dan terlihat bagus di semua ukuran layar
4. **Smooth Animation**: Animasi fade-in dan slide-up untuk pengalaman user yang lebih baik
5. **Backdrop Blur**: Efek blur pada background untuk fokus ke modal

### Testing

Untuk menguji modal lagi setelah memilih salah satu opsi:

1. Buka browser Developer Tools (F12)
2. Pilih tab "Application" atau "Storage"
3. Pilih "Local Storage"
4. Hapus item `heloklin_has_visited`
5. Refresh halaman

### Customization

#### Mengubah Teks Modal

Edit di file `index.html` baris 24-26:

```html
<h2 class="welcome-title">Selamat Datang di Heloklin!</h2>
<p class="welcome-description">
  Apakah Anda pernah melakukan pembelian layanan kami sebelumnya?
</p>
```

#### Mengubah Warna Button

Edit di file `order.css`:

- Primary button (biru): `.welcome-button.primary`
- Secondary button (hijau): `.welcome-button.secondary`

#### Mengubah Pesan WhatsApp

Edit di file `order.js` baris 32:

```javascript
const message = encodeURIComponent("Pesan custom Anda di sini");
```

### Browser Support

- Chrome/Edge (Recommended)
- Firefox
- Safari
- Opera

### Dependencies

- Tailwind CSS (via CDN)
- Google Maps API
- Google Fonts (Open Sans)

### Notes

- Modal menggunakan localStorage, jadi akan tetap tersimpan bahkan setelah browser ditutup
- Untuk testing, bisa menggunakan mode incognito atau clear localStorage
- Pastikan nomor WhatsApp sudah benar sebelum go live
