let fruits = ['яблоко', 'апельсин', 'банан', 'манго'];
for (let fruit of fruits){
  console.log(fruit.toUpperCase())
}
fruits.push('киви');
if (fruits.length > 5){
	console.log ('Масив совсем плохо, уменьшите!');
}
else {
	console.log ('С масиво все ок')
}
/*Я специально с ошибками*/