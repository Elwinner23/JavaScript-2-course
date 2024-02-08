let students = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 24 },
    { name: 'Charlie', age: 21 }
];
for (let student of students) {
    console.log(`Имя: ${student.name}, Возраст: ${student.age}`);
}
students.push({ name: 'William', age: 23 });
const studentFound = students.some(student => student.name === 'John');
if (studentFound) {
    console.log('Ученик найден');
} else {
    console.log('Ученик не найден');
}
