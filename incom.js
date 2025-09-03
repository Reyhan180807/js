// // //  abstract class

// // class Animal {
// //     constructor() {
// //         if (new.target === Animal) {
// //             throw new Error("Animal adalah abstract class, tidak bisa di-instantiate langsung");
// //         }
// //     }

// //     makeSound() {
// //         throw new Error("Method 'makeSound()' harus diimplementasikan di subclass!");
// //     }
// // }

// // class Dog extends Animal {
// //     makeSound() {
// //         return("woof");
// //     }
// // }

// // class Cat extends Animal {
// //     makeSound() {
// //         return("meow");
// //     }
// // }

// // let d = new Dog();
// // console.log(d.makeSound());


// // let a = new Animal(); 
// // a.makeSound();


// // Composition

// class Engine {
//     start() {
//         console.log("mesin nyala");
//     }
// }

// class GPS {
//     navigasi() {
//         console.log("Navigasi.....");
//     }
// }

// class Car {
//     constructor() {
//         this.engine = new Engine();
//         this.gps = new GPS();
//     }
    
//     drive() {
//         this.engine.start();
//         this.gps.navigasi();
//         console.log("mobil berjalan");
//     }
// }

// let myCar = new Car();
// myCar.drive();
