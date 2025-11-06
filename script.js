// Membuat peta dengan lokasi pusat di Monas, Jakarta
// Format: L.map('id-element').setView([latitude, longitude], zoom-level)
var map = L.map('map').setView([-6.1751, 106.8650], 13); // Pusatkan di Jakarta

// Menambahkan tilelayer dari OpenStreetMap (gratis dan open-source)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19, // Angka maksimal zoom (19 sudah cukup)
  attribution: '© OpenStreetMap' // Hak cipta ke penyedia peta
}).addTo(map); // Tambahkan layer peta ke objek map

// Menambahkan marker pada Monas
var marker = L.marker([-6.1751, 106.8650]).addTo(map);

// Tambahkan popup (balon info) pada marker
marker.bindPopup("<b>Monas</b><br>Ikon Jakarta.").openPopup();
