var heading = document.getElementById("heading");
var message = document.getElementById("message");

const searchParams = new URLSearchParams(window.location.search);
var nama = searchParams.get('nama');
var pesan = searchParams.get('pesan');

// tes
console.log(nama);
console.log(pesan);
// selesai tes

var list_pesan = [
    "Semoga limpahan rahmat dan berkah Allah SWT senantiasa menyertai kita semua.",
    "Semoga amal ibadah kita diterima Allah SWT dan kita menjadi pribadi yang lebih baik.",
    "Semoga kebahagiaan dan kedamaian selalu hadir di hati dan keluarga kita.",
    "Semoga di hari yang fitri ini, hati kita juga kembali suci dan fitrah.",
    "Semoga di hari raya ini, kita dapat menyebarkan cinta dan kasih sayang kepada sesama.",
    "Taqabbalallahu Minna Wa Minkum, semoga Allah SWT memberikan ampunan atas segala dosa dan kesalahan kita.",
    "Mari kita saling memaafkan dan mempererat tali silaturahmi." 
]

var list_ucapan = [
    "Selamat Hari Raya Idul Fitri 1445 H, ",
    "Selamat Lebaran, "
];

// decrypt
var nama_decrypted = CryptoJS.AES.decrypt(nama, "rahasia").toString(CryptoJS.enc.Utf8).replaceAll("%20", " ");
var pesan_decrypted = CryptoJS.AES.decrypt(pesan, "rahasia").toString(CryptoJS.enc.Utf8).replaceAll("%20", " ");
if (pesan_decrypted == "") {
    pesan_decrypted = list_pesan[getRandomInt(7)];
}


var ucapan = list_ucapan[getRandomInt(2)];

console.log(nama_decrypted);
console.log(pesan_decrypted);
heading.innerHTML = ucapan + nama_decrypted + "!";
message.innerHTML = pesan_decrypted;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }