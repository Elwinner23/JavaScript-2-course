let students = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 24 },
    { name: 'Charlie', age: 21 }
   ];

for (let student of students) {
    console.log(`Имя: ${student.name}, Возраст: ${student.age}`);
  }

students.push ({
  name: "Serg" , age: 16 
})

let searchStudent = "Serg"
let search = false;

  for (let student of students) {
    if (student.name === searchStudent) {
      found = true;
      break;
    }
  }
  
 if (found) {
    console.log("Ученик найден");
  } else {
    console.log("Ученик не найден");
  }