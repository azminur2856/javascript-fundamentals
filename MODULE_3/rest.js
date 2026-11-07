//rest

// function
function add(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(add(1, 2, 3, 4, 5));

//object
const obj = {
  name: "Tusher",
  age: 25,
  address: "Dhaka, Bangladesh",
  ocupation: "Software Engineer",
};

const { name, ...remaining } = obj;

console.log(name); // Output: Tusher
console.log(remaining); // Output: { age: 25, address: 'Dhaka, Bangladesh', ocupation: 'Software Engineer' }

//array
const arr = [1, 2, 3, 4, 5];
const [, , , ...rest] = arr;

console.log(rest); // Output: [4, 5]

//Nedd to use rest parameter at the end of the parameter list in a function because it collects all remaining arguments into an array. If you place it in the middle or at the beginning, it will cause a syntax error.
function something(one, ...rest) {
  console.log(one, rest);
}

something(1, 2, 3, 4, 5);
