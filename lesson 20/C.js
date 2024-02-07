let students = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 24 },
    { name: 'Charlie', age: 21 }
  ];
  
  for (let student of students) {
    console.log(`Имя: ${student.name}, Возраст: ${student.age}`);
  }
  
  let news = { name: 'John', age: 23 };
  students.push(news);
  
  let studentNameToFind = 'Bob';
  let hasStudent = students.some(student => student.name === studentNameToFind);
  if (hasStudent) {
    console.log('Ученик найден');
  } else {
    console.log('Ученик не найден');
  }