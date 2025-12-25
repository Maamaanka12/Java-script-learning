//You have an array of student names:
//students = ["Ali", "Fatima", "Omar", "Hassan", "Layla"]
//👉 Find whether "Omar" attended using includes().
//👉 Print a message like "Omar is present" or "Omar is absent"

let students = ["Ali", "Fatima", "Omar", "Hassan", "Layla"];

if (students.includes("Omar")) {
    console.log("Omar is present");
} else {
    console.log("Omar is absent");
}