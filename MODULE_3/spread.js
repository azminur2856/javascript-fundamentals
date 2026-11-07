// Spread Operator - three Dot
// let newArray = [...oldArray, 4, 5, 6]; // Spread Operator
// let newObject = {...oldObject, newKey: 'newValue'}; // Spread Operator

let cart = ["fruits", "rice"];

let newCart = [...cart, "vegetables", "meat"]; // Spread Operator
console.log(cart);
console.log(newCart);

let personalInfo = {
  name: "Tusher",
  age: 27,
};

let contactInfo = {
  phone: "01700000000",
  email: "tusher@example.com",
};

let fullProfile = { ...personalInfo, ...contactInfo, zip: "1200" }; // Spread Operator
console.log(fullProfile);
