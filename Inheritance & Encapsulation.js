//latihan 1
class Message {
    send() {
        console.log("Mengirim pesan");
    }
}

class Email extends Message {
    send() {
        console.log("Mengirim email");
    }
}

class SMS extends Message {
    send() {
        console.log("Mengirim SMS");
    }
}

const pesan = new Message();
const pesanEmail = new Email();
const pesanSMS = new SMS();


pesan.send(); 
pesanEmail.send(); 
pesanSMS.send();  


//Latihan 2
class User {
    #password; 

    constructor(password) {
        this.#password = password; 
    }
    checkPassword(input) {
        if (input === this.#password) {
            console.log("pass benar");
        } else {
            console.log("pass salah");
        }
    }
}

const user1 = new User("Cimong");

user1.checkPassword("Kicik"); 
user1.checkPassword("Cimong"); 