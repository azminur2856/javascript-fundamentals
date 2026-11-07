// reduce, sort, chaining

let products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: false },
];

// reduce
let totalPrice = products.reduce((acc, current) => {
  return (acc += current.price);
}, 0); // reduce can return a single value based on the array elements

console.log(totalPrice); // Output: 2600

// sort
let numArr = [5, 3, 8, 1, 2];
let sortedNumArr = numArr.sort(); // default sort is based on string Unicode code points, so it may not work as expected for numbers
console.log(sortedNumArr); // Output: [ 1, 2, 3, 5, 8 ]
let sortedNumArr2 = numArr.sort((a, b) => a - b); // ascending order
console.log(sortedNumArr2); // Output: [ 1, 2, 3, 5, 8 ]
let sortedNumArr3 = numArr.sort((a, b) => b - a); // descending order
console.log(sortedNumArr3); // Output: [ 8, 5, 3, 2, 1 ]

let sortedProducts = products.sort((a, b) => a.price - b.price); // sort products based on price in ascending order
console.log(sortedProducts);
let sortedProducts2 = products.sort((a, b) => b.price - a.price); // sort products based on price in descending order
console.log(sortedProducts2);

// chaining
let totalInStockPrice = products
  .filter((p) => p.inStock === true)
  .reduce((acc, current) => {
    return (acc += current.price);
  }, 0); // chaining filter and reduce to get the total price of in-stock products
console.log(totalInStockPrice); // Output: 1800
