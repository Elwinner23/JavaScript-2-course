let students = [
    { name:"Alise", age: 22 },
    { name:"Bob", age: 18 },
    { name:"Char", age: 10 }
];

for (let i = 0; i < students.length; i++) {
    let element = students[i];
    console.log(`Имя: ${element.name}, Влзраст: ${element.age}`);
}

let name = "Bob";
let text = "Ученик не найден";

for (let i = 0; i < students.length; i++) {
    let element = students[i];
    if (element.name = name){
        text = "Ученик найден";
        break;
    }
}
console.log(text);
