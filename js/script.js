// Hide loading indicator after iframe loads
window.addEventListener("DOMContentLoaded", function () {
  const iframe = document.getElementById("map-iframe");
  const loading = document.getElementById("loading");

  if (iframe && loading) {
    iframe.addEventListener("load", function () {
      setTimeout(() => {
        loading.classList.add("hidden");
      }, 500);
    });
  }
});

// // Define Sulawesi Tengah boundary coordinates
// // Batas: 0°12' LU hingga 3° LS dan 119°12' BT hingga 124° BT
// const sultengBoundary = [
//     [0.2, 119.2],      // Batas Utara-Barat
//     [0.2, 124.0],      // Batas Utara-Timur
//     [-3.0, 124.0],     // Batas Selatan-Timur
//     [-3.0, 119.2],     // Batas Selatan-Barat
//     [0.2, 119.2]       // Kembali ke titik awal
// ];

// // Add highlighted boundary for Sulawesi Tengah province
// const sultengPolygon = L.polygon(sultengBoundary, {
//     color: '#FF6B35',
//     weight: 4,
//     opacity: 0.8,
//     fillColor: '#FFA726',
//     fillOpacity: 0.15,
//     dashArray: '10, 5'
// }).addTo(map);

// // Add label for the province
// const provinceLabel = L.marker([-1.0, 121.5], {
//     icon: L.divIcon({
//         html: '<div style="background: rgba(255,107,53,0.9); color: white; padding: 8px 15px; border-radius: 20px; font-weight: bold; font-size: 14px; box-shadow: 0 2px 8px rgba(0,0,0,0.3); white-space: nowrap;">PROVINSI SULAWESI TENGAH</div>',
//         className: 'province-label',
//         iconSize: [200, 40],
//         iconAnchor: [100, 20]
//     })
// }).addTo(map);

// // Add popup to the boundary
// sultengPolygon.bindPopup(`
//     <div style="text-align: center; font-family: Arial;">
//         <h3 style="color: #FF6B35; margin: 5px 0;">Provinsi Sulawesi Tengah</h3>
//         <p style="margin: 5px 0;"><strong>Koordinat Geografis:</strong></p>
//         <p style="margin: 3px 0;">Lintang: 0°12' LU - 3° LS</p>
//         <p style="margin: 3px 0;">Bujur: 119°12' BT - 124° BT</p>
//         <hr style="margin: 8px 0;">
//         <p style="margin: 3px 0; font-size: 12px;">Batas Utara: Laut Sulawesi & Prov. Gorontalo</p>
//         <p style="margin: 3px 0; font-size: 12px;">Batas Selatan: Prov. Sulsel & Sultra</p>
//         <p style="margin: 3px 0; font-size: 12px;">Batas Timur: Prov. Maluku & Malut</p>
//         <p style="margin: 3px 0; font-size: 12px;">Batas Barat: Prov. Sulbar & Selat Makassar</p>
//     </div>
// `);

// // Hide loading indicator after map loads
// setTimeout(() => {
//     document.getElementById('loading').classList.add('hidden');
// }, 1500);

// // Layer groups for different data types
// const floodZonesLayer = L.layerGroup().addTo(map);
// const mitigationLayer = L.layerGroup().addTo(map);
// const facilitiesLayer = L.layerGroup().addTo(map);

