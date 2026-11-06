// ===== Global scope =====
// Declared outside any function or block → can be accessed everywhere
let age = 21;

function sayAge() {
  console.log(age); // 21 → a function can access a global variable
}
sayAge();

{
  console.log(age); // 21 → a block can access a global variable
}

// ===== Local scope =====
// Any variable that is NOT global is local.
// Local scope has two types: function scope and block scope.

// ----- Local → Function scope -----
function showName() {
  let userName = "Rahim";
  console.log(userName); // Rahim → can access inside the function
}
showName();

// console.log(userName); // Error: userName is not defined → can't access a function variable from outside

// var in a function
function test() {
  var zip = 1207;
}
test();

// console.log(zip); // Error: zip is not defined → var can NOT be accessed outside a function

// ----- Local → Block scope -----
{
  let city = "Dhaka";
  console.log(city); // Dhaka → can access inside the block
}

// console.log(city); // Error: city is not defined → can't access let/const from outside the block

// var in a block
{
  var country = "Bangladesh";
}
console.log(country); // Bangladesh → var CAN be accessed outside a block

// ----- Block inside a function -----
function showInfo() {
  let userId = 101;

  if (true) {
    let area = "Mirpur";
    var road = 10;
    console.log(userId); // 101 → block can access function variable
  }

  console.log(road); // 10 → function can access var from block
  // console.log(area); // Error: area is not defined → function can't access let/const from block
}
showInfo();

// ----- Nested functions -----
function outer() {
  let outerName = "Outer";

  function inner() {
    let innerName = "Inner";
    console.log(outerName); // Outer → inner can access outer
  }
  inner();

  // console.log(innerName); // Error: innerName is not defined → outer can't access inner
}
outer();
