// string
let firstName = "Azminur";
let lastName = "Rahman";
let fullName = firstName + " " + lastName; // Concatenation of strings
console.log(fullName); // Output: Azminur Rahman

fullName = `${firstName} ${lastName}`; // Using template literals
console.log(fullName); // Output: Azminur Rahman

let greeting = "Hello, " + firstName + "!"; // Concatenation with a string literal
console.log(greeting); // Output: Hello, Azminur!

greeting = `Hello, ${firstName}!`; // Using template literals
console.log(greeting); // Output: Hello, Azminur!

let newLineString = "This is a string\nthat spans multiple lines.";
console.log(newLineString);

let multiLineString = `This is a string \nthat spans multiple lines.`;
console.log(multiLineString);

let randomString = 'I am learning "JavaScript".';
console.log(randomString);

console.log(randomString.length); // Output: 27
console.log(randomString.toUpperCase()); // Output: I AM LEARNING "JAVASCRIPT".
console.log(randomString.toLowerCase()); // Output: i am learning "javascript".
