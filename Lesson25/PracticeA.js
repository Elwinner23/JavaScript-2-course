function getPositiveNums(array)
{
	let newArray = array.filter(item=> item > 0); 
	return newArray
}

let countNums = prompt("Введите количество чисел в массиве")

countNums++
let array1 = [];
let num;
for(let i = 1; i < countNums; i++)
{
  num = prompt(`Введите ${i} число`);
  array1.push(Number(num));
}

console.log(getPositiveNums(array1))
