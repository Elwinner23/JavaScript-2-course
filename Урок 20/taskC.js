let students = [
    { name: 'Dasha', age: 17 },
    { name: 'Yra', age: 19 },
    { name: 'Gleb', age: 18 }
  ];
  
  students.push({ name: 'Nikita', age: 17 });
  
  for (let name of students) {
    console.log(name);
  }
  for (let age of students) {
    console.log(age);
  }for (let student of students) {
    console.log(student);
  }
  
  let name = prompt('Введите имя');
  for (let i = 0; i < students.length; i++) {
      if (name == students[i].name) {
          alert('Ученик найден');
      } 
      else {
          alert('Ученик не найден');
      }
      }


/*Второй вариант
let name = prompt('Введите имя');
switch (name) {
  case (name == students[0].name):
    alert('Имя найдено');
    break;
  case (name == students[1].name):
    alert('Имя найдено');
    break;
  case (name == students[2].name):
    alert('Имя найдено');
    break;
  case (name == students[3].name):
    alert('Имя найдено');
    break;
  default:
    alert('Имя не найдено');
}*/


/*Третий вариант
let name = prompt('Введите имя');
switch (name) {
  case 'Dasha':
    alert('Имя найдено');
    break;
  case 'Yra':
    alert('Имя найдено');
    break;
  case 'Gleb':
    alert('Имя найдено');
    break;
  case 'Nikita':
    alert('Имя найдено');
    break;
  default:
    alert('Имя не найдено');
}*/


/*Вариант 4 сложный
let name = prompt('Введите имя');
let age = prompt('Введите возраст');
switch (name) {
  case 'Dasha':
    alert('Имя найдено');
    break;
  case 'Yra':
    alert('Имя найдено');
    break;
  case 'Gleb':
    alert('Имя найдено');
    break;
  case 'Nikita':
    alert('Имя найдено');
    break;
  default:
    students.push({ name: name, age: Number(age) });
}

console.log(students);
*/