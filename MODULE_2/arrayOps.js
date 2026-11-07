// array ops

let marks = [50, 60, 70, 59, 80, 90];

// Find the maximum marks in the array using a for loop
let max = marks[0]; // initialize max with the first element of the marks array

// Start the loop from the second element of the marks array because we have already initialized max with the first element.
for (let i = 1; i < marks.length; i++) {
  if (marks[i] > max) {
    max = marks[i];
  }
}

console.log(`The maximum marks is: ${max}`);

// Find the minimum marks in the array using a for loop
let min = marks[0]; // initialize min with the first element of the marks array

// Start the loop from the second element of the marks array because we have already initialized min with the first element.
for (let i = 1; i < marks.length; i++) {
  if (marks[i] < min) {
    min = marks[i];
  }
}

console.log(`The minimum marks is: ${min}`);

// Find the sum of all marks in the array using a for of loop
let sum = 0; // initialize sum to 0
for (let mark of marks) {
  sum += mark; // add each mark to the sum
}
console.log(`The sum of all marks is: ${sum}`);

// Find the average of all marks in the array using a for of loop
let average = sum / marks.length;
console.log(`The average marks is: ${average}`);

let reversedMarks = [];
//[50, 60, 70, 59, 80, 90]
// Find the reverse of the marks array using a for loop
for (let i = marks.length - 1; i >= 0; i--) {
  reversedMarks.push(marks[i]); // add each mark to the reversedMarks array in reverse order
}

console.log("The reversed marks array is:", reversedMarks);
