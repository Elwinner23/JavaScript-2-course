let fruits = ['apple', 'banana', 'pear', 'orange'];
fruits.push('pamela');
for (let fruit of fruits) {
 console.log(fruit);
}
fruits.length > 4 ? console.log('Массив подходит по длине') : console.log ('Массив слишком длинный')