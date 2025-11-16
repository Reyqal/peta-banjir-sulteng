// Koordinat pusat untuk setiap kabupaten/kota di Sulawesi Tengah
var regionCoordinates = {
  "Kota Palu": { lat: -0.8917, lng: 119.8707, zoom: 11 },
  Sigi: { lat: -1.3317, lng: 119.9817, zoom: 10 },
  Donggala: { lat: -0.4242, lng: 119.7442, zoom: 10 },
  "Parigi Moutong": { lat: -0.8568, lng: 120.7489, zoom: 10 },
  Poso: { lat: -1.3959, lng: 120.7536, zoom: 10 },
  "Toli Toli": { lat: 1.0639, lng: 120.7928, zoom: 10 },
  Banggai: { lat: -1.0383, lng: 122.7939, zoom: 9 },
  Morowali: { lat: -2.5309, lng: 121.8855, zoom: 9 },
  Buol: { lat: 0.8986, lng: 121.4019, zoom: 10 },
  "Morowali Utara": { lat: -1.9, lng: 121.35, zoom: 10 },
  "Tojo Una Una": { lat: -1.0167, lng: 121.6333, zoom: 10 },
  "Banggai Kepulauan": { lat: -1.65, lng: 123.5, zoom: 9 },
  "Banggai Laut": { lat: -1.8167, lng: 123.4833, zoom: 10 },
};

// Tunggu hingga DOM dan map selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Tunggu sampai map benar-benar tersedia
  var checkMapInterval = setInterval(function () {
    if (typeof map !== "undefined" && map) {
      clearInterval(checkMapInterval);
      initializeRegionButtons();
    }
  }, 100);

  function initializeRegionButtons() {
    // Dapatkan semua tombol region
    var regionButtons = document.querySelectorAll(".region-btn");

    regionButtons.forEach(function (button) {
      button.addEventListener("click", function (e) {
        // Prevent default button behavior
        e.preventDefault();
        e.stopPropagation();

        var regionName = this.getAttribute("data-region");
        var coords = regionCoordinates[regionName];

        if (coords) {
          try {
            // Akses map langsung (bukan dari iframe)
            if (typeof map !== "undefined" && map) {
              // Zoom ke koordinat yang ditentukan
              map.setView([coords.lat, coords.lng], coords.zoom);

              // Highlight tombol yang aktif
              regionButtons.forEach(function (btn) {
                btn.style.background = "white";
              });
              this.style.background = "#e3f2fd";

              // Scroll ke peta
              var mapContainer = document.querySelector(".map-container");
              if (mapContainer) {
                mapContainer.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                });
              }

              console.log("Navigasi ke " + regionName);
            } else {
              console.log("Map belum tersedia");
            }
          } catch (error) {
            console.error("Error saat navigasi:", error);
          }
        } else {
          console.log("Koordinat tidak ditemukan untuk " + regionName);
        }
      });
    });

    console.log("Navigasi region berhasil diinisialisasi");
  }
});
