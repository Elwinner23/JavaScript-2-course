let fruits = ['apple', 'peach', 'pear', 'abricot']

for (let fruit of fruits){
    console.log(fruit);
}

fruits.push('kiwi');

let len = 4
if (fruits.length > len){
    console.log('Массив слишком длинный');
}

else{
    console.log('Массив подходит по длине');
}