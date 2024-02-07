let students = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 24 },
    { name: 'Charlie', age: 21 }
   ];
   for (let student of students){
       console.log(`Имя: ${student.name}, Возраст: ${student.age}`);
   }
   students.push( { name: 'Elvin', age: 'undefined' } );
   /* дальше не знаю */