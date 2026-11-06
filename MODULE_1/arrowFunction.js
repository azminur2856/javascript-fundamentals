// function total(quantity, price) {
//   return price * quantity;
// }

// Arrow function of the above function
const total = (quantity, price) => {
  const grandTotal = price * quantity;
  return grandTotal;
};

const spend = total(5, 11);
console.log(spend);

// Arrow function with implicit return: no { } and no "return", the result is returned automatically
const add = (a, b) => a + b;

const sum = add(5, 10);
console.log(sum); // 15
