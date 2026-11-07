// foreach, map, filter

//foreach
let fruits = ["apple", "banana", "cherry"];

let newFruits = fruits.forEach((f, idx) => {
  console.log(`${idx + 1} -> ${f}`);
  //   return `${idx + 1} -> ${f}`; // forEach can't return anything, it will always return undefined
});

// console.log(newFruits); // Output: undefined

//map
let newFruitsMap = fruits.map((f, idx) => {
  return `${idx + 1} -> ${f}`; // map can return a new array
});

console.log(newFruitsMap); // Output: [ '1 -> apple', '2 -> banana', '3 -> cherry' ]

let newFruitsMap2 = fruits.map((f, idx) => `${idx + 1} -> ${f}`); // implicit return
console.log(newFruitsMap2); // Output: [ '1 -> apple', '2 -> banana', '3 -> cherry' ]

let newFruitsMap3 = fruits.map((f) => `${f.toUpperCase()}`); // implicit return
console.log(newFruitsMap3); // Output: [ 'APPLE', 'BANANA', 'CHERRY' ]

//filter
let customFruits = fruits.filter((f) => f.length > 5); // filter can return a new array based on a condition
console.log(customFruits); // Output: [ 'banana', 'cherry' ]
