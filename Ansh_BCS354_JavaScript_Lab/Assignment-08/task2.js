/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 8: Inheritance, Methods and Composition - Task 2
  Student Name: Ansh Maheshwari
  Roll Number: BCS2025087
*/

class Locker {
    constructor() {
        this.pin = 1234;
    }

    checkPin(number) {
        return number === this.pin;
    }
}

const myLocker = new Locker();
console.log(myLocker.checkPin(1111));
console.log(myLocker.checkPin(1234));
