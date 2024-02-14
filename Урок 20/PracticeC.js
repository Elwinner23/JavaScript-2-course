let students = [
  { name: 'Alice', age: 22},
  { name: 'Bob', age: 24},
  { name: 'Charlie', age: 21}
];
for(let student of students)
{
  console.log(`Имя: ${student.name}, Возвраст: ${student.age}`);
}
students.push({ name: 'Nikita', age: 19});

let find_student = students.find(student => student.name == prompt("Введите имя студента"));
if(find_student)
  console.log(`Студент ${find_student.name} найден`);
else console.log('Студент с таким именем не найден');