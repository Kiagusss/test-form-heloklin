// Data layanan (disalin dari order.js agar kalkulator bisa berdiri sendiri)
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
        included: ["Vakum kasur", "Pembersihan permukaan", "Penghilang tungau dasar"],
      },
      {
        id: "hsp2",
        name: "Premium Plus",
        description: "Cleaning paket menengah dengan proteksi tambahan",
        price: 200000,
        duration: 60,
        included: ["Vakum kasur", "Pembersihan permukaan", "Penghilang tungau", "Proteksi antimikroba"],
      },
      {
        id: "hsp3",
        name: "Ultimate",
        description: "Cleaning lengkap untuk 2-3 tempat tidur",
        price: 280000,
        duration: 90,
        included: [
          "Vakum kasur",
          "Pembersihan mendalam",
          "Penghilang tungau profesional",
          "Proteksi antimikroba",
          "Penghilang noda",
        ],
      },
      {
        id: "hsp4",
        name: "Ultimate Plus",
        description: "Paket premium lengkap dengan hasil maksimal",
        price: 380000,
        duration: 120,
        included: [
          "Vakum kasur profesional",
          "Pembersihan mendalam",
          "Penghilang tungau profesional",
          "Proteksi antimikroba premium",
          "Penghilang noda",
          "Parfum kasur",
          "Inspeksi kesehatan tidur",
        ],
      },
    ],
    addons: [
      { id: "hsao1", name: "Bantal", price: 15000, duration: 10 },
      { id: "hsao2", name: "Guling", price: 15000, duration: 10 },
      { id: "hsao3", name: "Bantal Sofa", price: 15000, duration: 10 },
      { id: "hsao4", name: "Selimut", price: 20000, duration: 15 },
      { id: "hsao5", name: "Bed Cover", price: 25000, duration: 15 },
      { id: "hsao6", name: "Topper", price: 30000, duration: 20 },
    ],
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
          { name: "Karpet Besar", price: 140000, duration: 55 },
        ],
        included: ["Vakum standar", "Pembersihan permukaan", "Penghilang debu"],
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
          { name: "Karpet Besar", price: 200000, duration: 75 },
        ],
        included: ["Deep vacuum", "Pembersihan mendalam", "Penghilang noda", "Proteksi fabric"],
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
          { name: "Karpet Besar", price: 280000, duration: 90 },
        ],
        included: [
          "Teknologi Aureva",
          "Deep vacuum profesional",
          "Stain removal expert",
          "Proteksi antimikroba premium",
          "Parfum furniture",
          "UV sterilization",
        ],
      },
    ],
    addons: {
      premium: [
        { id: "hlao_p1", name: "Bantal Sofa Kecil", price: 15000, duration: 10 },
        { id: "hlao_p2", name: "Bantal Sofa Sedang", price: 20000, duration: 12 },
        { id: "hlao_p3", name: "Cushion", price: 15000, duration: 10 },
      ],
      ultimate: [
        { id: "hlao_u1", name: "Bantal Sofa Kecil", price: 20000, duration: 12 },
        { id: "hlao_u2", name: "Bantal Sofa Sedang", price: 25000, duration: 15 },
        { id: "hlao_u3", name: "Cushion", price: 20000, duration: 12 },
        { id: "hlao_u4", name: "Ottoman", price: 50000, duration: 25 },
        { id: "hlao_u5", name: "Pouffe", price: 40000, duration: 20 },
      ],
      aureva: [
        { id: "hlao_a1", name: "Bantal Sofa Kecil", price: 25000, duration: 15 },
        { id: "hlao_a2", name: "Bantal Sofa Sedang", price: 35000, duration: 18 },
        { id: "hlao_a3", name: "Cushion", price: 25000, duration: 15 },
        { id: "hlao_a4", name: "Ottoman", price: 70000, duration: 30 },
        { id: "hlao_a5", name: "Pouffe", price: 55000, duration: 25 },
        { id: "hlao_a6", name: "Rug Premium", price: 100000, duration: 40 },
      ],
    },
  },
};

const state = {
  hsPackageId: null,
  hsAddonIds: new Set(),
  hlPackageIds: new Set(),
  hlItemIds: new Set(), // format: `${packageId}:item:${idx}`
  hlAddonIds: new Set(), // format: `${packageId}:addon:${addon.id}`
};

function formatCurrency(value) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
    .format(value)
    .replace(",00", "");
}

function $(id) {
  return document.getElementById(id);
}

function render() {
  renderHelosleep();
  renderHeloliving();
  updateSummary();
}

