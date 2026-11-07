// Optional Chaining & Nullish Coalescing (?., ??, Safe Property Access)

let user1 = {
  name: "Azminur",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

let user2 = {
  name: "Rahman",
  // no address
};

// Optional Chaining "?."
console.log(user1?.address?.city); // Output: "Dhaka"
console.log(user2?.address?.city); // Output: undefined

// Nullish Coalescing "??"
// If the value is null or undefined, it will return the right-hand side value
console.log(user1?.address?.city ?? "Jashore"); // Output: "Dhaka"
console.log(user2?.address?.city ?? "Jashore"); // Output: "Jashore"
