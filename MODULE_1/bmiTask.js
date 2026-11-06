const weight = Number(process.argv[2]);
const height = Number(process.argv[3]);

const underweightAdvice = `1. Focus on nutrient-dense meals with healthy fats and proteins.
2. Incorporate strength training to build muscle mass safely.
3. Consult a professional to check for nutritional deficiencies.`;

const normalWeightAdvice = `1. Keep up the great work with a balanced, whole-food diet.
2. Maintain a consistent routine of regular physical activity.
3. Monitor your weight monthly to stay on track easily.`;

const overweightAdvice = `1. Focus on daily portion control and reducing sugary drinks.
2. Aim for at least 30 minutes of brisk daily exercise.
3. Focus on small, sustainable changes for long-term health.`;

const obeseAdvice = `1. Consult a doctor or dietitian for a structured wellness plan.
2. Start with safe, low-impact movements like walking or swimming.
3. Prioritize gradual, steady health improvements over quick fixes.`;

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return bmi;
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal Weight (Fit)";
  } else if (bmi < 30) {
    return "Overweight";
  } else if (bmi < 35) {
    return "Obesity Class I";
  } else if (bmi < 40) {
    return "Obesity Class II";
  } else {
    return "Obesity Class III";
  }
}

function displayAdvice(bmiCategory) {
  switch (bmiCategory) {
    case "Underweight":
      console.log(underweightAdvice);
      break;
    case "Normal Weight (Fit)":
      console.log(normalWeightAdvice);
      break;
    case "Overweight":
      console.log(overweightAdvice);
      break;
    case "Obesity Class I":
    case "Obesity Class II":
    case "Obesity Class III":
      console.log(obeseAdvice);
      break;
    default:
      console.log("No advice available for this category.");
      break;
  }
}

function main() {
  if (
    !Number.isFinite(weight) ||
    !Number.isFinite(height) ||
    weight <= 0 ||
    height <= 0
  ) {
    console.log(
      "Please provide a valid weight (kg) and height (m), both greater than 0.",
    );
    console.log("Usage: node bmiTask.js <weight-kg> <height-m>");
    console.log("Example: node bmiTask.js 70 1.75");
    return;
  }

  if (height < 0.5 || height > 3) {
    console.log(
      "Height must be in meters, between 0.5 and 3 (e.g. 175 cm = 1.75).",
    );
    return;
  }

  const bmi = calculateBMI(weight, height);
  const bmiCategory = getBMICategory(bmi);

  console.log(`Weight: ${weight} kg\nHeight: ${height} m`);
  console.log(`Your BMI is ${bmi.toFixed(2)} kg/m².`);
  console.log(`This indicates: ${bmiCategory}`);
  displayAdvice(bmiCategory);
}

main();
