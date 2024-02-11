let students = [
    { name: 'Dasha', age: 17 },
    { name: 'Kirill', age: 18 },
    { name: 'Vania', age: 16 }
   ];

students.push({ name: 'Yura', age: 18 });

for (let st of students){
    console.log('Имя: ' + st.name + ", возраст: " + st.age);
}

let n = 'Dasha'
let res = false;
for (let st of students){
    if (st.name == n){
        res = true;
    }
}

if (res == true){
    console.log('Ученик найден');
}

else{
    console.log('Ученик не найден');
}

