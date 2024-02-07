let students = [
    { name: 'Juliana', age: 17 },
    { name: 'Vlad', age: 18 },
    { name: 'Svetlana', age: 23 },
    { name: 'Viktor', age: 31 }
];

for (let student of students){
    console.log(student)
}

students.push({ name: 'Sonya', age: 17 })

const filtered = (name) => {
    return students.filter((item) => {
      return item.name === name;
    });
}
  
console.log(filtered('Sonya'));