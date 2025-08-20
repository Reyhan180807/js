// //polymorphism

// class Burung {
//     constructor(nama) {
//         this.nama = nama;
//     }
//     bersuara() {
//         console.log(`${this.nama} bersuara cuit cuit`);
//     }
// }

// class Ayam extends Burung {
//     bersuara() {
//         console.log(`${this.nama} bersuara kukuruyuk`);
//     }
// }

// class Bebek extends Burung {
//     bersuara() {
//         console.log(`${this.nama} bersuara kwek kwek`);
//     }
// }

// class Rangga extends Burung {
//     bersuara() {
//         console.log(`${this.nama} bersuara Ah Ah Ah`);
//     }
// }

// const daftarBurung = [
//     new Ayam("kalkum"),
//     new Bebek("goreng"),
//     new Burung("merpati"),
//     new Rangga("rangga")
// ];

// daftarBurung.forEach(burung => {
//     burung.bersuara();
// });



// static properties

// class matematika {
//     static pi = 3.14159;
//     static luasLingkaran(jari) {
//         return this.pi * jari * jari;
//     }
// }

// console.log(matematika.luasLingkaran(7));



// getter & setter

class Mahasiswa {
    #nama;

    constructor(nama) {
        this.#nama = nama;
    }

    get nama() {
        return this.#nama.toUpperCase();
    }

    set nama(value) {
        if (value.length < 3) {
            console.log("Nama terlalu pendek");
            return;
        } 
        this.#nama = value;
    }
}

const mhs = new Mahasiswa("ari");
console.log(mhs.nama);  

mhs.nama = "li"; 
mhs.nama = "putri";
console.log(mhs.nama);  
