// nested data

//nested object
let user = {
  name: "Azminur",
  age: 25,
  email: "azminur@example.com",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
    postalCode: 1200,
  },
};

console.log(user.address); // access the address property of the user object, which is itself an object
console.log(user["address"]); // access the address property of the user object using bracket notation
console.log(user.address.city); // access the city property of the address object, which is a nested object within the user object
console.log(user["address"]["city"]); // access the city property of the address object using bracket notation

//nested array

let entities = Object.entries(user); // convert the user object into an array of key-value pairs
console.log(entities); // print the array of key-value pairs
console.log(entities[0]); // print the first key-value pair of the array
console.log(entities[0][0]); // print the key of the first key-value pair of the array

let students = [
  {
    name: "Azminur",
    id: 1,
  },
  {
    name: "Rahman",
    id: 2,
  },
  {
    name: "Tusher",
    id: 3,
    address: {
      city: "Dhaka",
      country: "Bangladesh",
      postalCode: 1200,
      option: ["option1", "option2"],
    },
  },
];

console.log(students); // print the whole array of student objects
console.log(students[0]); // print the first student object in the array
console.log(students[0].name); // print the name property of the first student object in the array using dot notation
console.log(students[0]["id"]); // print the id property of the first student object in the array using bracket notation

console.log(students[2].address.city); // print the city property of the address object of the third student object in the array using dot notation
console.log(students[2]["address"]["city"]); // print the city property of the address object of the third student object in the array using bracket notation

console.log(students[2].address.option); // print the option property of the address object of the third student object in the array using dot notation
console.log(students[2]["address"]["option"]); // print the option property of the address object of the third student object in the array using bracket notation

console.log(students[2].address.option[0]); // print the first element of the option array of the address object of the third student object in the array using dot notation
console.log(students[2]["address"]["option"][0]); // print the first element of the option array of the address object of the third student object in the array using bracket notation

students[2].address.option[1] = "new option"; // update the second element of the option array of the address object of the third student object in the array
console.log(students[2].address.option); // print the updated option array of the address object of the third student object in the array
