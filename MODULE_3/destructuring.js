// Destructuring

const student = {
  name: "Azminur",
  age: 25,
  address: "Dhaka, Bangladesh",
};

//old way
const _name = student.name;

//new way
const { name, age, address } = student; // destructuring the student object to extract name, age, and address properties

console.log(name);
console.log(age);
console.log(address);

const student1 = {
  name: "Rahman",
  age: 27,
  address: {
    city: "Dhaka",
    zip: 1200,
  },
};

// nested destructuring & name aliasing
const {
  name: stdName,
  age: stdAge,
  address: { city, zip },
} = student1;

console.log(stdName, city);

// Array destructuring
const arr = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = arr;

console.log(secondColor);

const [, , lastColor] = arr; // skipping the first two elements
console.log(lastColor);

// Nested destructuring with arrays
const student2 = {
  name: "Tusher",
  age: 27,
  address: {
    city: "Dhaka",
    zip: 1200,
  },
  hobbies: ["traveling", "coding"],
};

const {
  name: studentName,
  address: { city: studentCity },
  hobbies: [firstHobby, secondHobby],
} = student2;

console.log(studentName, studentCity, secondHobby);
