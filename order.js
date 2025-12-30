// Services Data
const services = {
  helosleep: {
    name: "HELOSLEEP",
    type: "package",
    packages: [
      {
        id: "hsp1",
        name: "Premium",
        description: "Cleaning paket dasar untuk kasur 1-2 tempat tidur",
        price: 150000,
        duration: 45,
        included: ["Vakum kasur", "Pembersihan permukaan", "Penghilang tungau dasar"]
      },
      {
        id: "hsp2",
        name: "Premium Plus",
        description: "Cleaning paket menengah dengan proteksi tambahan",
        price: 200000,
        duration: 60,
        included: ["Vakum kasur", "Pembersihan permukaan", "Penghilang tungau", "Proteksi antimikroba"]
      },
      {
        id: "hsp3",
        name: "Ultimate",
        description: "Cleaning lengkap untuk 2-3 tempat tidur",
        price: 280000,
        duration: 90,
        included: ["Vakum kasur", "Pembersihan mendalam", "Penghilang tungau profesional", "Proteksi antimikroba", "Penghilang noda"]
      },
      {
        id: "hsp4",
        name: "Ultimate Plus",
        description: "Paket premium lengkap dengan hasil maksimal",
        price: 380000,
        duration: 120,
        included: ["Vakum kasur profesional", "Pembersihan mendalam", "Penghilang tungau profesional", "Proteksi antimikroba premium", "Penghilang noda", "Parfum kasur", "Inspeksi kesehatan tidur"]
      }
    ],
    addons: [
      { id: "hsao1", name: "Bantal", price: 15000, duration: 10 },
      { id: "hsao2", name: "Guling", price: 15000, duration: 10 },
      { id: "hsao3", name: "Bantal Sofa", price: 15000, duration: 10 },
      { id: "hsao4", name: "Selimut", price: 20000, duration: 15 },
      { id: "hsao5", name: "Bed Cover", price: 25000, duration: 15 },
      { id: "hsao6", name: "Topper", price: 30000, duration: 20 }
    ]
  },
  heloliving: {
    name: "HELOLIVING",
    type: "package",
    packages: [
      {
        id: "hlp1",
        name: "Premium",
        description: "Paket cleaning dasar untuk furniture",
        items: [
          { name: "Sofa ≤100cm", price: 80000, duration: 30 },
          { name: "Sofa 101-170cm", price: 150000, duration: 45 },
          { name: "Sofa >170cm", price: 220000, duration: 60 },
          { name: "Kursi Makan", price: 35000, duration: 15 },
          { name: "Karpet Kecil", price: 50000, duration: 25 },
          { name: "Karpet Sedang", price: 90000, duration: 40 },
          { name: "Karpet Besar", price: 140000, duration: 55 }
        ],
        included: ["Vakum standar", "Pembersihan permukaan", "Penghilang debu"]
      },
      {
        id: "hlp2",
        name: "Ultimate",
        description: "Paket cleaning menyeluruh dengan deep cleaning",
        items: [
          { name: "Sofa ≤100cm", price: 120000, duration: 40 },
          { name: "Sofa 101-170cm", price: 200000, duration: 60 },
          { name: "Sofa >170cm", price: 300000, duration: 90 },
          { name: "Kursi Makan", price: 50000, duration: 20 },
          { name: "Karpet Kecil", price: 80000, duration: 35 },
          { name: "Karpet Sedang", price: 130000, duration: 55 },
          { name: "Karpet Besar", price: 200000, duration: 75 }
        ],
        included: ["Deep vacuum", "Pembersihan mendalam", "Penghilang noda", "Proteksi fabric"]
      },
      {
        id: "hlp3",
        name: "Aureva",
        description: "Paket premium dengan teknologi Aureva terbaik",
        items: [
          { name: "Sofa ≤100cm", price: 180000, duration: 50 },
          { name: "Sofa 101-170cm", price: 280000, duration: 75 },
          { name: "Sofa >170cm", price: 420000, duration: 120 },
          { name: "Kursi Makan", price: 75000, duration: 25 },
          { name: "Karpet Kecil", price: 120000, duration: 45 },
          { name: "Karpet Sedang", price: 180000, duration: 65 },
          { name: "Karpet Besar", price: 280000, duration: 90 }
        ],
        included: ["Teknologi Aureva", "Deep vacuum profesional", "Stain removal expert", "Proteksi antimikroba premium", "Parfum furniture", "UV sterilization"]
      }
    ],
    addons: {
      premium: [
        { id: "hlao_p1", name: "Bantal Sofa Kecil", price: 15000, duration: 10 },
        { id: "hlao_p2", name: "Bantal Sofa Sedang", price: 20000, duration: 12 },
        { id: "hlao_p3", name: "Cushion", price: 15000, duration: 10 }
      ],
      ultimate: [
        { id: "hlao_u1", name: "Bantal Sofa Kecil", price: 20000, duration: 12 },
        { id: "hlao_u2", name: "Bantal Sofa Sedang", price: 25000, duration: 15 },
        { id: "hlao_u3", name: "Cushion", price: 20000, duration: 12 },
        { id: "hlao_u4", name: "Ottoman", price: 50000, duration: 25 },
        { id: "hlao_u5", name: "Pouffe", price: 40000, duration: 20 }
      ],
      aureva: [
        { id: "hlao_a1", name: "Bantal Sofa Kecil", price: 25000, duration: 15 },
        { id: "hlao_a2", name: "Bantal Sofa Sedang", price: 35000, duration: 18 },
        { id: "hlao_a3", name: "Cushion", price: 25000, duration: 15 },
        { id: "hlao_a4", name: "Ottoman", price: 70000, duration: 30 },
        { id: "hlao_a5", name: "Pouffe", price: 55000, duration: 25 },
        { id: "hlao_a6", name: "Rug Premium", price: 100000, duration: 40 }
      ]
    }
  }
};

