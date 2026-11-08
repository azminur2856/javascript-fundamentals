// Solution to Question 1

function describeValue(value) {
  const type = typeof value;

  let truthyOrFalsy;
  if (value) {
    truthyOrFalsy = "truthy";
  } else {
    truthyOrFalsy = "falsy";
  }

  return `${type} | ${truthyOrFalsy}`;
}

// Solution to Question 2

function getDayType(day) {
  switch (day.toLowerCase()) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}

// Solution to Question 3

function validateUsername(username) {
  if (username.length < 4) {
    return "Too Short";
  } else if (username.includes(" ")) {
    return "No Space Allowed";
  } else if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  } else {
    return "Available";
  }
}

// Solution to Question 4

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  const minimumFare = 50;
  const perKmFareAfterMinimum = 15;
  const waitingChargePerMinute = 2;
  const nightPercentage = 0.2;

  let fare = minimumFare;

  if (distance > 2) {
    fare += (distance - 2) * perKmFareAfterMinimum;
  }

  fare += waitingMinutes * waitingChargePerMinute;

  if (isNight) {
    fare += fare * nightPercentage;
  }

  return fare;
}

// Solution to Question 5

const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  }

  if (ballsLeft <= 0) {
    return "Lost";
  }

  const requiredRate = (runsNeeded / ballsLeft) * 6;

  if (requiredRate <= 6) {
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`;
  } else if (requiredRate > 6 && requiredRate <= 12) {
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`;
  } else {
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`;
  }
};
