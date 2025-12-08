// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount)
}

// Format date
function formatDate(dateString) {
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString("id-ID", options)
}

// Get category name
const categoryNames = {
  helosleep: "HELOSLEEP",
  heloliving: "HELOLIVING",
  helobaby: "HELOBABY",
}

// Initialize checkout page
document.addEventListener("DOMContentLoaded", () => {
  const orderData = localStorage.getItem("heloklin_order")

  if (!orderData) {
    window.location.href = "index.html"
    return
  }

  const order = JSON.parse(orderData)

  // Populate data
  document.getElementById("checkoutNama").textContent = order.nama
  document.getElementById("checkoutTelepon").textContent = order.telepon
  document.getElementById("checkoutAlamat").textContent = order.alamat
  document.getElementById("checkoutKelurahan").textContent = order.kelurahan
  document.getElementById("checkoutKecamatan").textContent = order.kecamatan
  document.getElementById("checkoutKota").textContent = order.kota
  document.getElementById("checkoutTanggal").textContent = formatDate(order.tanggal)
  document.getElementById("checkoutWaktu").textContent = order.waktu
  document.getElementById("checkoutTotal").textContent = formatCurrency(order.total)

  // Render services
  const servicesContainer = document.getElementById("checkoutServices")
  servicesContainer.innerHTML = order.layanan
    .map(
      (service) => `
    <div class="checkout-service-item ${service.category}">
      <div class="service-item-info">
        <span class="service-item-category">${categoryNames[service.category]}</span>
        <span class="service-item-name">${service.name}</span>
      </div>
      <span class="service-item-price">${formatCurrency(service.price)}</span>
    </div>
  `,
    )
    .join("")

  // Initialize map
  if (order.latitude && order.longitude) {
    // Wait for Google Maps API to load
    const initMap = () => {
      try {
        if (typeof google === 'undefined' || !google.maps) {
          console.error("Google Maps library not loaded")
          return
        }

        const mapContainer = document.getElementById("checkoutMap")
        if (!mapContainer) {
          console.error("Map container not found")
          return
        }

        const position = { lat: order.latitude, lng: order.longitude }
        
        const map = new google.maps.Map(mapContainer, {
          center: position,
          zoom: 15,
          zoomControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          dragging: false,
          scrollwheel: false,
          disableDoubleClickZoom: true,
          gestureHandling: 'none',
        })

        new google.maps.Marker({
          position: position,
          map: map,
        })
        
        console.log("Google Maps initialized successfully")
      } catch (error) {
        console.error("Error initializing map:", error)
      }
    }
    
    // Start trying to initialize map after a delay
    setTimeout(initMap, 500)
  }

  // WhatsApp button
  document.getElementById("whatsappBtn").addEventListener("click", () => {
    const servicesText = order.layanan.map((s) => `- ${s.name} (${formatCurrency(s.price)})`).join("\n")

    const message = `*PESANAN HELOKLIN*
    
*Data Diri*
Nama: ${order.nama}
Telepon: ${order.telepon}

*Alamat*
${order.alamat}
${order.kelurahan}, ${order.kecamatan}
${order.kota}
Lokasi: https://www.google.com/maps?q=${order.latitude},${order.longitude}

*Jadwal Kunjungan*
Tanggal: ${formatDate(order.tanggal)}
Waktu: ${order.waktu}

*Rincian Layanan*
${servicesText}

*Total: ${formatCurrency(order.total)}*`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/6289604222829?text=${encodedMessage}`, "_blank")
  })

  // Edit button
  document.getElementById("editBtn").addEventListener("click", () => {
    window.location.href = "index.html?edit=true"
  })
})
