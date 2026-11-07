//mini project
let students = [
  {
    id: 101,
    name: "Azminur",
    age: 25,
    department: "CSE",
  },
  {
    id: 102,
    name: "Rahman",
    age: 26,
    department: "EEE",
  },
  {
    id: 103,
    name: "Tusher",
    age: 27,
    department: "IBA",
  },
];

function addStudent(name, age, dept) {
  let newID = students.length > 0 ? students[students.length - 1].id + 1 : 101;

  let newStudent = {
    id: newID,
    name: name,
    age: age,
    department: dept,
  };
  students.push(newStudent);
  console.log("New student added successfully:", newStudent);
}

addStudent("Mehedi", 22, "CSE");

function getAll() {
  for (let student of students) {
    console.log(
      `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Department: ${student.department}`,
    );
  }
}

getAll();

function findStudentByID(id) {
  let foundStudent = null;

  for (let student of students) {
    if (student.id === id) {
      foundStudent = student;
      break;
    }
  }
  if (foundStudent) {
    console.log(`Student found:`, foundStudent);
  } else {
    console.log(`404 - Student with ID ${id} not found.`);
  }
}

findStudentByID(101);

function deleteStudentByID(id) {
  let targetStudentIndex = -1;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      targetStudentIndex = i;
      break;
    }
  }
  if (targetStudentIndex != -1) {
    let deletedStudent = students.splice(targetStudentIndex, 1);
    console.log(
      `Student deleted: ${deletedStudent[0].name} (ID: ${deletedStudent[0].id})`,
    );
  } else {
    console.log(`404 - Student with ID ${id} not found.`);
  }
}

deleteStudentByID(104);
getAll();
