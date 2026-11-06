// falsy value false, 0, "", null, undefined, NaN

/*
  FALSY VALUES
  In JavaScript, every value is treated as either "truthy" or "falsy"
  when it is used in a condition (like inside if()).

  Falsy = values that act like false. There are only a few:
    false      → the boolean false
    0          → the number zero (also -0)
    0n         → BigInt zero
    ""         → an empty string (no characters)
    null       → "no value" (set on purpose by the developer)
    undefined  → "no value yet" (variable declared but not given a value)
    NaN        → "Not a Number" (result of a broken math operation)

  Everything else is truthy, even "0", "false", [] and {}.
*/

// ---------- Example 1: falsy value inside if ----------
let age = 0;

if (age) {
  console.log("Age exists.");
} else {
  console.log("Age does not exist."); // runs, because 0 is falsy
}

// Careful: 0 is a real age value, but if(age) treats it as "no value".
// To check only for "no value" (null or undefined), use != null:
if (age != null) {
  console.log("Age has a value:", age); // runs, because 0 is not null/undefined
}

// ---------- Example 2: quick way to test any value ----------
// Boolean(value) shows whether a value is truthy (true) or falsy (false)
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean("0")); // true  (a string with a character is truthy)
console.log(Boolean([])); // true  (an empty array is still truthy)

// ---------- Example 3: how NaN is created ----------
// Multiplying a number by text that is not a number gives NaN
console.log(age * "hello"); // NaN

// ---------- Example 4: surprising typeof results ----------
// NaN means "Not a Number", but its type is still "number"
console.log(typeof NaN); // "number"

// null means "no value", but typeof says "object".
// This is an old bug in JavaScript that was never fixed (to avoid breaking old code).
console.log(typeof null); // "object"
