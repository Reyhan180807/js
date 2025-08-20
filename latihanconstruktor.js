function Sepeda(merk, gear, warna) {
    this.merk = merk;
    this.gear = gear;  
    this.warna = warna;

    this.start = function(){
        console.log(`${this.merk} Berjalan`);
    };
    this.drive = function(){
        console.log(`${this.merk} sedang berjalan`);
    };
}

let sepeda1 = new Sepeda("BMX", 20, "blue");
let sepeda2 = new Sepeda("ONTEL", 17, "red");

sepeda1.start(); 
sepeda2.drive(); 