// State
let selectedServices = [];
let appliedVoucher = null;
let selectedHelosleepPackage = null;
let selectedHelolivingPackages = [];
let selectedHelolivingItems = [];
let map = null;
let currentLat = -6.2088;
let currentLng = 106.8456;

// DOM Elements
let orderForm, serviceModal, openModalBtn, closeModalBtn, serviceSearch;
let serviceListContainer, selectedServicesContainer, serviceCountBadge;
let totalContainer, totalAmount, clearAllBtn, confirmBtn;
let getLocationBtn, tanggalInput;

// =======================
// WELCOME MODAL
// =======================
function showWelcomeModal() {
  const hasVisited = localStorage.getItem('heloklin_has_visited');
  
  if (!hasVisited) {
    const welcomeModal = document.getElementById('welcomeModal');
    if (welcomeModal) {
      welcomeModal.classList.remove('hidden');
    }
  }
}

function handleExistingCustomer() {
  localStorage.setItem('heloklin_has_visited', 'true');
  document.getElementById('welcomeModal').classList.add('hidden');
}

function handleNewCustomer() {
  localStorage.setItem('heloklin_has_visited', 'true');
  // Redirect to WhatsApp - GANTI NOMOR INI DENGAN NOMOR WHATSAPP ADMIN ANDA
  const phoneNumber = '6281234567890'; // Format: 62 + nomor tanpa 0 di depan
  const message = encodeURIComponent('Halo Admin Heloklin, saya tertarik dengan layanan cleaning Anda. Bisa dibantu informasinya?');
  window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
}

// =======================
// CAROUSEL FUNCTIONALITY
// =======================
const carouselSlides = [
  { image: "images/aureva_promo.jpg" },
  { image: "images/heloklin_promo.jpg" },
  { image: "images/promo_test.webp" }
];

let currentSlide = 0;
let autoRotateTimer = null;

function initCarousel() {
  const carouselTrack = document.getElementById("carouselTrack");
  const carouselDots = document.getElementById("carouselDots");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Create slides
  carouselSlides.forEach((slide, index) => {
    const slideEl = document.createElement("div");
    slideEl.className = "carousel-slide";
    slideEl.style.backgroundImage = `url('${slide.image}')`;
    carouselTrack.appendChild(slideEl);
  });

  // Create dots
  carouselSlides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `carousel-dot ${index === 0 ? "active" : ""}`;
    dot.addEventListener("click", () => goToSlide(index));
    carouselDots.appendChild(dot);
  });

  // Event listeners
  prevBtn.addEventListener("click", () => {
    clearAutoRotate();
    prevSlide();
    startAutoRotate();
  });

  nextBtn.addEventListener("click", () => {
    clearAutoRotate();
    nextSlide();
    startAutoRotate();
  });

  // Touch/Swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  carouselTrack.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  carouselTrack.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
      clearAutoRotate();
      nextSlide();
      startAutoRotate();
    } else if (touchEndX - touchStartX > 50) {
      clearAutoRotate();
      prevSlide();
      startAutoRotate();
    }
  }

  startAutoRotate();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % carouselSlides.length;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
  updateCarousel();
}