// // Data: Wilayah Rawan Banjir di Sulawesi Tengah
// const floodZones = [
//     {
//         name: "Kota Palu",
//         lat: -0.8917,
//         lng: 119.8707,
//         risk: "high",
//         severity: "Tinggi - Sangat Rawan",
//         description: "Area dataran rendah dengan riwayat banjir bandang. Dekat dengan Sungai Palu yang sering meluap saat hujan deras.",
//         historicalData: "Banjir besar tahun 2018, 2020, dan 2023",
//         affectedPopulation: "~15,000 jiwa",
//         image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Kabupaten Donggala (Banawa)",
//         lat: -0.4242,
//         lng: 119.7442,
//         risk: "high",
//         severity: "Tinggi - Sangat Rawan",
//         description: "Wilayah pesisir dan dataran rendah yang rawan banjir rob dan luapan sungai. Infrastruktur drainase masih terbatas.",
//         historicalData: "Banjir rutin setiap musim hujan",
//         affectedPopulation: "~12,000 jiwa",
//         image: "https://images.unsplash.com/photo-1563381013529-1c922c00bb36?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Kabupaten Parigi Moutong (Parigi)",
//         lat: -0.8568,
//         lng: 120.7489,
//         risk: "medium",
//         severity: "Sedang",
//         description: "Area pertanian dengan sistem irigasi yang perlu perbaikan. Berpotensi banjir saat hujan lebat berkepanjangan.",
//         historicalData: "Banjir sedang tahun 2021 dan 2024",
//         affectedPopulation: "~8,000 jiwa",
//         image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Kabupaten Poso (Poso)",
//         lat: -1.3959,
//         lng: 120.7536,
//         risk: "medium",
//         severity: "Sedang",
//         description: "Wilayah sekitar Danau Poso dengan potensi luapan danau dan sungai saat musim hujan. Topografi berbukit dengan beberapa area dataran rendah rawan genangan.",
//         historicalData: "Banjir lokal tahun 2020 dan 2022",
//         affectedPopulation: "~7,500 jiwa",
//         image: "https://images.unsplash.com/photo-1563381013529-1c922c00bb36?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Kabupaten Morowali (Bungku)",
//         lat: -2.5309,
//         lng: 121.8855,
//         risk: "medium",
//         severity: "Sedang",
//         description: "Daerah perbukitan dengan beberapa titik rawan longsor dan genangan air saat musim hujan.",
//         historicalData: "Banjir lokal tahun 2022",
//         affectedPopulation: "~5,000 jiwa",
//         image: "https://images.unsplash.com/photo-1605187969579-d6b9b05e7db5?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Kabupaten Morowali Utara (Kolonodale)",
//         lat: -1.9000,
//         lng: 121.3500,
//         risk: "low",
//         severity: "Rendah",
//         description: "Wilayah pesisir utara dengan topografi bergelombang. Risiko banjir relatif rendah namun perlu waspada saat hujan ekstrem.",
//         historicalData: "Tidak ada banjir besar dalam 5 tahun terakhir",
//         affectedPopulation: "~3,000 jiwa",
//         image: "https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Kabupaten Tojo Una-Una (Ampana)",
//         lat: -1.0167,
//         lng: 121.6333,
//         risk: "low",
//         severity: "Rendah",
//         description: "Area dengan topografi relatif aman, namun tetap perlu kewaspadaan pada beberapa titik dekat aliran sungai kecil.",
//         historicalData: "Banjir ringan tahun 2023",
//         affectedPopulation: "~2,500 jiwa",
//         image: "https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Kabupaten Sigi (Sigi Biromaru)",
//         lat: -1.3317,
//         lng: 119.9817,
//         risk: "high",
//         severity: "Tinggi - Sangat Rawan",
//         description: "Wilayah lembah dengan intensitas curah hujan tinggi. Sungai Gumbasa sering meluap menggenangi pemukiman.",
//         historicalData: "Banjir besar tahun 2019 dan 2023",
//         affectedPopulation: "~10,000 jiwa",
//         image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Kabupaten Banggai (Luwuk)",
//         lat: -1.0383,
//         lng: 122.7939,
//         risk: "medium",
//         severity: "Sedang",
//         description: "Kawasan pesisir dengan risiko banjir rob dan luapan anak sungai pada musim hujan ekstrem.",
//         historicalData: "Banjir sedang tahun 2023",
//         affectedPopulation: "~6,500 jiwa",
//         image: "https://images.unsplash.com/photo-1592806088932-05058af0ad8d?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Kabupaten Banggai Kepulauan (Salakan)",
//         lat: -1.6500,
//         lng: 123.5000,
//         risk: "low",
//         severity: "Rendah",
//         description: "Wilayah kepulauan dengan risiko banjir rob minimal. Lebih fokus pada kesiapsiagaan banjir pasang laut.",
//         historicalData: "Tidak ada banjir signifikan",
//         affectedPopulation: "~1,500 jiwa",
//         image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Kabupaten Banggai Laut (Banggai)",
//         lat: -1.8167,
//         lng: 123.4833,
//         risk: "low",
//         severity: "Rendah",
//         description: "Pulau-pulau kecil dengan ancaman banjir terbatas, lebih rentan terhadap abrasi dan pasang tinggi.",
//         historicalData: "Tidak ada banjir besar",
//         affectedPopulation: "~1,000 jiwa",
//         image: "https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Kabupaten Tolitoli (Tolitoli)",
//         lat: 1.0639,
//         lng: 120.7928,
//         risk: "medium",
//         severity: "Sedang",
//         description: "Wilayah pesisir utara dengan dataran rendah rawan genangan saat intensitas hujan tinggi dan pasang laut.",
//         historicalData: "Banjir sedang tahun 2021",
//         affectedPopulation: "~5,500 jiwa",
//         image: "https://images.unsplash.com/photo-1605187969579-d6b9b05e7db5?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Kabupaten Buol (Buol)",
//         lat: 0.8986,
//         lng: 121.4019,
//         risk: "low",
//         severity: "Rendah",
//         description: "Area pesisir dengan topografi berbukit. Risiko banjir rendah namun perlu monitoring curah hujan.",
//         historicalData: "Tidak ada banjir besar dalam 10 tahun terakhir",
//         affectedPopulation: "~2,000 jiwa",
//         image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
//     }
// ];

