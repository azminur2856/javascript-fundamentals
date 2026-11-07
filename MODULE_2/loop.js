// loop

// for loop

for (let i = 0; i < 5; i++) {
  console.log(`count: ${i}`); // print the value of i from 0 to 4
}

console.log("\nLoop finished.\n");

for (let i = 4; i >= 0; i--) {
  console.log(`count: ${i}`); // print the value of i from 5 to 0
}

console.log("\nLoop finished.\n");

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`khabo: ${fruits[i]}`); // print each fruit in the fruits array
}

console.log("\nLoop finished.\n");

// while loop
let i = 0;
while (i < fruits.length) {
  console.log(`khabo: ${fruits[i]}`); // print each fruit in the fruits array
  i++;
}

console.log("\nLoop finished.\n");

// do while loop
let j = 0;
do {
  console.log(`khabo: ${fruits[j]}`); // print each fruit in the fruits array
  j++;
} while (j < fruits.length);

console.log("\nLoop finished.\n");
