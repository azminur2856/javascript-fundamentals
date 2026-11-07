// object

let user = {
  name: "Azminur", // name key with value "Azminur" (keyvalue pair)
  age: 25,
  email: "azminur@example.com",
  address: "Dhaka",
};

console.log(user.name); // access the name property using dot notation
console.log(user["age"]); // access the age property using bracket notation

const userInput = "name"; // Suppose the variable is dynamic and can change based on user input

console.log(`${userInput}: ${user[userInput]}`); // access the property dynamically using bracket notation
console.log(`${userInput}: ${user.userInput}`); // This will not work as expected because userInput is a variable, and using dot notation will look for a property literally named "userInput" in the user object, which does not exist. Therefore, it will return undefined. That's why we use bracket notation to access properties dynamically when the property name is stored in a variable.

delete user.email; // delete the email property from the user object
console.log(user); // print the whole user object after deleting

user.email = "admin@example.com"; // add a new email property to the user object
console.log(user); // print the whole user object after adding a new property

user.address = {
  city: "Dhaka",
  country: "Bangladesh",
  postalCode: 1200,
};
console.log(user); // print the whole user object after adding a new address property

console.log(Object.entries(user)); // convert the user object into an array of key-value pairs
console.log(Object.keys(user)); // convert the user object into an array of keys
console.log(Object.values(user)); // convert the user object into an array of values
