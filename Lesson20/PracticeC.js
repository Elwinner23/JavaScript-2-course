let students = [
 { name: 'Marcus', age: 19 },
 { name: 'Connor', age: 26 },
 { name: 'Kara', age: 23 }
];

for (let student of students)
{
  console.log(`Мое имя ${student.name}, и мой возраст ${student.age}`)
}

let newStudent = { name: 'Alice', age: 13 }


console.log(`Добавление нового ученика ${newStudent.name}`)
students.push(newStudent)
console.log(students)


let nameStudent = "Hank"
let R = false
for (let student of students)
{
  if (student.name == nameStudent)
  {
    console.log("Ученик найден")
    R = true
    break
  }
}

if (R == false)
{
  console.log("Ученик не найден")
}