function updateCarousel() {
  const carouselTrack = document.getElementById("carouselTrack");
  const dots = document.querySelectorAll(".carousel-dot");

  carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function startAutoRotate() {
  autoRotateTimer = setInterval(() => {
    nextSlide();
  }, 5000);
}

function clearAutoRotate() {
  if (autoRotateTimer) {
    clearInterval(autoRotateTimer);
    autoRotateTimer = null;
  }
}

// =======================
// INITIALIZATION
// =======================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize DOM elements
  orderForm = document.getElementById("orderForm");
  serviceModal = document.getElementById("serviceModal");
  openModalBtn = document.getElementById("openServiceModal");
  closeModalBtn = document.getElementById("closeModal");
  serviceSearch = document.getElementById("serviceSearch");
  serviceListContainer = document.getElementById("serviceList");
  selectedServicesContainer = document.getElementById("selectedServices");
  serviceCountBadge = document.getElementById("serviceCount");
  totalContainer = document.getElementById("totalContainer");
  totalAmount = document.getElementById("totalAmount");
  clearAllBtn = document.getElementById("clearAllServices");
  confirmBtn = document.getElementById("confirmServices");
  getLocationBtn = document.getElementById("getLocationBtn");
  tanggalInput = document.getElementById("tanggal");

  // Show welcome modal first
  showWelcomeModal();

  // Setup welcome modal buttons
  const existingCustomerBtn = document.getElementById('existingCustomerBtn');
  const newCustomerBtn = document.getElementById('newCustomerBtn');
  
  if (existingCustomerBtn) {
    existingCustomerBtn.addEventListener('click', handleExistingCustomer);
  }
  if (newCustomerBtn) {
    newCustomerBtn.addEventListener('click', handleNewCustomer);
  }

  initCarousel();

  // Hanya load saved order jika ada parameter ?edit=true di URL
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('edit') === 'true') {
    loadSavedOrder();
  }

  // Wait for Google Maps to be available before initializing map
  if (typeof google !== 'undefined' && google.maps) {
    initMap();
  } else {
    setTimeout(() => {
      if (typeof google !== 'undefined' && google.maps) {
        initMap();
      } else {
        console.error('Google Maps failed to load');
      }
    }, 1000);
  }

  initDatePicker();
  renderServiceList();
  setupEventListeners();
  setupVoucherChecker();
});

function loadSavedOrder() {
  const saved = localStorage.getItem("heloklin_order");
  if (!saved) return;

  const order = JSON.parse(saved);

  document.getElementById("nama").value = order.nama || "";
  document.getElementById("telepon").value = order.telepon || "";
  document.getElementById("alamat").value = order.alamat || "";
  document.getElementById("kelurahan").value = order.kelurahan || "";
  document.getElementById("kecamatan").value = order.kecamatan || "";
  document.getElementById("kota").value = order.kota || "";
  document.getElementById("tanggal").value = order.tanggal || "";
  document.getElementById("waktu").value = order.waktu || "";
  document.getElementById("voucher").value = order.voucher || "";

  currentLat = parseFloat(order.latitude) || currentLat;
  currentLng = parseFloat(order.longitude) || currentLng;

  selectedServices = (order.layanan || []).map((s) => ({
    ...s,
    quantity: s.quantity || 1,
  }));

  const helosleepPackage = selectedServices.find(s => s.type === "package" && s.id.startsWith("hsp"));
  if (helosleepPackage) {
    selectedHelosleepPackage = helosleepPackage;
  }

  selectedHelolivingPackages = selectedServices
    .filter(s => s.type === "package" && s.id.startsWith("hlp"))
    .map(p => p.id);

  const helolivingItems = selectedServices.filter(s => s.type === "heloliving_item");
  if (helolivingItems.length > 0) {
    selectedHelolivingItems = helolivingItems;
  }

  updateSelectedServicesUI();

  if (order.appliedVoucher) {
    appliedVoucher = order.appliedVoucher;
    const voucherStatus = document.getElementById("voucherStatus");
    const discountText = appliedVoucher.type === "percentage"
      ? `${appliedVoucher.discount}%`
      : formatCurrency(appliedVoucher.discount);
    voucherStatus.textContent = `✓ Voucher valid! Diskon ${discountText}`;
    voucherStatus.className = "text-sm text-green-600 font-medium";
    updateSelectedServicesUI();
  }
}

// =======================
// MAP FUNCTIONS
// =======================
function initMap() {
  if (typeof google === 'undefined' || !google.maps) {
    console.error('Google Maps not loaded yet');
    return;
  }

  const mapContainer = document.getElementById('map');
  if (!mapContainer) {
    console.error('Map container not found');
    return;
  }

  const centerPosition = { lat: currentLat, lng: currentLng };

  map = new google.maps.Map(mapContainer, {
    center: centerPosition,
    zoom: 15,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  });

  const marker = new google.maps.Marker({
    position: centerPosition,
    map: map,
    draggable: false,
  });

  map.addListener('center_changed', () => {
    const center = map.getCenter();
    currentLat = center.lat();
    currentLng = center.lng();
    document.getElementById('latitude').value = currentLat;
    document.getElementById('longitude').value = currentLng;
    marker.setPosition({ lat: currentLat, lng: currentLng });
  });

  document.getElementById('latitude').value = currentLat;
  document.getElementById('longitude').value = currentLng;

  console.log('Google Maps initialized successfully');
}

function initDatePicker() {
  const today = new Date().toISOString().split("T")[0];
  tanggalInput.setAttribute("min", today);
}