function renderHelosleep() {
  const hsPackages = $("hsPackages");
  const hsAddons = $("hsAddons");

  hsPackages.innerHTML = services.helosleep.packages
    .map((pkg) => {
      const checked = state.hsPackageId === pkg.id;
      return `
        <label class="p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:border-blue-400 hover:bg-slate-50 ${
          checked ? "border-blue-500 bg-blue-50" : "border-slate-200"
        }">
          <div class="flex items-start justify-between gap-4">
            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <input type="radio" name="hsPackage" value="${pkg.id}" ${checked ? "checked" : ""} />
                <div class="font-semibold text-slate-800">${pkg.name}</div>
              </div>
              <div class="text-xs text-slate-500 mt-1">${pkg.description}</div>
              <div class="text-xs text-slate-600 mt-2 space-y-1">
                ${pkg.included.map((x) => `<div>• ${x}</div>`).join("")}
              </div>
            </div>
            <div class="text-right">
              <div class="text-lg font-bold text-blue-600">${formatCurrency(pkg.price)}</div>
              <div class="text-xs text-slate-500">${pkg.duration} menit</div>
            </div>
          </div>
        </label>
      `;
    })
    .join("");

  hsAddons.innerHTML = services.helosleep.addons
    .map((addon) => {
      const checked = state.hsAddonIds.has(addon.id);
      return `
        <label class="flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:border-amber-400 hover:bg-slate-50 ${
          checked ? "border-amber-500 bg-amber-50" : "border-slate-200"
        }">
          <input type="checkbox" value="${addon.id}" ${checked ? "checked" : ""} />
          <div class="flex-1 min-w-0">
            <div class="font-medium text-sm text-slate-800">${addon.name}</div>
            <div class="text-xs text-slate-500 font-medium">${formatCurrency(addon.price)} • ${addon.duration} menit</div>
          </div>
        </label>
      `;
    })
    .join("");
}

function renderHeloliving() {
  const hlPackages = $("hlPackages");

  hlPackages.innerHTML = services.heloliving.packages
    .map((pkg) => {
      const selected = state.hlPackageIds.has(pkg.id);
      const tierKey = pkg.name.toLowerCase();
      const tierAddons = services.heloliving.addons[tierKey] || [];

      const itemsHtml = selected
        ? `
          <div class="mt-3 pt-3 border-t border-slate-200">
            <div class="text-xs font-semibold text-slate-700 mb-2">Pilih item yang ingin dibersihkan:</div>
            <div class="space-y-2">
              ${pkg.items
                .map((item, idx) => {
                  const itemId = `${pkg.id}:item:${idx}`;
                  const checked = state.hlItemIds.has(itemId);
                  return `
                    <label class="flex items-center justify-between gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:border-green-400 hover:bg-slate-50 ${
                      checked ? "border-green-500 bg-green-50" : "border-slate-200"
                    }">
                      <div class="flex items-center gap-3 min-w-0">
                        <input type="checkbox" value="${itemId}" ${checked ? "checked" : ""} />
                        <div class="text-sm text-slate-800 truncate">Paket ${pkg.name} • ${item.name}</div>
                      </div>
                      <div class="text-right">
                        <div class="text-sm font-semibold text-slate-700">${formatCurrency(item.price)}</div>
                        <div class="text-xs text-slate-500">${item.duration} menit</div>
                      </div>
                    </label>
                  `;
                })
                .join("")}
            </div>

            <div class="mt-4">
              <div class="flex items-center gap-3 mb-3">
                <span class="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-700">Add-ons</span>
              </div>
              <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
                ${tierAddons
                  .map((addon) => {
                    const addonId = `${pkg.id}:addon:${addon.id}`;
                    const checked = state.hlAddonIds.has(addonId);
                    return `
                      <label class="flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:border-amber-400 hover:bg-slate-50 ${
                        checked ? "border-amber-500 bg-amber-50" : "border-slate-200"
                      }">
                        <input type="checkbox" value="${addonId}" ${checked ? "checked" : ""} />
                        <div class="flex-1 min-w-0">
                          <div class="font-medium text-sm text-slate-800">${addon.name}</div>
                          <div class="text-xs text-slate-500 font-medium">${formatCurrency(addon.price)} • ${addon.duration} menit</div>
                        </div>
                      </label>
                    `;
                  })
                  .join("")}
              </div>
            </div>
          </div>
        `
        : "";

      return `
        <div class="p-4 border-2 rounded-xl transition-all duration-200 ${
          selected ? "border-blue-500 bg-blue-50" : "border-slate-200"
        }">
          <div class="flex items-start justify-between gap-4">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" value="${pkg.id}" ${selected ? "checked" : ""} />
              <div>
                <div class="font-semibold text-slate-800">${pkg.name}</div>
                <div class="text-xs text-slate-500 mt-1">${pkg.description}</div>
              </div>
            </label>
            <div class="text-right text-xs text-slate-500">
              <div class="font-semibold text-slate-700">Paket tanpa biaya tetap</div>
              <div>Pilih item untuk menghitung</div>
            </div>
          </div>
          ${itemsHtml}
        </div>
      `;
    })
    .join("");
}

