let students = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 24 },
  { name: "Charlie", age: 21 },
];
let targetName = "Bob";
let nameFlag = false;

for (let student of students) {
  alert(`Имя: ${student.name}\nВозраст: ${student.age}`);
  if (student.name === targetName) nameFlag = true;
}

students.push({ name: "Elvin", age: 24 });

console.log(
  [
    `${targetName} нет в списке студенттов`,
    `${targetName} есть в списке студенттов`,
  ][Number(nameFlag)]
);