function setupEventListeners() {
  openModalBtn.addEventListener("click", () => {
    serviceModal.classList.remove("hidden");
    serviceModal.classList.add("flex");
    document.body.style.overflow = "hidden";
  });

  closeModalBtn.addEventListener("click", closeModal);

  serviceModal.addEventListener("click", (e) => {
    if (e.target === serviceModal) closeModal();
  });

  serviceSearch.addEventListener("input", (e) => {
    renderServiceList(e.target.value);
  });

  clearAllBtn.addEventListener("click", () => {
    selectedServices = [];
    selectedHelosleepPackage = null;
    selectedHelolivingPackages = [];
    selectedHelolivingItems = [];
    renderServiceList(serviceSearch.value);
    updateSelectedServicesUI();
  });

  confirmBtn.addEventListener("click", closeModal);

  getLocationBtn.addEventListener("click", getCurrentLocation);

  orderForm.addEventListener("submit", handleSubmit);
}

function closeModal() {
  serviceModal.classList.add("hidden");
  serviceModal.classList.remove("flex");
  document.body.style.overflow = "";
  serviceSearch.value = "";
  renderServiceList();
}

function getCurrentLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation tidak didukung oleh browser Anda");
    return;
  }

  getLocationBtn.innerHTML = `
    <svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="32"></circle>
    </svg>
    Mencari...
  `;

  navigator.geolocation.getCurrentPosition(
    (position) => {
      currentLat = position.coords.latitude;
      currentLng = position.coords.longitude;

      if (map) {
        map.setCenter({ lat: currentLat, lng: currentLng });
        map.setZoom(17);
      }

      document.getElementById("latitude").value = currentLat;
      document.getElementById("longitude").value = currentLng;

      reverseGeocode(currentLat, currentLng);

      getLocationBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2"></path>
        </svg>
        Lokasi Saat Ini
      `;
    },
    (error) => {
      alert("Gagal mendapatkan lokasi: " + error.message);
      getLocationBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2"></path>
        </svg>
        Lokasi Saat Ini
      `;
    }
  );
}

