// Mengubah output string

let bdays = ['10-17', '05-19', '20-19'];

let hasil = bdays.map(x => {
    let nilai_split = x.split("-");
    let nilai_join = nilai_split.join('/');
    
    return nilai_join;
});

console.log(hasil);