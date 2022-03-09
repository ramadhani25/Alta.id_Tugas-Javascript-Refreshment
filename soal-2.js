// Jawab pertanyaan sesuai dengan materi yang di jelaskan

// a. Jelaskan kenapa baris 21, 22, 23 tidak dapat tampil ?
// Jawab
// Baris tersebut tidak tampil dikarenakan, variabel 'terdaftar' memiliki nilai false. Fungsi if akan menjalankan statement jika variabel terdaftar bernilai true.

// b. Jelaskan kenapa deklarasi pada baris-26 menyebabkan error ?
// Jawab
// Deklarasi pada baris ke-26 error, dikarenakan variabel 'nama' merupakan variabel const, yaitu variabel yang tidak bisa di reassign. 

// c. Dengan melakukan komen pada baris ke-26, apakah baris 28 dapat di eksekusi ? Jelaskan.
// Jawab
// Walaupun baris ke-26 dikomen, baris ke-28 tetap tidak dapat dieksekusi(error), karena variabel 'asal' menggunakan let, yaitu variabel hanya dapat digunakan di dalam scopenya. Dalam hal ini, variabel 'asal' dideklarasikan di dalam function perkenalan, sehingga tidak bisa digunakan di luar function tersebut.