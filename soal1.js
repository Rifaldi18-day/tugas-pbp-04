// Array berisi data objek nama dan nilai masing-masing siswa
let studentsScore = [
  { name: 'Andi', score: 90 },
  { name: 'Rudi', score: 80 },
  { name: 'Dira', score: 100 }
];

// Salin array dengan spread operator [...], lalu urutkan dari nilai terbesar ke terkecil
let sorted = [...studentsScore].sort((a, b) => b.score - a.score);

// Ambil elemen pertama (indeks 0) yang nilainya paling tinggi setelah diurutkan
let highest = sorted[0];

// Ambil elemen paling terakhir untuk nilai yang paling rendah
let lowest = sorted[sorted.length - 1];

// Hitung total seluruh nilai siswa pakai method reduce()
let total = sorted.reduce((sum, s) => sum + s.score, 0);

// Hitung nilai rata-rata dan batasi jadi 1 angka di belakang koma dengan toFixed(1)
let avg = (total / sorted.length).toFixed(1);

// --- PROSES MENAMPILKAN OUTPUT ---

// Cetak judul header statistik kelas
console.log("🌸✨ --- STATISTIK KELAS IMYUTTT --- ✨🌸");

// Cetak info siswa dengan nilai tertinggi
console.log(`👑 Nilai Tertinggi : ${highest.name} (${highest.score}) 🎉`);

// Cetak info siswa dengan nilai terendah
console.log(`🥺 Nilai Terendah  : ${lowest.name} (${lowest.score}) 📑`);

// Cetak nilai rata-rata kelas
console.log(`📊 Rata-rata Kelas : ${avg} 💕`);

// Cetak header daftar peringkat
console.log("\n🏆 PERINGKAT SISWA 🏆");

// Perulangan forEach untuk menampilkan peringkat tiap siswa beserta ikon medalinya
sorted.forEach((student, index) => {
  // Pilih ikon medali berdasarkan urutan rank (0 = emas, 1 = perak, sisanya perunggu)
  let icon = index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉";
  
  // Cetak baris peringkat, nama, dan nilai siswa
  console.log(`${icon} Rank ${index + 1}: ${student.name} 💖 (${student.score} poin)`);
});

// Cetak pembatas dan pesan penutup
console.log("---------------------------------------");
console.log("Tetap semangat semuanya! (⁠っ⁠.⁠❛⁠ ⁠.⁠❛⁠)⁠っ✨");