// Data informasi banjir untuk setiap kabupaten/kota di Sulawesi Tengah
var floodData = {
  Banggai: {
    tingkatRisiko: "Sedang",
    frekuensiBanjir: "3-5 kali per tahun",
    kejadianTerakhir: "Februari 2024",
    wilayahTerdampak: "Luwuk, Batui, Banggai Utara",
    korbanJiwa: "2 orang (2023)",
    kerugianMaterial: "Rp 15 Miliar",
    rumahTerendam: "~850 rumah",
    deskripsi:
      "Banjir sering terjadi di kawasan pesisir dan dataran rendah, terutama saat musim hujan panjang dan pasang laut tinggi.",
    mitigasi: "Normalisasi sungai, pembuatan tanggul, early warning system",
    imageUrl : "img/bangai.jpg",
    riwayat: [
      { tahun: 2024, bulan: "Februari", tinggi: "80 cm", durasi: "3 hari" },
      { tahun: 2023, bulan: "Desember", tinggi: "120 cm", durasi: "4 hari" },
      { tahun: 2023, bulan: "April", tinggi: "60 cm", durasi: "2 hari" },
      { tahun: 2022, bulan: "November", tinggi: "90 cm", durasi: "3 hari" },
    ],
  },
  "Banggai Kepulauan": {
    tingkatRisiko: "Rendah",
    frekuensiBanjir: "1-2 kali per tahun",
    kejadianTerakhir: "Maret 2023",
    wilayahTerdampak: "Salakan, Labobo",
    korbanJiwa: "Tidak ada",
    kerugianMaterial: "Rp 2 Miliar",
    rumahTerendam: "~100 rumah",
    deskripsi:
      "Banjir rob dan pasang laut tinggi sesekali menggenangi wilayah pesisir. Risiko banjir bandang sangat rendah karena topografi kepulauan.",
    mitigasi: "Tanaman mangrove, peninggian jalan pesisir, sistem drainase",
    imageUrl : "img/bangai_kepulauan.jpg",
    riwayat: [
      { tahun: 2023, bulan: "Maret", tinggi: "40 cm", durasi: "1 hari" },
      { tahun: 2022, bulan: "Oktober", tinggi: "50 cm", durasi: "2 hari" },
    ],
  },
  "Banggai Laut": {
    tingkatRisiko: "Rendah",
    frekuensiBanjir: "1-2 kali per tahun",
    kejadianTerakhir: "April 2023",
    wilayahTerdampak: "Banggai, Tinangkung",
    korbanJiwa: "Tidak ada",
    kerugianMaterial: "Rp 1.5 Miliar",
    rumahTerendam: "~80 rumah",
    deskripsi:
      "Wilayah kepulauan dengan ancaman terbatas. Lebih rentan terhadap abrasi dan banjir rob daripada banjir sungai.",
    mitigasi: "Pemecah ombak, penanaman mangrove, sistem drainase pesisir",
    imageUrl : "img/bangai_laut.jpeg",
    riwayat: [
      { tahun: 2023, bulan: "April", tinggi: "35 cm", durasi: "1 hari" },
      { tahun: 2021, bulan: "Desember", tinggi: "45 cm", durasi: "1 hari" },
    ],
  },
  Buol: {
    tingkatRisiko: "Rendah",
    frekuensiBanjir: "2-3 kali per tahun",
    kejadianTerakhir: "Januari 2024",
    wilayahTerdampak: "Buol Kota, Momunu",
    korbanJiwa: "Tidak ada",
    kerugianMaterial: "Rp 3 Miliar",
    rumahTerendam: "~200 rumah",
    deskripsi:
      "Area pesisir dengan topografi berbukit. Banjir lokal terjadi di beberapa titik rendah saat hujan ekstrem.",
    mitigasi: "Pembangunan drainase, reboisasi, pemantauan curah hujan",
    imageUrl : "img/buol.jpg",
    riwayat: [
      { tahun: 2024, bulan: "Januari", tinggi: "55 cm", durasi: "2 hari" },
      { tahun: 2023, bulan: "November", tinggi: "48 cm", durasi: "1 hari" },
      { tahun: 2022, bulan: "Maret", tinggi: "62 cm", durasi: "2 hari" },
    ],
  },
  Donggala: {
    tingkatRisiko: "Tinggi",
    frekuensiBanjir: "6-8 kali per tahun",
    kejadianTerakhir: "Maret 2024",
    wilayahTerdampak: "Banawa, Donggala Kota, Sirenja",
    korbanJiwa: "3 orang (2023)",
    kerugianMaterial: "Rp 25 Miliar",
    rumahTerendam: "~1,200 rumah",
    imageUrl: "img/donggala.jpg",
    deskripsi:
      "Wilayah pesisir dan dataran rendah sangat rawan banjir. Infrastruktur drainase terbatas dan sungai-sungai sering meluap saat musim hujan.",
    mitigasi:
      "Pembangunan tanggul, normalisasi 5 sungai utama, sistem pompa air, early warning",
    riwayat: [
      { tahun: 2024, bulan: "Maret", tinggi: "150 cm", durasi: "5 hari" },
      { tahun: 2024, bulan: "Januari", tinggi: "120 cm", durasi: "4 hari" },
      { tahun: 2023, bulan: "Desember", tinggi: "180 cm", durasi: "6 hari" },
      { tahun: 2023, bulan: "Oktober", tinggi: "100 cm", durasi: "3 hari" },
      { tahun: 2023, bulan: "Mei", tinggi: "95 cm", durasi: "3 hari" },
    ],
  },
  "Kota Palu": {
    tingkatRisiko: "Sangat Tinggi",
    frekuensiBanjir: "8-12 kali per tahun",
    kejadianTerakhir: "Februari 2024",
    wilayahTerdampak: "Palu Barat, Palu Timur, Palu Utara, Tatanga, Tawaeli",
    korbanJiwa: "5 orang (2023)",
    kerugianMaterial: "Rp 45 Miliar",
    rumahTerendam: "~2,500 rumah",
    imageUrl: "img/palu.jpg",
    deskripsi:
      "Ibukota provinsi dengan intensitas banjir tertinggi. Sungai Palu yang meluap adalah penyebab utama, ditambah drainase kota yang kurang memadai dan perubahan tata guna lahan.",
    mitigasi:
      "Tanggul Sungai Palu 2.5 km, pompa air otomatis, 10 pos pemantauan, sistem peringatan dini SMS, normalisasi anak sungai",
    riwayat: [
      { tahun: 2024, bulan: "Februari", tinggi: "200 cm", durasi: "7 hari" },
      { tahun: 2023, bulan: "Desember", tinggi: "220 cm", durasi: "8 hari" },
      { tahun: 2023, bulan: "November", tinggi: "160 cm", durasi: "5 hari" },
      { tahun: 2023, bulan: "September", tinggi: "140 cm", durasi: "4 hari" },
      { tahun: 2023, bulan: "Mei", tinggi: "180 cm", durasi: "6 hari" },
      { tahun: 2023, bulan: "Maret", tinggi: "150 cm", durasi: "5 hari" },
    ],
  },
  Morowali: {
    tingkatRisiko: "Sedang",
    frekuensiBanjir: "4-6 kali per tahun",
    kejadianTerakhir: "Maret 2024",
    wilayahTerdampak: "Bungku, Bahodopi, Petasia",
    korbanJiwa: "1 orang (2022)",
    kerugianMaterial: "Rp 12 Miliar",
    rumahTerendam: "~650 rumah",
    deskripsi:
      "Daerah perbukitan dengan beberapa titik rawan longsor dan genangan. Banjir bandang dapat terjadi di lembah-lembah sungai saat hujan lebat.",
    mitigasi:
      "Reboisasi hutan lindung, pembangunan check dam, sistem peringatan dini longsor",
    imageUrl : "img/mororwali.jpg",
    riwayat: [
      { tahun: 2024, bulan: "Maret", tinggi: "110 cm", durasi: "4 hari" },
      { tahun: 2023, bulan: "November", tinggi: "95 cm", durasi: "3 hari" },
      { tahun: 2023, bulan: "Juli", tinggi: "85 cm", durasi: "3 hari" },
      { tahun: 2022, bulan: "Desember", tinggi: "130 cm", durasi: "5 hari" },
    ],
  },
  "Morowali Utara": {
    tingkatRisiko: "Rendah",
    frekuensiBanjir: "2-3 kali per tahun",
    kejadianTerakhir: "November 2023",
    wilayahTerdampak: "Kolonodale, Petasia Timur",
    korbanJiwa: "Tidak ada",
    kerugianMaterial: "Rp 4 Miliar",
    rumahTerendam: "~250 rumah",
    deskripsi:
      "Wilayah pesisir utara dengan topografi bergelombang. Risiko banjir relatif rendah namun perlu waspada saat hujan ekstrem berkepanjangan.",
    mitigasi: "Sistem drainase alami, pemantauan cuaca, jalur evakuasi",
    imageUrl : "img/morowali_utara.jpg",
    riwayat: [
      { tahun: 2023, bulan: "November", tinggi: "70 cm", durasi: "2 hari" },
      { tahun: 2023, bulan: "Mei", tinggi: "55 cm", durasi: "2 hari" },
      { tahun: 2022, bulan: "Oktober", tinggi: "65 cm", durasi: "2 hari" },
    ],
  },
  "Parigi Moutong": {
    tingkatRisiko: "Sedang",
    frekuensiBanjir: "5-7 kali per tahun",
    kejadianTerakhir: "Februari 2024",
    wilayahTerdampak: "Parigi, Kasimbar, Tinombo",
    korbanJiwa: "2 orang (2024)",
    kerugianMaterial: "Rp 18 Miliar",
    rumahTerendam: "~900 rumah",
    deskripsi:
      "Area pertanian dengan sistem irigasi yang perlu perbaikan. Berpotensi banjir saat hujan lebat berkepanjangan dan luapan sungai-sungai di DAS Parigi.",
    mitigasi:
      "Perbaikan sistem irigasi, waduk penampung, pos curah hujan otomatis",
    imageUrl : "img/parigi_moutong.jpeg",
    riwayat: [
      { tahun: 2024, bulan: "Februari", tinggi: "125 cm", durasi: "5 hari" },
      { tahun: 2023, bulan: "Desember", tinggi: "105 cm", durasi: "4 hari" },
      { tahun: 2023, bulan: "September", tinggi: "90 cm", durasi: "3 hari" },
      { tahun: 2023, bulan: "Juni", tinggi: "85 cm", durasi: "3 hari" },
      { tahun: 2023, bulan: "Maret", tinggi: "115 cm", durasi: "4 hari" },
    ],
  },
  Poso: {
    tingkatRisiko: "Sedang",
    frekuensiBanjir: "4-6 kali per tahun",
    kejadianTerakhir: "Januari 2024",
    wilayahTerdampak: "Poso Kota, Lage, Pamona",
    korbanJiwa: "1 orang (2023)",
    kerugianMaterial: "Rp 14 Miliar",
    rumahTerendam: "~750 rumah",
    deskripsi:
      "Wilayah sekitar Danau Poso dengan potensi luapan danau dan sungai. Topografi berbukit dengan beberapa area dataran rendah rawan genangan.",
    mitigasi:
      "Sistem pemantauan ketinggian Danau Poso, normalisasi outlet danau, early warning SMS",
    imageUrl : "img/poso.jpeg",
    riwayat: [
      { tahun: 2024, bulan: "Januari", tinggi: "100 cm", durasi: "4 hari" },
      { tahun: 2023, bulan: "Oktober", tinggi: "115 cm", durasi: "5 hari" },
      { tahun: 2023, bulan: "Juni", tinggi: "80 cm", durasi: "3 hari" },
      { tahun: 2022, bulan: "Desember", tinggi: "95 cm", durasi: "3 hari" },
    ],
  },
  Sigi: {
    tingkatRisiko: "Sangat Tinggi",
    frekuensiBanjir: "7-10 kali per tahun",
    kejadianTerakhir: "Maret 2024",
    wilayahTerdampak: "Sigi Biromaru, Palolo, Dolo",
    korbanJiwa: "4 orang (2023)",
    kerugianMaterial: "Rp 35 Miliar",
    rumahTerendam: "~1,800 rumah",
    deskripsi:
      "Wilayah lembah dengan intensitas curah hujan sangat tinggi. Sungai Gumbasa dan Lariang sering meluap menggenangi pemukiman dan lahan pertanian.",
    mitigasi:
      "Waduk Gumbasa (15 juta m³), tanggul pengaman 3 km, 8 pos pemantauan, jalur evakuasi",
    imageUrl: "img/kab_sigi.jpg",
    riwayat: [
      { tahun: 2024, bulan: "Maret", tinggi: "190 cm", durasi: "6 hari" },
      { tahun: 2024, bulan: "Januari", tinggi: "170 cm", durasi: "5 hari" },
      { tahun: 2023, bulan: "November", tinggi: "200 cm", durasi: "7 hari" },
      { tahun: 2023, bulan: "September", tinggi: "145 cm", durasi: "5 hari" },
      { tahun: 2023, bulan: "Juni", tinggi: "160 cm", durasi: "5 hari" },
      { tahun: 2023, bulan: "April", tinggi: "135 cm", durasi: "4 hari" },
    ],
  },
  "Tojo Una Una": {
    tingkatRisiko: "Rendah",
    frekuensiBanjir: "2-4 kali per tahun",
    kejadianTerakhir: "Desember 2023",
    wilayahTerdampak: "Ampana, Una-Una, Togean",
    korbanJiwa: "Tidak ada",
    kerugianMaterial: "Rp 5 Miliar",
    rumahTerendam: "~300 rumah",
    deskripsi:
      "Area dengan topografi relatif aman. Banjir lokal terjadi pada beberapa titik dekat aliran sungai kecil dan wilayah pesisir saat pasang tinggi.",
    mitigasi: "Drainase alami, pemeliharaan DAS, sistem informasi cuaca",
    imageUrl : "img/banjir_tojo_una_una.jpg",
    riwayat: [
      { tahun: 2023, bulan: "Desember", tinggi: "65 cm", durasi: "2 hari" },
      { tahun: 2023, bulan: "Juli", tinggi: "58 cm", durasi: "2 hari" },
      { tahun: 2022, bulan: "November", tinggi: "72 cm", durasi: "3 hari" },
    ],
  },
  "Toli Toli": {
    tingkatRisiko: "Sedang",
    frekuensiBanjir: "4-5 kali per tahun",
    kejadianTerakhir: "Februari 2024",
    wilayahTerdampak: "Tolitoli Kota, Baolan, Galang",
    korbanJiwa: "1 orang (2023)",
    kerugianMaterial: "Rp 11 Miliar",
    rumahTerendam: "~600 rumah",
    deskripsi:
      "Wilayah pesisir utara dengan dataran rendah rawan genangan saat intensitas hujan tinggi dan pasang laut. Kombinasi banjir sungai dan rob memperbesar dampak.",
    mitigasi:
      "Tanggul pesisir, pompa air 50 m³/menit, normalisasi sungai, early warning",
    imageUrl : "img/toli-toli.jpg",
    riwayat: [
      { tahun: 2024, bulan: "Februari", tinggi: "105 cm", durasi: "4 hari" },
      { tahun: 2023, bulan: "November", tinggi: "92 cm", durasi: "3 hari" },
      { tahun: 2023, bulan: "Agustus", tinggi: "78 cm", durasi: "2 hari" },
      { tahun: 2023, bulan: "April", tinggi: "88 cm", durasi: "3 hari" },
    ],
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