// // Data: Lokasi Mitigasi Banjir
// const mitigationSites = [
//     {
//         name: "Tanggul Sungai Palu",
//         lat: -0.8800,
//         lng: 119.8600,
//         type: "Infrastruktur Pengendali Banjir",
//         description: "Tanggul pengaman sepanjang 2.5 km untuk mengendalikan luapan Sungai Palu. Dilengkapi dengan sistem pemantauan ketinggian air.",
//         capacity: "Menampung debit hingga 150 m³/detik",
//         status: "Operasional",
//         image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Waduk Gumbasa (Sigi)",
//         lat: -1.2850,
//         lng: 119.9500,
//         type: "Infrastruktur Pengendali Banjir",
//         description: "Waduk penampung air dengan kapasitas besar untuk mengontrol aliran air ke hilir dan mencegah banjir di Kabupaten Sigi.",
//         capacity: "Volume 15 juta m³",
//         status: "Operasional",
//         image: "https://images.unsplash.com/photo-1566218246009-95a2711a3d82?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Sistem Drainase Donggala",
//         lat: -0.4200,
//         lng: 119.7500,
//         type: "Infrastruktur Pengendali Banjir",
//         description: "Jaringan drainase modern untuk mengalirkan air hujan ke laut, mengurangi genangan di area pemukiman.",
//         capacity: "Melayani area 500 hektar",
//         status: "Dalam Perbaikan",
//         image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Pos Pemantauan Curah Hujan Parigi",
//         lat: -0.8400,
//         lng: 120.7300,
//         type: "Sistem Peringatan Dini",
//         description: "Stasiun cuaca otomatis untuk memantau intensitas hujan dan memberikan peringatan dini kepada masyarakat.",
//         capacity: "Radius pemantauan 50 km",
//         status: "Operasional",
//         image: "https://images.unsplash.com/photo-1534654432550-a0f0c34b0dd5?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Bendungan Pembatas Luwuk",
//         lat: -1.0300,
//         lng: 122.7850,
//         type: "Infrastruktur Pengendali Banjir",
//         description: "Bendungan untuk mengendalikan aliran sungai di Kabupaten Banggai dan mencegah banjir di area perkotaan Luwuk.",
//         capacity: "Menampung debit hingga 100 m³/detik",
//         status: "Operasional",
//         image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Sistem Peringatan Dini Poso",
//         lat: -1.3900,
//         lng: 120.7600,
//         type: "Sistem Peringatan Dini",
//         description: "Jaringan sensor untuk memantau ketinggian air Danau Poso dan sungai-sungai di sekitarnya dengan sistem alert otomatis.",
//         capacity: "Radius pemantauan 75 km",
//         status: "Operasional",
//         image: "https://images.unsplash.com/photo-1534654432550-a0f0c34b0dd5?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Pompa Air Tolitoli",
//         lat: 1.0600,
//         lng: 120.7850,
//         type: "Infrastruktur Pengendali Banjir",
//         description: "Sistem pompa untuk menyedot genangan air di dataran rendah Tolitoli dan mengalirkannya ke laut.",
//         capacity: "Kapasitas 50 m³/menit",
//         status: "Operasional",
//         image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=400&h=300&fit=crop"
//     }
// ];