function attachHandlers() {
  document.addEventListener("change", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLInputElement)) return;

    if (target.name === "hsPackage") {
      state.hsPackageId = target.value;
      updateSummary();
      return;
    }

    // HELOSLEEP addons
    if (target.type === "checkbox" && target.closest("#hsAddons")) {
      if (target.checked) state.hsAddonIds.add(target.value);
      else state.hsAddonIds.delete(target.value);
      updateSummary();
      return;
    }

    // HELOLIVING package toggle
    if (target.type === "checkbox" && target.closest("#hlPackages") && !target.value.includes(":")) {
      const pkgId = target.value;
      if (target.checked) state.hlPackageIds.add(pkgId);
      else {
        state.hlPackageIds.delete(pkgId);
        // bersihkan item & addon yg terkait paket tsb
        [...state.hlItemIds].forEach((id) => {
          if (id.startsWith(`${pkgId}:item:`)) state.hlItemIds.delete(id);
        });
        [...state.hlAddonIds].forEach((id) => {
          if (id.startsWith(`${pkgId}:addon:`)) state.hlAddonIds.delete(id);
        });
      }
      render();
      return;
    }

    // HELOLIVING items
    if (target.type === "checkbox" && target.value.includes(":item:")) {
      if (target.checked) state.hlItemIds.add(target.value);
      else state.hlItemIds.delete(target.value);
      updateSummary();
      return;
    }

    // HELOLIVING addons
    if (target.type === "checkbox" && target.value.includes(":addon:")) {
      if (target.checked) state.hlAddonIds.add(target.value);
      else state.hlAddonIds.delete(target.value);
      updateSummary();
    }
  });

  $("resetBtn").addEventListener("click", () => {
    state.hsPackageId = null;
    state.hsAddonIds.clear();
    state.hlPackageIds.clear();
    state.hlItemIds.clear();
    state.hlAddonIds.clear();
    render();
  });
}

function updateSummary() {
  let totalPrice = 0;
  let totalDuration = 0;
  const breakdownLines = [];

  // HELOSLEEP
  if (state.hsPackageId) {
    const pkg = services.helosleep.packages.find((p) => p.id === state.hsPackageId);
    if (pkg) {
      totalPrice += pkg.price;
      totalDuration += pkg.duration;
      breakdownLines.push(`HELOSLEEP • Paket ${pkg.name}: ${formatCurrency(pkg.price)} • ${pkg.duration} menit`);
    }
  }

  for (const addonId of state.hsAddonIds) {
    const addon = services.helosleep.addons.find((a) => a.id === addonId);
    if (!addon) continue;
    totalPrice += addon.price;
    totalDuration += addon.duration;
    breakdownLines.push(`HELOSLEEP • Add-on ${addon.name}: ${formatCurrency(addon.price)} • ${addon.duration} menit`);
  }

  // HELOLIVING items
  for (const itemId of state.hlItemIds) {
    const [pkgId, , idxStr] = itemId.split(":");
    const pkg = services.heloliving.packages.find((p) => p.id === pkgId);
    const idx = Number(idxStr);
    const item = pkg?.items?.[idx];
    if (!pkg || !item) continue;
    totalPrice += item.price;
    totalDuration += item.duration;
    breakdownLines.push(`HELOLIVING • Paket ${pkg.name} • ${item.name}: ${formatCurrency(item.price)} • ${item.duration} menit`);
  }

  // HELOLIVING addons
  for (const addonId of state.hlAddonIds) {
    const [pkgId, , baseId] = addonId.split(":");
    const pkg = services.heloliving.packages.find((p) => p.id === pkgId);
    if (!pkg) continue;
    const tierKey = pkg.name.toLowerCase();
    const addon = (services.heloliving.addons[tierKey] || []).find((a) => a.id === baseId);
    if (!addon) continue;
    totalPrice += addon.price;
    totalDuration += addon.duration;
    breakdownLines.push(`HELOLIVING • Paket ${pkg.name} • Add-on ${addon.name}: ${formatCurrency(addon.price)} • ${addon.duration} menit`);
  }

  $("totalPrice").textContent = formatCurrency(totalPrice);
  $("totalDuration").textContent = `${totalDuration} menit`;

  const breakdown = $("breakdown");
  if (breakdownLines.length === 0) {
    breakdown.innerHTML = `<div class="text-slate-500">Belum ada pilihan.</div>`;
  } else {
    breakdown.innerHTML = breakdownLines.map((x) => `<div>• ${x}</div>`).join("");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  render();
  attachHandlers();
});
