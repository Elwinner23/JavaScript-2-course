let students = [
    { name: 'Настя', age: 100 },
    { name: 'Даша', age: 17 },
    { name: 'Паша', age: 18 },
    { name: 'Саша', age: 16}
  ];
  
  for (let student of students) {
    console.log(`Имя: ${student.name}, Возраст: ${student.age}`);
  }
  
  students.push({ name: 'Маша', age: 17 });
  
  
  let poiskstudenta = "Даша"
  let found = false;
  
  for (let student of students) {
    if (student.name === poiskstudenta) {
      found = true;
      break;
    }
  }
  
  if (found) {
    console.log("Ученик найден");
  } else {
    console.log("Ученик не найден");
  }