// // Data: Fasilitas Umum (Rumah Sakit, Shelter, Pos Darurat)
// const publicFacilities = [
//     {
//         name: "RSUD Undata Palu",
//         lat: -0.9020,
//         lng: 119.8790,
//         type: "hospital",
//         category: "Rumah Sakit",
//         description: "Rumah sakit rujukan utama untuk penanganan korban bencana dengan kapasitas 250 tempat tidur dan fasilitas gawat darurat 24 jam.",
//         contact: "Telp: (0451) 421270",
//         image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Shelter Darurat SDN 1 Palu",
//         lat: -0.8850,
//         lng: 119.8650,
//         type: "shelter",
//         category: "Tempat Evakuasi",
//         description: "Lokasi evakuasi sementara dengan kapasitas 500 orang. Dilengkapi dapur umum, toilet, dan tenda darurat.",
//         capacity: "500 orang",
//         image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Pos Tanggap Darurat BPBD Sulteng",
//         lat: -0.8970,
//         lng: 119.8720,
//         type: "emergency",
//         category: "Pos Tanggap Darurat",
//         description: "Pusat komando penanganan bencana dengan tim siaga 24/7, ambulans, dan peralatan penyelamatan.",
//         contact: "Hotline: 0451-119",
//         image: "https://images.unsplash.com/photo-1582560469781-1965b9af903d?w=400&h=300&fit=crop"
//     },
//     {
//         name: "RS Anutapura Palu",
//         lat: -0.9100,
//         lng: 119.8900,
//         type: "hospital",
//         category: "Rumah Sakit",
//         description: "Rumah sakit swasta dengan fasilitas ICU dan ruang operasi untuk penanganan darurat medis.",
//         contact: "Telp: (0451) 482233",
//         image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Shelter Darurat GOR Donggala",
//         lat: -0.4180,
//         lng: 119.7400,
//         type: "shelter",
//         category: "Tempat Evakuasi",
//         description: "Gedung olahraga yang dijadikan tempat pengungsian dengan kapasitas 800 orang dan fasilitas lengkap.",
//         capacity: "800 orang",
//         image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Pos SAR Donggala",
//         lat: -0.4250,
//         lng: 119.7480,
//         type: "emergency",
//         category: "Pos Tanggap Darurat",
//         description: "Pos tim Search and Rescue untuk operasi penyelamatan korban bencana di wilayah pesisir.",
//         contact: "Telp: 115",
//         image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b1?w=400&h=300&fit=crop"
//     },
//     {
//         name: "RSUD Parigi",
//         lat: -0.8550,
//         lng: 120.7450,
//         type: "hospital",
//         category: "Rumah Sakit",
//         description: "Rumah sakit kabupaten dengan kapasitas 100 tempat tidur dan unit gawat darurat.",
//         contact: "Telp: (0461) 21015",
//         image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Shelter SMA Negeri 1 Sigi",
//         lat: -1.3300,
//         lng: 119.9850,
//         type: "shelter",
//         category: "Tempat Evakuasi",
//         description: "Sekolah yang dijadikan shelter evakuasi dengan kapasitas 400 orang. Lokasi strategis dan mudah diakses.",
//         capacity: "400 orang",
//         image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop"
//     },
//     {
//         name: "RSUD Poso",
//         lat: -1.3900,
//         lng: 120.7500,
//         type: "hospital",
//         category: "Rumah Sakit",
//         description: "Rumah sakit kabupaten yang melayani wilayah Poso dengan fasilitas gawat darurat dan rawat inap.",
//         contact: "Telp: (0452) 21118",
//         image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Shelter Stadion Poso",
//         lat: -1.3950,
//         lng: 120.7580,
//         type: "shelter",
//         category: "Tempat Evakuasi",
//         description: "Stadion yang dialokasikan sebagai tempat pengungsian darurat dengan kapasitas 1000 orang.",
//         capacity: "1000 orang",
//         image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop"
//     },
//     {
//         name: "RSUD Luwuk Banggai",
//         lat: -1.0350,
//         lng: 122.7900,
//         type: "hospital",
//         category: "Rumah Sakit",
//         description: "Rumah sakit rujukan Kabupaten Banggai dengan kapasitas 150 tempat tidur dan ICU.",
//         contact: "Telp: (0461) 21333",
//         image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Shelter SMK Negeri 1 Luwuk",
//         lat: -1.0400,
//         lng: 122.7950,
//         type: "shelter",
//         category: "Tempat Evakuasi",
//         description: "Sekolah menengah kejuruan yang dijadikan titik evakuasi dengan kapasitas 600 orang.",
//         capacity: "600 orang",
//         image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Pos BPBD Tolitoli",
//         lat: 1.0620,
//         lng: 120.7900,
//         type: "emergency",
//         category: "Pos Tanggap Darurat",
//         description: "Pos koordinasi bencana untuk wilayah Kabupaten Tolitoli dengan tim tanggap darurat siaga 24 jam.",
//         contact: "Hotline: (0453) 21119",
//         image: "https://images.unsplash.com/photo-1582560469781-1965b9af903d?w=400&h=300&fit=crop"
//     },
//     {
//         name: "RSUD Tolitoli",
//         lat: 1.0650,
//         lng: 120.7950,
//         type: "hospital",
//         category: "Rumah Sakit",
//         description: "Rumah sakit kabupaten dengan fasilitas penanganan darurat untuk korban bencana.",
//         contact: "Telp: (0453) 21001",
//         image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop"
//     },
//     {
//         name: "Shelter GOR Morowali",
//         lat: -2.5250,
//         lng: 121.8800,
//         type: "shelter",
//         category: "Tempat Evakuasi",
//         description: "Gedung olahraga sebagai tempat evakuasi darurat untuk wilayah Morowali dengan kapasitas 500 orang.",
//         capacity: "500 orang",
//         image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=400&h=300&fit=crop"
//     }
// ];

