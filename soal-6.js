// Melakukan pembulatan setiap value pada array

let arr = [1.5, 2.56, 5.1, 12.33];

let hasil = arr.map(x => {
    return Math.round(x)
})

console.log(hasil);