function reverseGeocode(lat, lon) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`;

  fetch(url, { headers: { "User-Agent": "heloklin/1.0" } })
    .then((res) => res.json())
    .then((data) => {
      if (!data.address) return;

      const addr = data.address;

      const roadName = addr.road || addr.pedestrian || addr.path || "";
      const houseNumber = addr.house_number || "";
      const addressParts = [];

      if (houseNumber) addressParts.push(houseNumber);
      if (roadName) addressParts.push(roadName);
      if (addr.hamlet) addressParts.push(addr.hamlet);
      if (addr.residential) addressParts.push(addr.residential);

      const detailAlamat = addressParts.join(", ");

      if (detailAlamat) {
        document.getElementById("alamat").value = detailAlamat;
      }

      document.getElementById("kelurahan").value =
        addr.village || addr.suburb || addr.neighbourhood || addr.quarter || addr.hamlet || "";

      document.getElementById("kecamatan").value =
        addr.subdistrict || addr.city_district || addr.district || addr.borough || addr.county || addr.municipality || "";

      document.getElementById("kota").value =
        addr.city || addr.town || addr.city_district || addr.municipality || addr.state_district || addr.state || "";
    })
    .catch((err) => console.error("Reverse Geocoding Error:", err));
}

// =======================
// SERVICE RENDERING
// =======================
function renderServiceList(searchTerm = "") {
  let html = "";
  const search = searchTerm.toLowerCase();

  Object.entries(services).forEach(([category, data]) => {
    if (data.type === "package") {
      const filteredPackages = data.packages.filter((pkg) =>
        pkg.name.toLowerCase().includes(search) || pkg.description.toLowerCase().includes(search)
      );

      if (filteredPackages.length === 0) return;

      html += `
        <div class="mb-8">
          <div class="flex items-center gap-3 mb-4">
            <span class="category-badge ${category} px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">${data.name} - PILIH PAKET</span>
          </div>
          <div class="grid grid-cols-1 gap-3 mb-6">
            ${filteredPackages.map((pkg) => renderPackageCard(pkg, category, data)).join("")}
          </div>
        </div>
      `;
      return;
    }

    const filteredItems = data.items.filter((item) => item.name.toLowerCase().includes(search));

    if (filteredItems.length === 0) return;

    html += `
      <div class="mb-6">
        <div class="flex items-center gap-3 mb-3">
          <span class="category-badge ${category} px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">${data.name}</span>
        </div>
        <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
          ${filteredItems.map((item) => renderServiceItem(item, category)).join("")}
        </div>
      </div>
    `;
  });

  if (!html) {
    html = `<div class="text-center py-8 text-slate-500">Tidak ada layanan yang ditemukan</div>`;
  }

  serviceListContainer.innerHTML = html;

  document.querySelectorAll(".package-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest('.heloliving-item')) return;
      if (e.target.closest('.addon-item')) return;
      selectPackage(card);
    });
  });

  document.querySelectorAll(".heloliving-item").forEach((item) => {
    item.addEventListener("click", () => toggleHelolivingItem(item));
  });

  document.querySelectorAll(".addon-item").forEach((item) => {
    item.addEventListener("click", () => toggleAddon(item));
  });

  document.querySelectorAll(".service-item").forEach((item) => {
    item.addEventListener("click", () => toggleService(item));
  });
}

function renderPackageCard(pkg, category, data) {
  const isHelosleep = category === "helosleep";
  const isHeloliving = category === "heloliving";
  const isSelected = isHelosleep
    ? selectedHelosleepPackage && selectedHelosleepPackage.id === pkg.id
    : selectedHelolivingPackages.includes(pkg.id);
  const addonList = isHelosleep ? data.addons : (data.addons[pkg.name.toLowerCase()] || []);

  let html = `
    <div class="package-card ${isSelected ? "selected" : ""} p-4 border-2 border-slate-200 rounded-xl cursor-pointer transition-all duration-200 hover:border-blue-400 hover:bg-slate-50" data-package-id="${pkg.id}" data-category="${category}">
      <div class="flex items-start justify-between mb-2">
        <div class="flex-1">
          <h3 class="font-semibold text-slate-800">${pkg.name}</h3>
          <p class="text-xs text-slate-500 mt-1">${pkg.description}</p>
          <div class="flex items-start gap-2 mt-2">
            <div class="flex-shrink-0 mt-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-600">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div class="text-xs text-slate-600 space-y-1">
              ${pkg.included.map(item => `<div>• ${item}</div>`).join("")}
            </div>
          </div>
        </div>
        ${isHelosleep ? `
          <div class="text-right ml-4">
            <div class="text-lg font-bold text-blue-600">${formatCurrency(pkg.price)}</div>
            <div class="text-xs text-slate-500">${pkg.duration} menit</div>
          </div>
        ` : ""}
      </div>

      ${isHeloliving && isSelected ? renderHelolivingItems(pkg) : ""}
      ${isSelected ? renderAddons(addonList, pkg.id, category) : ""}
    </div>
  `;

  return html;
}

function renderHelolivingItems(pkg) {
  return `
    <div class="mt-3 pt-3 border-t border-slate-200">
      <p class="text-xs font-semibold text-slate-700 mb-2">Pilih item yang ingin dibersihkan:</p>
      <div class="space-y-2">
        ${pkg.items.map((item, idx) => {
    const itemId = `${pkg.id}_item_${idx}`;
    const isItemSelected = selectedHelolivingItems.some(i => i.id === itemId);
    return `
            <div class="heloliving-item ${isItemSelected ? "selected" : ""} flex items-center justify-between p-2 border border-slate-200 rounded-lg cursor-pointer hover:border-green-400 hover:bg-slate-50" data-item-id="${itemId}" data-package-id="${pkg.id}" data-item-index="${idx}">
              <div class="flex items-center gap-2">
                <div class="item-checkbox" style="width: 16px; height: 16px; border: 2px solid #e2e8f0; border-radius: 0.25rem; display: flex; align-items: center; justify-content: center; transition: all 0.2s; ${isItemSelected ? 'background:#10b981;border-color:#10b981;' : ''}">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" style="${isItemSelected ? 'display:block;' : 'display:none;'}">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span class="text-sm text-slate-700">${item.name}</span>
              </div>
              <div class="text-right">
                <div class="text-sm font-semibold text-slate-700">${formatCurrency(item.price)}</div>
                <div class="text-xs text-slate-500">${item.duration} menit</div>
              </div>
            </div>
          `;
  }).join("")}
      </div>
    </div>
  `;
}

function renderAddons(addonList, packageId, category) {
  return `
    <div class="mt-4 pt-4 border-t border-slate-200">
      <div class="flex items-center gap-3 mb-3">
        <span class="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-700">Add-ons</span>
      </div>
      <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
        ${addonList.map((addon) => {
    const addonId = category === "heloliving" ? `${packageId}_addon_${addon.id}` : addon.id;
    const addonService = selectedServices.find(s => s.id === addonId);
    const isAddonSelected = !!addonService;
    return `
            <div class="addon-item ${isAddonSelected ? "selected" : ""} flex items-center gap-3 p-3 border-2 border-slate-200 rounded-lg cursor-pointer transition-all duration-200 hover:border-amber-400 hover:bg-slate-50" data-addon-id="${addonId}" data-base-addon-id="${addon.id}" data-category="${category}" data-package-id="${packageId}">
              <div class="addon-checkbox">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div class="addon-info flex-1 min-w-0">
                <div class="addon-name font-medium text-sm text-slate-800">${addon.name}</div>
                <div class="addon-price text-xs text-slate-500 font-medium">${formatCurrency(addon.price)}</div>
              </div>
            </div>
          `;
  }).join("")}
      </div>
    </div>
  `;
}

function renderServiceItem(item, category) {
  const isSelected = selectedServices.some((s) => s.id === item.id);
  return `
    <div class="service-item ${isSelected ? "selected" : ""} flex items-center gap-3 p-3.5 border-2 border-slate-200 rounded-xl cursor-pointer transition-all duration-200 hover:border-blue-400 hover:bg-slate-50" data-id="${item.id}" data-category="${category}">
      <div class="service-checkbox">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div class="service-info flex-1 min-w-0">
        <div class="service-name font-medium text-sm text-slate-800 truncate">${item.name}</div>
        <div class="service-price text-xs text-slate-500 font-medium">${formatCurrency(item.price)}</div>
      </div>
    </div>
  `;
}

// =======================
// SERVICE SELECTION
// =======================
function selectPackage(element) {
  const packageId = element.dataset.packageId;
  const category = element.dataset.category;

  const pkg = services[category].packages.find((p) => p.id === packageId);

  if (category === "helosleep") {
    if (selectedHelosleepPackage && selectedHelosleepPackage.id === packageId) {
      selectedHelosleepPackage = null;
      selectedServices = selectedServices.filter(s => !s.id.startsWith("hsp") && !s.id.startsWith("hsao"));
    } else {
      selectedHelosleepPackage = pkg;
      selectedServices = selectedServices.filter(s => !s.id.startsWith("hsp") && !s.id.startsWith("hsao"));
      selectedServices.push({
        id: pkg.id,
        name: pkg.name,
        price: pkg.price,
        duration: pkg.duration,
        category: "helosleep",
        type: "package",
        quantity: 1
      });
    }
  } else if (category === "heloliving") {
    const isAlreadySelected = selectedHelolivingPackages.includes(packageId);

    if (isAlreadySelected) {
      selectedHelolivingPackages = selectedHelolivingPackages.filter((id) => id !== packageId);
      selectedHelolivingItems = selectedHelolivingItems.filter((item) => !item.id.startsWith(`${packageId}_item_`));
      selectedServices = selectedServices.filter((s) => s.id !== packageId && !s.id.startsWith(`${packageId}_item_`) && !s.id.startsWith(`${packageId}_addon_`));
    } else {
      selectedHelolivingPackages.push(packageId);
      selectedServices.push({
        id: pkg.id,
        name: pkg.name,
        price: pkg.price || 0,
        duration: pkg.duration || 0,
        category: "heloliving",
        type: "package",
        quantity: 1
      });
    }
  }

  renderServiceList();
  updateSelectedServicesUI();
}

function toggleHelolivingItem(element) {
  const itemId = element.dataset.itemId;
  const packageId = element.dataset.packageId;
  const itemIndex = parseInt(element.dataset.itemIndex);

  const pkg = services.heloliving.packages.find(p => p.id === packageId);
  const item = pkg.items[itemIndex];

  const existingIndex = selectedHelolivingItems.findIndex((i) => i.id === itemId);

  if (existingIndex > -1) {
    selectedHelolivingItems.splice(existingIndex, 1);
    selectedServices = selectedServices.filter(s => s.id !== itemId);
    element.classList.remove("selected");

    const checkbox = element.querySelector('.item-checkbox');
    checkbox.style.background = '';
    checkbox.style.borderColor = '#e2e8f0';
    checkbox.querySelector('svg').style.display = 'none';
  } else {
    const serviceItem = {
      id: itemId,
      name: `${pkg.name} - ${item.name}`,
      price: item.price,
      duration: item.duration,
      category: "heloliving",
      packageName: pkg.name,
      type: "heloliving_item",
      quantity: 1
    };
    selectedHelolivingItems.push(serviceItem);
    selectedServices.push(serviceItem);
    element.classList.add("selected");

    const checkbox = element.querySelector('.item-checkbox');
    checkbox.style.background = '#10b981';
    checkbox.style.borderColor = '#10b981';
    checkbox.querySelector('svg').style.display = 'block';
  }

  updateSelectedServicesUI();
}

function toggleAddon(element) {
  const addonId = element.dataset.addonId;
  const category = element.dataset.category;
  const packageId = element.dataset.packageId;
  const baseAddonId = element.dataset.baseAddonId;

  let addonData;
  let addonPackageName = null;
  if (category === "helosleep") {
    addonData = services[category].addons.find((a) => a.id === addonId);
    const pkg = selectedHelosleepPackage || services.helosleep.packages.find((p) => p.id === selectedHelosleepPackage?.id);
    addonPackageName = pkg ? pkg.name : services.helosleep.name;
  } else if (category === "heloliving") {
    const pkg = services.heloliving.packages.find((p) => p.id === packageId);
    if (!pkg) return;
    const packageName = pkg.name.toLowerCase();
    addonData = services[category].addons[packageName]?.find((a) => a.id === baseAddonId);
    addonPackageName = pkg.name;
  }

  if (!addonData) return;

  const existingIndex = selectedServices.findIndex((s) => s.id === addonId);

  if (existingIndex > -1) {
    selectedServices.splice(existingIndex, 1);
    element.classList.remove("selected");
  } else {
    selectedServices.push({
      ...addonData,
      category: category,
      type: "addon",
      id: addonId,
      packageId: packageId,
      packageName: addonPackageName,
      quantity: 1
    });
    element.classList.add("selected");
  }

  updateSelectedServicesUI();
}

function toggleService(element) {
  const id = element.dataset.id;
  const category = element.dataset.category;

  const existingIndex = selectedServices.findIndex((s) => s.id === id);

  if (existingIndex > -1) {
    selectedServices.splice(existingIndex, 1);
    element.classList.remove("selected");
  } else {
    const service = services[category].items.find((s) => s.id === id);
    selectedServices.push({ ...service, category, quantity: 1 });
    element.classList.add("selected");
  }

  updateSelectedServicesUI();
}

// =======================
// UI UPDATES
// =======================
function updateSelectedServicesUI() {
  serviceCountBadge.textContent = selectedServices.length;

  if (selectedServices.length === 0) {
    selectedServicesContainer.innerHTML = "";
    totalContainer.classList.add("hidden");
    return;
  }

  const packageServices = selectedServices.filter(s => s.type === "package");
  const helolivingItems = selectedServices.filter(s => s.type === "heloliving_item");
  const addonServices = selectedServices.filter(s => s.type === "addon");
  const regularServices = selectedServices.filter(s => !s.type);

  let html = "";

  if (packageServices.length > 0) {
    html += packageServices.map(pkg => renderSelectedService(pkg)).join("");
  }

  if (helolivingItems.length > 0) {
    html += helolivingItems.map(item => renderSelectedService(item, true)).join("");
  }

  if (addonServices.length > 0) {
    html += addonServices.map(addon => renderSelectedService(addon, true)).join("");
  }

  if (regularServices.length > 0) {
    html += regularServices.map(service => renderSelectedService(service)).join("");
  }

  selectedServicesContainer.innerHTML = html;

  document.querySelectorAll(".service-card-remove").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      removeService(btn.dataset.id);
    });
  });

  document.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      const delta = parseInt(btn.dataset.delta, 10);
      changeQuantity(id, delta);
    });
  });

  updateTotal();
}

function renderSelectedService(service, isNested = false) {
  const categoryLabel = service.type === "addon" ? "Add-on" : (services[service.category]?.name || service.packageName || "");
  const serviceName = service.type === "addon" && service.packageName ? `${service.packageName} - ${service.name}` : service.name;

  return `
    <div class="service-card ${service.category} flex items-center justify-between p-${isNested ? "3" : "4"} rounded-${isNested ? "lg" : "xl"} border-l-4 ${isNested ? "ml-4 opacity-90" : ""}">
      <div class="service-card-info flex flex-col gap-1">
        <span class="service-card-category text-xs font-semibold uppercase tracking-wider">${categoryLabel}</span>
        <span class="service-card-name font-${isNested ? "medium" : "semibold"} text-sm text-slate-800">${serviceName}${service.type === "package" ? " (Paket)" : ""}</span>
      </div>
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-1 border rounded-lg px-2 py-1 bg-white/70">
          <button type="button" class="qty-btn text-slate-700 hover:text-slate-900" data-id="${service.id}" data-delta="-1">−</button>
          <span class="min-w-[28px] text-center text-sm font-semibold" data-qty-id="${service.id}">${service.quantity || 1}</span>
          <button type="button" class="qty-btn text-slate-700 hover:text-slate-900" data-id="${service.id}" data-delta="1">+</button>
        </div>
        <span class="service-card-price font-semibold text-slate-800">${formatCurrency((service.price || 0) * (service.quantity || 1))}</span>
        <button type="button" class="service-card-remove bg-none border-none text-red-500 cursor-pointer p-1 rounded transition-all duration-200 hover:bg-red-100" data-id="${service.id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  `;
}

