/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 9: DOM, Validation, Storage and Quiz - Task 2
  Student Name: Ansh Maheshwari
  Roll Number: BCS2025087
*/

function validateForm(name) {
    const errors = [];
    if (!name || name.trim() === "") {
        errors.push("Name is required");
    }
    return errors;
}

console.log(validateForm("Asha"));
console.log(validateForm(""));
