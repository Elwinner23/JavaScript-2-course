let fruits = ['apple', 'banana', 'orange', 'fig']
let big_f = fruits.map(function(x){ return x.toUpperCase(); })
for (let fruit of big_f){
    console.log(fruit);
}

fruits.push('mango')
if (fruits.length <= 4){
    console.log('Массив подходит по длине')
}
else{
    console.log('Массив слишком длинный')
}


