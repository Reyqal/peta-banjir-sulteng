// Data informasi banjir untuk setiap kabupaten/kota di Sulawesi Tengah
var floodData = {
  Banggai: {
    tingkatRisiko: "Sedang",
    frekuensiBanjir: "1-18 kali per 3 tahun",
    wilayahTerdampak: "Luwuk, Batui, Banggai Utara",
    korban: ["Korban Jiwa: 1 Orang", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: 3.631 Orang"],
    rumahRusak: ["Rumah Rusak Berat: 52 Rumah", "Rumah Rusak Sedang: 54 Rumah", "Rumah Rusak Ringan: 141 Rumah"],
    deskripsi:
      "Banjir sering terjadi di kawasan pesisir dan dataran rendah, terutama saat musim hujan panjang dan pasang laut tinggi.",
    mitigasi: "Normalisasi sungai, pembuatan tanggul, early warning system",
    imageUrl : "img/bangai.jpg"
  },
  "Banggai Kepulauan": {
    tingkatRisiko: "Rendah",
    frekuensiBanjir: "1-8 kali per 3 tahun",
    wilayahTerdampak: "Salakan, Labobo",
    korban: ["Korban Jiwa: Tidak Ada", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: 191"],
    rumahRusak: ["Rumah Rusak Berat: Tidak Ada", "Rumah Rusak Sedang: Tidak Ada", "Rumah Rusak Ringan: Tidak Ada"],
    deskripsi:
      "Banjir rob dan pasang laut tinggi sesekali menggenangi wilayah pesisir. Risiko banjir bandang sangat rendah karena topografi kepulauan.",
    mitigasi: "Tanaman mangrove, peninggian jalan pesisir, sistem drainase",
    imageUrl : "img/bangai_kepulauan.jpg"
  },
  "Banggai Laut": {
    tingkatRisiko: "Rendah",
    frekuensiBanjir: "0-3 kali per 3 tahun",
    wilayahTerdampak: "Banggai, Tinangkung",
    korban: ["Korban Jiwa: Tidak Ada", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: 4"],
    rumahRusak: ["Rumah Rusak Berat: Tidak Ada", "Rumah Rusak Sedang: Tidak Ada", "Rumah Rusak Ringan: Tidak Ada"],
    deskripsi:
      "Wilayah kepulauan dengan ancaman terbatas. Lebih rentan terhadap abrasi dan banjir rob daripada banjir sungai.",
    mitigasi: "Pemecah ombak, penanaman mangrove, sistem drainase pesisir",
    imageUrl : "img/bangai_laut.jpeg"
  },
  Buol: {
    tingkatRisiko: "Rendah",
    frekuensiBanjir: "2-8 kali per 3 tahun",
    wilayahTerdampak: "Buol Kota, Momunu",
    korban: ["Korban Jiwa: 1", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: 16.603"],
    rumahRusak: ["Rumah Rusak Berat: 8 Rumah", "Rumah Rusak Sedang: 7 Rumah", "Rumah Rusak Ringan: 7 Rumah"],
    deskripsi:
      "Area pesisir dengan topografi berbukit. Banjir lokal terjadi di beberapa titik rendah saat hujan ekstrem.",
    mitigasi: "Pembangunan drainase, reboisasi, pemantauan curah hujan",
    imageUrl : "img/buol.jpg"
  },
  Donggala: {
    tingkatRisiko: "Tinggi",
    frekuensiBanjir: "5-7 kali per 3 tahun",
    wilayahTerdampak: "Banawa, Donggala Kota, Sirenja",
    korban: ["Korban Jiwa: Tidak ada", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: 5.362"],
    rumahRusak: ["Rumah Rusak Berat: 7 Rumah", "Rumah Rusak Sedang: 5 Rumah", "Rumah Rusak Ringan: 1 Rumah"],
    imageUrl: "img/donggala.jpg",
    deskripsi:
      "Wilayah pesisir dan dataran rendah sangat rawan banjir. Infrastruktur drainase terbatas dan sungai-sungai sering meluap saat musim hujan.",
    mitigasi:
      "Pembangunan tanggul, normalisasi 5 sungai utama, sistem pompa air, early warning"
  },
  "Kota Palu": {
    tingkatRisiko: "Sangat Tinggi",
    frekuensiBanjir: "3-5 kali per 3 tahun",
    wilayahTerdampak: "Palu Barat, Palu Timur, Palu Utara, Tatanga, Tawaeli",
    korban: ["Korban Jiwa: Tidak ada", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: 6.194"],
    rumahRusak: ["Rumah Rusak Berat: Tidak Ada", "Rumah Rusak Sedang: Tidak Ada", "Rumah Rusak Ringan: Tidak Ada"],
    imageUrl: "img/palu.jpg",
    deskripsi:
      "Ibukota provinsi dengan intensitas banjir tertinggi. Sungai Palu yang meluap adalah penyebab utama, ditambah drainase kota yang kurang memadai dan perubahan tata guna lahan.",
    mitigasi:
      "Tanggul Sungai Palu 2.5 km, pompa air otomatis, 10 pos pemantauan, sistem peringatan dini SMS, normalisasi anak sungai"
  },
  Morowali: {
    tingkatRisiko: "Sedang",
    frekuensiBanjir: "1-8 kali per 3 tahun",
    wilayahTerdampak: "Bungku, Bahodopi, Petasia",
    korban: ["Korban Jiwa: Tidak ada", "Korban Luka-luka: 1 ", "Korban Mengungsi: 700"],
    rumahRusak: ["Rumah Rusak Berat: Tidak Ada", "Rumah Rusak Sedang: 7 Rumah", "Rumah Rusak Ringan: 16 Rumah"],
    deskripsi:
      "Daerah perbukitan dengan beberapa titik rawan longsor dan genangan. Banjir bandang dapat terjadi di lembah-lembah sungai saat hujan lebat.",
    mitigasi:
      "Reboisasi hutan lindung, pembangunan check dam, sistem peringatan dini longsor",
    imageUrl : "img/mororwali.jpg"
  },
  "Morowali Utara": {
    tingkatRisiko: "Rendah",
    frekuensiBanjir: "2-3 kali per tahun",
    wilayahTerdampak: "Kolonodale, Petasia Timur",
    korban: ["Korban Jiwa: Tidak Ada", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: Tidak Ada"],
    rumahRusak: ["Rumah Rusak Berat: Tidak Ada", "Rumah Rusak Sedang: Tidak Ada", "Rumah Rusak Ringan: Tidak Ada"],
    deskripsi:
      "Wilayah pesisir utara dengan topografi bergelombang. Risiko banjir relatif rendah namun perlu waspada saat hujan ekstrem berkepanjangan.",
    mitigasi: "Sistem drainase alami, pemantauan cuaca, jalur evakuasi",
    imageUrl : "img/morowali_utara.jpg"
  },
  "Parigi Moutong": {
    tingkatRisiko: "Sedang",
    frekuensiBanjir: "5-7 kali per tahun",
    wilayahTerdampak: "Parigi, Kasimbar, Tinombo",
    korban: ["Korban Jiwa: 2 Orang", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: Tidak Ada"],
    rumahRusak: ["Rumah Rusak Berat: Tidak Ada", "Rumah Rusak Sedang: Tidak Ada", "Rumah Rusak Ringan: Tidak Ada"],
    deskripsi:
      "Area pertanian dengan sistem irigasi yang perlu perbaikan. Berpotensi banjir saat hujan lebat berkepanjangan dan luapan sungai-sungai di DAS Parigi.",
    mitigasi:
      "Perbaikan sistem irigasi, waduk penampung, pos curah hujan otomatis",
    imageUrl : "img/parigi_moutong.jpeg"
  },
  Poso: {
    tingkatRisiko: "Sedang",
    frekuensiBanjir: "4-6 kali per tahun",
    wilayahTerdampak: "Poso Kota, Lage, Pamona",
    korban: ["Korban Jiwa: 1 Orang", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: Tidak Ada"],
    rumahRusak: ["Rumah Rusak Berat: Tidak Ada", "Rumah Rusak Sedang: Tidak Ada", "Rumah Rusak Ringan: Tidak Ada"],
    deskripsi:
      "Wilayah sekitar Danau Poso dengan potensi luapan danau dan sungai. Topografi berbukit dengan beberapa area dataran rendah rawan genangan.",
    mitigasi:
      "Sistem pemantauan ketinggian Danau Poso, normalisasi outlet danau, early warning SMS",
    imageUrl : "img/poso.jpeg"
  },
  Sigi: {
    tingkatRisiko: "Sangat Tinggi",
    frekuensiBanjir: "7-10 kali per tahun",
    wilayahTerdampak: "Sigi Biromaru, Palolo, Dolo",
    korban: ["Korban Jiwa: 4 Orang", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: Tidak Ada"],
    rumahRusak: ["Rumah Rusak Berat: Tidak Ada", "Rumah Rusak Sedang: Tidak Ada", "Rumah Rusak Ringan: Tidak Ada"],
    deskripsi:
      "Wilayah lembah dengan intensitas curah hujan sangat tinggi. Sungai Gumbasa dan Lariang sering meluap menggenangi pemukiman dan lahan pertanian.",
    mitigasi:
      "Waduk Gumbasa (15 juta m³), tanggul pengaman 3 km, 8 pos pemantauan, jalur evakuasi",
    imageUrl: "img/kab_sigi.jpg"
  },
  "Tojo Una Una": {
    tingkatRisiko: "Rendah",
    frekuensiBanjir: "2-4 kali per tahun",
    wilayahTerdampak: "Ampana, Una-Una, Togean",
    korban: ["Korban Jiwa: Tidak Ada", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: Tidak Ada"],
    rumahRusak: ["Rumah Rusak Berat: Tidak Ada", "Rumah Rusak Sedang: Tidak Ada", "Rumah Rusak Ringan: Tidak Ada"],
    deskripsi:
      "Area dengan topografi relatif aman. Banjir lokal terjadi pada beberapa titik dekat aliran sungai kecil dan wilayah pesisir saat pasang tinggi.",
    mitigasi: "Drainase alami, pemeliharaan DAS, sistem informasi cuaca",
    imageUrl : "img/banjir_tojo_una_una.jpg"
  },
  "Toli Toli": {
    tingkatRisiko: "Sedang",
    frekuensiBanjir: "4-5 kali per tahun",
    wilayahTerdampak: "Tolitoli Kota, Baolan, Galang",
    korban: ["Korban Jiwa: 1 Orang", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: Tidak Ada"],
    rumahRusak: ["Rumah Rusak Berat: Tidak Ada", "Rumah Rusak Sedang: Tidak Ada", "Rumah Rusak Ringan: Tidak Ada"],
    deskripsi:
      "Wilayah pesisir utara dengan dataran rendah rawan genangan saat intensitas hujan tinggi dan pasang laut. Kombinasi banjir sungai dan rob memperbesar dampak.",
    mitigasi:
      "Tanggul pesisir, pompa air 50 m³/menit, normalisasi sungai, early warning",
    imageUrl : "img/toli-toli.jpg"
  },
};

// Fungsi untuk mendapatkan warna badge berdasarkan tingkat risiko
function getRiskColor(risk) {
  switch (risk.toLowerCase()) {
    case "sangat tinggi":
      return "#d32f2f";
    case "tinggi":
      return "#f57c00";
    case "sedang":
      return "#fbc02d";
    case "rendah":
      return "#388e3c";
    default:
      return "#757575";
  }
}

// Fungsi untuk mendapatkan emoji berdasarkan tingkat risiko
function getRiskEmoji(risk) {
  switch (risk.toLowerCase()) {
    case "sangat tinggi":
      return "🚨";
    case "tinggi":
      return "⚠️";
    case "sedang":
      return "⚡";
    case "rendah":
      return "✅";
    default:
      return "ℹ️";
  }
}
