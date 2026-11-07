let students = [
  { name: "Azminur", age: 20, marks: 85 },
  { name: "Rahman", age: 22, marks: 90 },
  { name: "Tusher", age: 19, marks: 95 },
  { name: "Mehedi", age: 21, marks: 75 },
];

let fruits = ["apple", "banana", "cherry", "mango", "kiwi", "grape"];

// find
let customFruit = fruits.find((f) => f.length > 5); // find can return the first element that satisfies the condition
console.log(customFruit); // Output: "banana"

//includes
let hasMango = fruits.includes("mango"); // includes can check if an element exists in the array and return a boolean value
console.log(hasMango); // Output: true

// some
let studentCheck = students.some((s) => s.marks > 90); // some can check if at least one element satisfies the condition and return a boolean value
console.log(studentCheck); // Output: true

// every
let studentCheck2 = students.every((s) => s.marks > 70); // every can check if all elements satisfy the condition and return a boolean value
console.log(studentCheck2); // Output: true
