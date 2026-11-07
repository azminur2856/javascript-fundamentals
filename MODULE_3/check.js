// Importing default and named exports from math.js
import add, { subtract, pi } from "./math.js";
// Default import
// import add from "./math.js";

// Named imports
// import { subtract, pi } from "./math.js";

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
console.log(pi); // Output: 3.14159
