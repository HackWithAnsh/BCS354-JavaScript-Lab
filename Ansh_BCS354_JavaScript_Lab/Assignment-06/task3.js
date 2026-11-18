/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 6: JSON Text - Task 3
  Student Name: Ansh Maheshwari
  Roll Number: BCS2025087
*/

const invalidJson = "{name: Rohan}";

try {
    JSON.parse(invalidJson);
} catch (error) {
    console.log("Invalid JSON");
}
