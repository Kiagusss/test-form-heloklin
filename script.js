// Services Data
const services = {
  helosleep: {
    name: "HELOSLEEP",
    items: [
      { id: "hs1", name: "Kasur Single", price: 75000 },
      { id: "hs2", name: "Kasur Double", price: 100000 },
      { id: "hs3", name: "Kasur King Size", price: 125000 },
      { id: "hs4", name: "Bantal", price: 25000 },
      { id: "hs5", name: "Guling", price: 30000 },
      { id: "hs6", name: "Selimut", price: 35000 },
      { id: "hs7", name: "Bed Cover", price: 50000 },
      { id: "hs8", name: "Topper", price: 60000 },
    ],
  },
  heloliving: {
    name: "HELOLIVING",
    items: [
      { id: "hl1", name: "Sofa 1 Seater", price: 75000 },
      { id: "hl2", name: "Sofa 2 Seater", price: 125000 },
      { id: "hl3", name: "Sofa 3 Seater", price: 175000 },
      { id: "hl4", name: "Sofa L Shape", price: 250000 },
      { id: "hl5", name: "Kursi Makan", price: 40000 },
      { id: "hl6", name: "Karpet Kecil", price: 50000 },
      { id: "hl7", name: "Karpet Sedang", price: 100000 },
      { id: "hl8", name: "Karpet Besar", price: 150000 },
    ],
  },
  helobaby: {
    name: "HELOBABY",
    items: [
      { id: "hb1", name: "Stroller", price: 100000 },
      { id: "hb2", name: "Car Seat", price: 85000 },
      { id: "hb3", name: "Baby Bouncer", price: 75000 },
      { id: "hb4", name: "Baby Crib", price: 125000 },
      { id: "hb5", name: "Baby Playmat", price: 60000 },
      { id: "hb6", name: "High Chair", price: 65000 },
    ],
  },
}

// State
let selectedServices = []
let map = null
let currentLat = -6.2088
let currentLng = 106.8456

// DOM Elements
const orderForm = document.getElementById("orderForm")
const serviceModal = document.getElementById("serviceModal")
const openModalBtn = document.getElementById("openServiceModal")
const closeModalBtn = document.getElementById("closeModal")
const serviceSearch = document.getElementById("serviceSearch")
const serviceListContainer = document.getElementById("serviceList")
const selectedServicesContainer = document.getElementById("selectedServices")
const serviceCountBadge = document.getElementById("serviceCount")
const totalContainer = document.getElementById("totalContainer")
const totalAmount = document.getElementById("totalAmount")
const clearAllBtn = document.getElementById("clearAllServices")
const confirmBtn = document.getElementById("confirmServices")
const getLocationBtn = document.getElementById("getLocationBtn")
const tanggalInput = document.getElementById("tanggal")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initMap()
  initDatePicker()
  renderServiceList()
  setupEventListeners()
})

// Map Initialization
function initMap() {
  map = window.L.map("map", {
    center: [currentLat, currentLng],
    zoom: 15,
    zoomControl: true,
  })

  window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map)

  map.on("move", () => {
    const center = map.getCenter()
    currentLat = center.lat
    currentLng = center.lng
    document.getElementById("latitude").value = currentLat
    document.getElementById("longitude").value = currentLng
  })

  // Set initial values
  document.getElementById("latitude").value = currentLat
  document.getElementById("longitude").value = currentLng
}

function initDatePicker() {
  const today = new Date().toISOString().split("T")[0]
  tanggalInput.setAttribute("min", today)
}

function setupEventListeners() {
  // Modal
  openModalBtn.addEventListener("click", () => {
    serviceModal.classList.add("active")
    document.body.style.overflow = "hidden"
  })

  closeModalBtn.addEventListener("click", closeModal)

  serviceModal.addEventListener("click", (e) => {
    if (e.target === serviceModal) closeModal()
  })

  // Search
  serviceSearch.addEventListener("input", (e) => {
    renderServiceList(e.target.value)
  })

  // Clear all
  clearAllBtn.addEventListener("click", () => {
    selectedServices = []
    renderServiceList(serviceSearch.value)
    updateSelectedServicesUI()
  })

  // Confirm
  confirmBtn.addEventListener("click", closeModal)

  // Get location
  getLocationBtn.addEventListener("click", getCurrentLocation)

  // Form submit
  orderForm.addEventListener("submit", handleSubmit)
}