// // Custom icons
// const createCustomIcon = (color, symbol) => {
//     return L.divIcon({
//         html: `<div style="background-color: ${color}; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3); font-size: 16px;">${symbol}</div>`,
//         className: 'custom-icon',
//         iconSize: [30, 30],
//         iconAnchor: [15, 15]
//     });
// };

// // Function to create popup content with image
// const createPopupContent = (data, type) => {
//     let content = `<div class="popup-content">`;

//     if (type === 'flood') {
//         content += `
//             <h3>${data.name}</h3>
//             <img src="${data.image}" alt="${data.name}" onerror="this.src='https://via.placeholder.com/400x300?text=Gambar+Tidak+Tersedia'">
//             <p><strong>Tingkat Risiko:</strong> <span class="risk-badge risk-${data.risk}">${data.severity}</span></p>
//             <p><strong>Deskripsi:</strong> ${data.description}</p>
//             <p><strong>Riwayat:</strong> ${data.historicalData}</p>
//             <p><strong>Populasi Terdampak:</strong> ${data.affectedPopulation}</p>
//         `;
//     } else if (type === 'mitigation') {
//         content += `
//             <h3>🛡️ ${data.name}</h3>
//             <img src="${data.image}" alt="${data.name}" onerror="this.src='https://via.placeholder.com/400x300?text=Gambar+Tidak+Tersedia'">
//             <p><strong>Jenis:</strong> ${data.type}</p>
//             <p><strong>Deskripsi:</strong> ${data.description}</p>
//             <p><strong>Kapasitas:</strong> ${data.capacity}</p>
//             <p><strong>Status:</strong> ${data.status}</p>
//         `;
//     } else if (type === 'facility') {
//         content += `
//             <h3>${data.name}</h3>
//             <img src="${data.image}" alt="${data.name}" onerror="this.src='https://via.placeholder.com/400x300?text=Gambar+Tidak+Tersedia'">
//             <p><strong>Kategori:</strong> ${data.category}</p>
//             <p><strong>Deskripsi:</strong> ${data.description}</p>
//             ${data.capacity ? `<p><strong>Kapasitas:</strong> ${data.capacity}</p>` : ''}
//             ${data.contact ? `<p><strong>Kontak:</strong> ${data.contact}</p>` : ''}
//         `;
//     }

