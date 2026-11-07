let student = {
  name: "Azminur",
  id: 101,
  marks: {
    bangla: 90,
    math: 100,
    english: 85,
    socialScience: 95,
    science: 95,
    islamicStudies: 100,
  },
};

let totalMarks = 0;
let totalSubjects = 0;

for (let subject in student.marks) {
  totalMarks += student.marks[subject]; // add the marks of each subject to totalMarks
  totalSubjects++; // increment totalSubjects by 1 for each subject
}

let averageMarks = (totalMarks / totalSubjects).toFixed(2); // calculate the average marks and round to 2 decimal places

if (averageMarks >= 80) {
  console.log("Passed with destination. Got", averageMarks, "%");
} else if (averageMarks >= 60 && averageMarks < 80) {
  console.log("Passed. Got", averageMarks, "%");
} else {
  console.log("Failed. Got", averageMarks, "%");
}
