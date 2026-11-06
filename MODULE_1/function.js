// functions are reusable code blocks to perform a particular task.

// Problem: default parameter is first, required parameter is last
function total(price = 10, quantity) {
  const grandTotal = price * quantity;
  return grandTotal;
}

console.log(total(5)); // NaN → price = 5, quantity = undefined

// Fix: required parameter first, default parameter last
function totalFixed(quantity, price = 10) {
  const grandTotal = price * quantity;
  return grandTotal;
}

console.log(totalFixed(5)); // 50 → quantity = 5, price = 10 (default)

// Function without a return value. it's a void function. It performs an action but does not return a value.
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

sayHello("Azminur"); // Output: Hello, Azminur!
