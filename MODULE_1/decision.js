// if else, switch case, ternary
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

let marks = 91;

if (marks > 100) {
  console.log("Invalid marks.");
} else if (marks >= 90 && marks <= 100) {
  console.log("Grade: A");
} else if (marks >= 80 && marks < 90) {
  console.log("Grade: B");
} else if (marks >= 70 && marks < 80) {
  console.log("Grade: C");
} else if (marks >= 60 && marks < 70) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Switch case grade
/*
  Grade calculator using switch(true)

  Why switch(true) and not switch(marks)?
  - switch compares its value with each case using === (strict equal).
  - switch(marks) would compare 91 === true, which is always false,
    so it would always fall to default (Grade: F). That's a bug.
  - switch(true) compares true === (condition), so the FIRST case
    whose condition is true will run.

  Order matters:
  - Cases are checked from top to bottom.
  - Because of that, we only need to check the lower limit
    (e.g. if marks >= 80 is reached, we already know marks < 90).

  Note: for range checks like this, if/else is more common.
  switch(true) is used here as an alternative.
*/

marks = 89;
switch (true) {
  case marks > 100: // anything above 100 is not a valid mark
    console.log("Invalid marks.");
    break;
  case marks >= 90: // 90 to 100
    console.log("Grade: A");
    break;
  case marks >= 80: // 80 to 89
    console.log("Grade: B");
    break;
  case marks >= 70: // 70 to 79
    console.log("Grade: C");
    break;
  case marks >= 60: // 60 to 69
    console.log("Grade: D");
    break;
  default: // below 60
    console.log("Grade: F");
}

// Ternary operator: a short way to write if/else in one line
// Format: condition ? doThisIfTrue : doThisIfFalse;
// If the condition is true, the part after ? runs; if false, the part after : runs

age = 13;

age >= 18
  ? console.log("You are an adult.")
  : console.log("You are not an adult.");

// Chained ternary with range checks
// Format: (condition1 && condition2) ? result : nextCheck ... : defaultResult
// && means BOTH conditions must be true for that result to be chosen

let grade =
  marks > 100
    ? "Invalid marks." // check 1: above 100
    : marks >= 90 && marks <= 100
      ? "Grade: A" // check 2: 90 to 100
      : marks >= 80 && marks < 90
        ? "Grade: B" // check 3: 80 to 89
        : marks >= 70 && marks < 80
          ? "Grade: C" // check 4: 70 to 79
          : marks >= 60 && marks < 70
            ? "Grade: D" // check 5: 60 to 69
            : "Grade: F"; // below 60 → default

console.log(grade);