//     content += `</div>`;
//     return content;
// };

// // Add flood zones to map
// floodZones.forEach(zone => {
//     const color = zone.risk === 'high' ? '#ff0000' : zone.risk === 'medium' ? '#ff6600' : '#ffcc00';
//     const icon = createCustomIcon(color, '🌊');

//     const marker = L.marker([zone.lat, zone.lng], { icon: icon })
//         .bindPopup(createPopupContent(zone, 'flood'))
//         .addTo(floodZonesLayer);

//     // Add circle to show affected area
//     L.circle([zone.lat, zone.lng], {
//         color: color,
//         fillColor: color,
//         fillOpacity: 0.2,
//         radius: zone.risk === 'high' ? 8000 : zone.risk === 'medium' ? 5000 : 3000
//     }).addTo(floodZonesLayer);
// });

// // Add mitigation sites to map
// mitigationSites.forEach(site => {
//     const icon = createCustomIcon('#4CAF50', '🛡️');

//     L.marker([site.lat, site.lng], { icon: icon })
//         .bindPopup(createPopupContent(site, 'mitigation'))
//         .addTo(mitigationLayer);
// });

// // Add public facilities to map
// publicFacilities.forEach(facility => {
//     let symbol, color;

//     if (facility.type === 'hospital') {
//         symbol = '🏥';
//         color = '#e91e63';
//     } else if (facility.type === 'shelter') {
//         symbol = '🏫';
//         color = '#2196F3';
//     } else if (facility.type === 'emergency') {
//         symbol = '🚨';
//         color = '#FF5722';
//     }

//     const icon = createCustomIcon(color, symbol);

//     L.marker([facility.lat, facility.lng], { icon: icon })
//         .bindPopup(createPopupContent(facility, 'facility'))
//         .addTo(facilitiesLayer);
// });

// // Toggle layer visibility
// document.getElementById('toggle-flood-zones').addEventListener('change', (e) => {
//     if (e.target.checked) {
//         map.addLayer(floodZonesLayer);
//     } else {
//         map.removeLayer(floodZonesLayer);
//     }
// });

// document.getElementById('toggle-mitigation').addEventListener('change', (e) => {
//     if (e.target.checked) {
//         map.addLayer(mitigationLayer);
//     } else {
//         map.removeLayer(mitigationLayer);
//     }
// });

// document.getElementById('toggle-facilities').addEventListener('change', (e) => {
//     if (e.target.checked) {
//         map.addLayer(facilitiesLayer);
//     } else {
//         map.removeLayer(facilitiesLayer);
//     }
// });

// // Add scale control
// L.control.scale({
//     metric: true,
//     imperial: false,
//     position: 'bottomleft'
// }).addTo(map);

// // Set map view bounds for better initial display
// const sultengBounds = L.latLngBounds(
//     L.latLng(-3.2, 119.0),  // Southwest
//     L.latLng(0.5, 124.2)    // Northeast
// );

// // Fit map to Sulawesi Tengah bounds
// map.fitBounds(sultengBounds, { padding: [20, 20] });

// console.log('🗺️ Peta interaktif Sulawesi Tengah berhasil dimuat!');
// console.log('📍 Wilayah Provinsi Sulawesi Tengah di-highlight');
// console.log('🌊 Wilayah rawan banjir:', floodZones.length, 'lokasi');
// console.log('🛡️ Lokasi mitigasi:', mitigationSites.length, 'infrastruktur');
// console.log('🏥 Fasilitas umum:', publicFacilities.length, 'fasilitas');
