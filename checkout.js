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
  // Estimated time
  const formatMinutes = (m) => {
    const h = Math.floor(m / 60)
    const min = m % 60
    if (h > 0 && min > 0) return `${h} jam ${min} menit`
    if (h > 0) return `${h} jam`
    return `${min} menit`
  }
  document.getElementById("checkoutEstimasi").textContent = formatMinutes(order.totalEstimatedMinutes || 0)

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
    const map = window.L.map("checkoutMap", {
      center: [order.latitude, order.longitude],
      zoom: 15,
      zoomControl: false,
      dragging: false,
      scrollWheelZoom: false,
    })

    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map)

    window.L.marker([order.latitude, order.longitude]).addTo(map)
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
