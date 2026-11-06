// Arithmetic Operators -> + - * / %
// Assignment Operators -> = += -= *= /= %=
// Comparison Operators -> == === != !== > < >= <=
// Logical Operators -> && || !

// Arithmetic Operators
let a = 10;
let b = 3;

console.log("Arithmetic Operators:");
let sum = a + b; // Addition
console.log(`Sum: ${sum}`); // Output: Sum: 13

let difference = a - b; // Subtraction
console.log(`Difference: ${difference}`); // Output: Difference: 7

let product = a * b; // Multiplication
console.log(`Product: ${product}`); // Output: Product: 30

let division = a / b; // Division
console.log(`Division: ${division.toFixed(2)}`); // Output: Division: 3.33

let remainder = a % b; // Modulus
console.log(`Remainder: ${remainder}`); // Output: Remainder: 1

// a + b - (c + f) * d / e // It follows the order of operations (PEMDAS/BODMAS) to evaluate the expression correctly.

// Assignment Operators
console.log("\nAssignment Operators:");
sum += 5; // Equivalent to sum = sum + 5
console.log(`Sum: ${sum}`); // Output: Sum: 18

difference -= 2; // Equivalent to difference = difference - 2
console.log(`Difference: ${difference}`); // Output: Difference: 5

product *= 2; // Equivalent to product = product * 2
console.log(`Product: ${product}`); // Output: Product: 60

division /= 2; // Equivalent to division = division / 2
console.log(`Division: ${division.toFixed(2)}`); // Output: Division: 1.67

remainder %= 2; // Equivalent to remainder = remainder % 2
console.log(`Remainder: ${remainder}`); // Output: Remainder: 1

// Comparison Operators
console.log("\nComparison Operators:");
console.log(`${a} == ${b}: ${a == b}`); // Output: 10 == 3: false
console.log(`${a} === ${b}: ${a === b}`); // Output: 10 === 3: false
console.log(`${a} != ${b}: ${a != b}`); // Output: 10 != 3: true
console.log(`${a} !== ${b}: ${a !== b}`); // Output: 10 !== 3: true
console.log(`${a} > ${b}: ${a > b}`); // Output: 10 > 3: true
console.log(`${a} < ${b}: ${a < b}`); // Output: 10 < 3: false
console.log(`${a} >= ${b}: ${a >= b}`); // Output: 10 >= 3: true
console.log(`${a} <= ${b}: ${a <= b}`); // Output: 10 <= 3: false

// Logical Operators
console.log("\nLogical Operators:");
let c = true;
let d = false;

console.log(`${c} && ${d}: ${c && d}`); // Output: true && false: false
console.log(`${c} || ${d}: ${c || d}`); // Output: true || false: true
console.log(`!${c}: ${!c}`); // Output: !true: false
