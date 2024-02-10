let students = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 24 },
    { name: 'Charlie', age: 21 }
];



for(let student of students){
    console.log(`Имя: ${student.name}, Возраст: ${student.age}`)
}

students.push({name: 'Jessica', age: 32})


let studentname = "Jessica";

let findname = students.find (student => student.name === studentname)

if(findname){
    console.log('Ученик найден');
}else{
    console.log('Ученик не найден');
}