function closeModal() {
  serviceModal.classList.remove("active")
  document.body.style.overflow = ""
  serviceSearch.value = ""
  renderServiceList()
}

function getCurrentLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation tidak didukung oleh browser Anda")
    return
  }

  getLocationBtn.innerHTML = `
    <svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="32"></circle>
    </svg>
    Mencari...
  `

  navigator.geolocation.getCurrentPosition(
    (position) => {
      currentLat = position.coords.latitude
      currentLng = position.coords.longitude
      map.setView([currentLat, currentLng], 17)
      document.getElementById("latitude").value = currentLat
      document.getElementById("longitude").value = currentLng

      getLocationBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2"></path>
        </svg>
        Lokasi Saat Ini
      `
    },
    (error) => {
      alert("Gagal mendapatkan lokasi: " + error.message)
      getLocationBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2"></path>
        </svg>
        Lokasi Saat Ini
      `
    },
  )
}

function renderServiceList(searchTerm = "") {
  let html = ""
  const search = searchTerm.toLowerCase()

  Object.entries(services).forEach(([category, data]) => {
    const filteredItems = data.items.filter((item) => item.name.toLowerCase().includes(search))

    if (filteredItems.length === 0) return

    html += `
      <div class="service-category">
        <div class="category-header">
          <span class="category-badge ${category}">${data.name}</span>
        </div>
        <div class="service-list">
          ${filteredItems
            .map((item) => {
              const isSelected = selectedServices.some((s) => s.id === item.id)
              return `
              <div class="service-item ${isSelected ? "selected" : ""}" data-id="${item.id}" data-category="${category}">
                <div class="service-checkbox">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div class="service-info">
                  <div class="service-name">${item.name}</div>
                  <div class="service-price">${formatCurrency(item.price)}</div>
                </div>
              </div>
            `
            })
            .join("")}
        </div>
      </div>
    `
  })

  if (!html) {
    html = `<div class="no-results">Tidak ada layanan yang ditemukan</div>`
  }

  serviceListContainer.innerHTML = html

  // Add click listeners
  document.querySelectorAll(".service-item").forEach((item) => {
    item.addEventListener("click", () => toggleService(item))
  })
}

function toggleService(element) {
  const id = element.dataset.id
  const category = element.dataset.category

  const existingIndex = selectedServices.findIndex((s) => s.id === id)

  if (existingIndex > -1) {
    selectedServices.splice(existingIndex, 1)
    element.classList.remove("selected")
  } else {
    const service = services[category].items.find((s) => s.id === id)
    selectedServices.push({ ...service, category })
    element.classList.add("selected")
  }

  updateSelectedServicesUI()
}

function updateSelectedServicesUI() {
  serviceCountBadge.textContent = selectedServices.length

  if (selectedServices.length === 0) {
    selectedServicesContainer.innerHTML = ""
    totalContainer.style.display = "none"
    return
  }

  const html = selectedServices
    .map(
      (service) => `
    <div class="service-card ${service.category}">
      <div class="service-card-info">
        <span class="service-card-category">${services[service.category].name}</span>
        <span class="service-card-name">${service.name}</span>
      </div>
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <span class="service-card-price">${formatCurrency(service.price)}</span>
        <button type="button" class="service-card-remove" data-id="${service.id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  `,
    )
    .join("")

  selectedServicesContainer.innerHTML = html

  // Add remove listeners
  document.querySelectorAll(".service-card-remove").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      const id = btn.dataset.id
      selectedServices = selectedServices.filter((s) => s.id !== id)
      renderServiceList(serviceSearch.value)
      updateSelectedServicesUI()
    })
  })

  // Update total
  const total = selectedServices.reduce((sum, s) => sum + s.price, 0)
  totalAmount.textContent = formatCurrency(total)
  totalContainer.style.display = "flex"
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount)
}

function handleSubmit(e) {
  e.preventDefault()

  if (selectedServices.length === 0) {
    alert("Silakan pilih minimal satu layanan")
    return
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
    layanan: selectedServices,
    total: selectedServices.reduce((sum, s) => sum + s.price, 0),
  }

  // Save to localStorage and redirect to checkout
  localStorage.setItem("heloklin_order", JSON.stringify(formData))
  window.location.href = "checkout.html"
}
