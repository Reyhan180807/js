

let sepeda = {
    brand: "Polygon",
    gear: 7,
    warna: "Merah",
    start: function () {
        console.log("Sepeda mulai dikayuh!");
    },
    break: function () {
        console.log("Sepeda berhenti!");
    }
};

console.log(sepeda.brand);
console.log(sepeda.gear);

sepeda.start();
sepeda.break();