function removeService(id) {
  if (id.startsWith("hsp")) {
    selectedHelosleepPackage = null;
    selectedServices = selectedServices.filter(s => !s.id.startsWith("hsao"));
  } else if (id.startsWith("hlp")) {
    selectedHelolivingPackages = selectedHelolivingPackages.filter((pkgId) => pkgId !== id);
    selectedHelolivingItems = selectedHelolivingItems.filter((item) => !item.id.startsWith(`${id}_item_`));
    selectedServices = selectedServices.filter(s => s.id !== id && !s.id.startsWith(`${id}_item_`) && !s.id.startsWith(`${id}_addon_`));
  } else if (id.includes("_item_")) {
    selectedHelolivingItems = selectedHelolivingItems.filter(i => i.id !== id);
  }

  selectedServices = selectedServices.filter((s) => s.id !== id);
  renderServiceList(serviceSearch.value);
  updateSelectedServicesUI();
}

function changeQuantity(id, delta) {
  const service = selectedServices.find((s) => s.id === id);
  if (!service) return;

  const currentQty = service.quantity || 1;
  const newQty = Math.max(1, currentQty + delta);
  if (newQty === currentQty) return;

  service.quantity = newQty;

  if (service.type === "heloliving_item") {
    const idx = selectedHelolivingItems.findIndex((i) => i.id === id);
    if (idx > -1) {
      selectedHelolivingItems[idx].quantity = newQty;
    }
  }

  renderServiceList(serviceSearch.value);
  updateSelectedServicesUI();
}

