/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 6: JSON Text - Task 2
  Student Name: Ansh Maheshwari
  Roll Number: BCS2025087
*/

const jsonStr = '{"city":"Pune","pin":411001}';

const obj = JSON.parse(jsonStr);
console.log(obj.city);
