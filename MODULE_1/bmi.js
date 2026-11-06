// input from terminal

const weight = process.argv[2];
const height = process.argv[3];

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return bmi;
}

console.log(calculateBMI(weight, height));
