/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 14: Timers and Intervals - Task 3
  Student Name: Ansh Maheshwari
  Roll Number: BCS2025087
*/

let count = 1;

const intervalId = setInterval(() => {
    console.log("Tick " + count);
    if (count === 3) {
        clearInterval(intervalId);
    }
    count++;
}, 200);
