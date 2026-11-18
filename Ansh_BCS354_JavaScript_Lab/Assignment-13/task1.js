/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 13: Reduce, Some, Every and Map - Task 1
  Student Name: Ansh Maheshwari
  Roll Number: BCS2025087
*/

const prices = [120, 45, 300];

const total = prices.reduce((acc, curr) => acc + curr, 0);
console.log(total);
