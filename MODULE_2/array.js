// array
let array = ["A", "B", "C", "D"];

console.log(array); // print the whole array
console.log(array[0]); // print the first element of the array

let number = [100, 200, 300, 400];

console.log(array[0], number[0]); // print the first element of both arrays
console.log(array[1], number[100]); // print the second element of the first array and the 101st element of the second array (which is undefined)

array.push("E"); // add a new element to the end of the array
console.log(array); // print the whole array after adding a new element
array.pop(); // remove the last element of the array
console.log(array); // print the whole array after removing the last element
array.unshift("Z"); // add a new element to the beginning of the array
console.log(array); // print the whole array after adding a new element to the beginning
array.shift(); // remove the first element of the array
console.log(array); // print the whole array after removing the first element
array.splice(1, 1); // remove the second element of the array
console.log(array); // print the whole array after removing the second element
array.splice(1, 0, "X"); // add a new element to the second position of the array
console.log(array); // print the whole array after adding a new element to the second position
array.splice(1, 2, "Y", "Z"); // replace the second element of the array with a new element
console.log(array); // print the whole array after replacing the second element

const newArray = array.slice(1, 3); // create a new array with elements from index 1 to 2
console.log(newArray);