function updateTotal() {
  const subtotal = selectedServices.reduce((sum, s) => sum + s.price * (s.quantity || 1), 0);
  let discount = 0;
  let finalTotal = subtotal;

  if (appliedVoucher) {
    if (appliedVoucher.type === "percentage") {
      discount = Math.round(subtotal * (appliedVoucher.discount / 100));
    } else {
      discount = appliedVoucher.discount;
    }
    finalTotal = subtotal - discount;
  }

  const totalMinutes = selectedServices.reduce((sum, s) => sum + (s.duration || 0) * (s.quantity || 1), 0);

  const formatMinutes = (m) => {
    const h = Math.floor(m / 60);
    const min = m % 60;
    if (h > 0 && min > 0) return `${h} jam ${min} menit`;
    if (h > 0) return `${h} jam`;
    return `${min} menit`;
  };

  document.getElementById("subtotalAmount").textContent = formatCurrency(subtotal);
  totalAmount.textContent = formatCurrency(finalTotal);
  document.getElementById("estimatedTime").textContent = formatMinutes(totalMinutes);

  const discountRow = document.getElementById("discountRow");
  if (appliedVoucher && discount > 0) {
    const discountLabel = appliedVoucher.type === "percentage"
      ? `${appliedVoucher.discount}%`
      : appliedVoucher.code;
    document.getElementById("discountLabel").textContent = discountLabel;
    document.getElementById("discountAmount").textContent = "- " + formatCurrency(discount);
    discountRow.classList.remove("hidden");
  } else {
    discountRow.classList.add("hidden");
  }

  totalContainer.classList.remove("hidden");
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

// =======================
// FORM SUBMISSION
// =======================
function handleSubmit(e) {
  e.preventDefault();

  if (selectedServices.length === 0) {
    alert("Silakan pilih minimal satu layanan");
    return;
  }

  const subtotal = selectedServices.reduce((sum, s) => sum + s.price * (s.quantity || 1), 0);
  let discount = 0;
  let finalTotal = subtotal;

  if (appliedVoucher) {
    if (appliedVoucher.type === "percentage") {
      discount = Math.round(subtotal * (appliedVoucher.discount / 100));
    } else {
      discount = appliedVoucher.discount;
    }
    finalTotal = subtotal - discount;
  }

  const formData = {
    nama: document.getElementById("nama").value,
    telepon: document.getElementById("telepon").value,
    latitude: document.getElementById("latitude").value,
    longitude: document.getElementById("longitude").value,
    alamat: document.getElementById("alamat").value,
    kelurahan: document.getElementById("kelurahan").value,
    kecamatan: document.getElementById("kecamatan").value,
    kota: document.getElementById("kota").value,
    tanggal: document.getElementById("tanggal").value,
    waktu: document.getElementById("waktu").value,
    voucher: document.getElementById("voucher").value,
    appliedVoucher: appliedVoucher,
    layanan: selectedServices,
    subtotal: subtotal,
    discount: discount,
    total: finalTotal,
    totalEstimatedMinutes: selectedServices.reduce((sum, s) => sum + (s.duration || 0) * (s.quantity || 1), 0),
  };

  localStorage.setItem("heloklin_order", JSON.stringify(formData));
  window.location.href = "checkout.html";
}

// =======================
// VOUCHER CHECKER
// =======================
function setupVoucherChecker() {
  const checkVoucherBtn = document.getElementById("checkVoucherBtn");
  const voucherInput = document.getElementById("voucher");
  const voucherStatus = document.getElementById("voucherStatus");

  if (checkVoucherBtn) {
    checkVoucherBtn.addEventListener("click", () => {
      const voucherCode = voucherInput.value.trim().toUpperCase();

      if (!voucherCode) {
        voucherStatus.textContent = "Masukkan kode voucher terlebih dahulu";
        voucherStatus.className = "text-sm text-red-500";
        return;
      }

      const validVouchers = {
        "HELO10": { discount: 10, type: "percentage" },
        "DISKON50": { discount: 50000, type: "fixed" },
        "PROMOHELO": { discount: 15, type: "percentage" }
      };

      if (validVouchers[voucherCode]) {
        const voucher = validVouchers[voucherCode];
        const discountText = voucher.type === "percentage"
          ? `${voucher.discount}%`
          : formatCurrency(voucher.discount);

        appliedVoucher = {
          code: voucherCode,
          discount: voucher.discount,
          type: voucher.type
        };

        voucherStatus.textContent = `✓ Voucher valid! Diskon ${discountText}`;
        voucherStatus.className = "text-sm text-green-600 font-medium";

        updateSelectedServicesUI();
      } else {
        appliedVoucher = null;
        voucherStatus.textContent = "✗ Kode voucher tidak valid atau sudah tidak aktif";
        voucherStatus.className = "text-sm text-red-500";

        updateSelectedServicesUI();
      }
    });
  }
}
