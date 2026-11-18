/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 11: Scope and Closures - Task 2
  Student Name: Ansh Maheshwari
  Roll Number: BCS2025087
*/

function makeCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
