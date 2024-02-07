let students = [
    { name: 'Juliana', age: 17 },
    { name: 'Vlad', age: 18 },
    { name: 'Svetlana', age: 23 },
    { name: 'Viktor', age: 31 }
];

for (let student of students){
    console.log(`Имя студента: ${student.name}, возраст студента: ${student.age}`)
}

students.push({ name: 'Sonya', age: 17 })

let name_find_s = 'Soya'
let flag = 0
for (let student of students){
    if (student.name == name_find_s){
        console.log('Ученик найден')
        flag = 1
    }
}
if(flag == 0){
    console.log('Ученик не найден')
}
