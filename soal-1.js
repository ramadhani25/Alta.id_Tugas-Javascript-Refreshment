var a = 5;
let b = "Kampus merdeka";
const nama = "Budi";
let terdaftar = true; 
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
    let asal = "indonesia";
    return console.log (
        "perkenalkan nama saya " + 
        nama + 
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        "berasal dari " +
        asal
    );
}

if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b;

console.log("array = " + nama); // console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan();


// Soal

// a. Ambil index ke 2 dalam array di baris 5 dan ditampilkan dalam console.
// Jawab
// console.log(lengkap_arr[1]);

// b. Ubah kode diatas sehingga dapat menampilkan baris 22 dalam console.
// Jawab
// Mengubah code pada baris ke 4, yaitu mengubah nilai variabel terdaftar = true.

// c. Lakukan pemanggilan untuk function perkenalan pada baris 31.
// Jawab
// melakukan pemanggilan dengan code, perkenalan();

// d. Mengubah code seperti tampilan.
