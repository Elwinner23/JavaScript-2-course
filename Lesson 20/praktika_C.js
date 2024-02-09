let students = [{name: 'Alice', age: 22 },{ name: 'Bob', age: 24 }, { name: 'Charlie', age: 21 }];
let r; let name = prompt('Введите имя студента:');
for (let item1 of students){console.log(item)};
students.push({ name: 'Tony', age: 20 });
for (let item2 of students){item2.name == name ? r = true : r = false};
console.log(r ? "Ученик найден" : "Ученик не найден");