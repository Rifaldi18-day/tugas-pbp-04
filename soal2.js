// Data awal berbentuk Array of Objects yang menyimpan info tiap balapan MotoGP
var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: { firstName: 'Cal', lastName: 'Crutchlow', country: 'UK' }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: { firstName: 'Valentino', lastName: 'Rossi', country: 'Italy' }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' }
  }
];

// Mengelompokkan data berdasarkan negara pemenang menggunakan method reduce()
let groupedResult = motoGP.reduce((acc, event) => {
  // Ambil nama negara pemenang dari objek winner
  let country = event.winner.country;
  
  // Gabungkan nama depan dan nama belakang pemenang
  let fullName = `${event.winner.firstName} ${event.winner.lastName}`;
  
  // Gabungkan nama sirkuit dan lokasi balapan
  let winLoc = `${event.circuit}, ${event.location}`;

  // Cek apakah nama negara tersebut belum ada di dalam object penampung (acc)
  if (!acc[country]) {
    // Kalau belum ada, buat properti baru untuk negara tersebut
    acc[country] = {
      winningCircuits: [], // Array kosong untuk menampung daftar kemenangan
      totalWin: 0          // Counter total kemenangan, dimulai dari 0
    };
  }

  // Masukkan data pemenang dan lokasi ke dalam array winningCircuits milik negara terkait
  acc[country].winningCircuits.push({
    name: fullName,
    winLocation: winLoc
  });

  // Tambahkan jumlah kemenangan negara tersebut sebanyak 1
  acc[country].totalWin += 1;

  // Kembalikan objek akumulator untuk digunakan pada iterasi berikutnya
  return acc;
}, {}); // Tanda {} di sini adalah nilai awal (initial value) berupa objek kosong

// --- PROSES MENAMPILKAN HASIL OUTPUT ---

// Cetak judul / header
console.log("🌻✨ --- SUNFLOWER MOTOGP RECAP --- ✨🌻");

// Perulangan for...in untuk mengakses setiap properti negara di dalam groupedResult
for (let country in groupedResult) {
  // Cetak nama negara
  console.log(`\n☀️ Negara: ${country} 💛`);
  
  // Cetak total kemenangan negara tersebut
  console.log(`🐥 Total Menang: ${groupedResult[country].totalWin}x win~`);
  console.log("🏆 Daftar Sirkuit:");
  
  // Loop menggunakan forEach untuk menampilkan detail sirkuit dan pemenangnya
  groupedResult[country].winningCircuits.forEach((item) => {
    console.log(`  🌼 ${item.name} ✨ (${item.winLocation})`);
  });
}

// Cetak garis penutup dan pesan
console.log("\n-------------------------------------------");
console.log("Semoga harimu secerah bunga matahari! (⁠⁠✿⁠^⁠‿⁠^⁠)🌻💛");