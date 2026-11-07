// for of, for in

let techStacks = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

for (let tech of techStacks) {
  console.log(`I am learning: ${tech}`); // print each tech stack in the techStacks array
}

console.log("\nLoop finished.\n");

let obj = {
  name: "Azminur",
  age: 25,
  email: "azminur@example.com",
};

for (let key in obj) {
  console.log(`${key}: ${obj[key]}`); // print each property and its value in the obj object
}

console.log("\nLoop finished.\n");

// break

let marks = 50;

for (let i = marks; i < 100; i++) {
  if (i > 60) {
    break; // exit the loop if marks is greater than 60
  }
  console.log(`marks: ${i}`); // print the value of marks from 50 to 60
}

console.log("\nLoop finished.\n");

// continue

for (let i = 1; i < 15; i++) {
  // true if i is odd
  if (i % 2 != 0) {
    continue; // skip the current iteration if i is odd
  }
  console.log(`even number: ${i}`);
}
