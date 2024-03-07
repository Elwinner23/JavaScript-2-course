//1 (пузырьковый вроде)
let numbers = [4, 2, 5, 1, 3, 12, 56];
numbers.sort((a, b) => { //Функция сортировки принимает два значения массива для сравнения
  return a - b; //для сортировки по возрастанию из первого числа вычитается второе, результат (положительный, отрицательный, 0) влияет на изменение порядка элементов массива
});
console.log(numbers); //вывод отсортированного массива


//2
let num = new Float64Array([234, 3436, 1231, 235, 12, 345]); //создаем не просто массив, а массив вещественных чисел, чтобы сортировка была по числовому значению, а не по алфавиту
console.log(num.sort()) //выводим отсортированный массив

//3
let array = [35, 23, 12, 34, 1, 3, 0]; //создаем массив чисел
function sorting(mass){
  for (let i = 0; i < mass.length-1; i++){  //создаем двойной цикл
    for (let j = 0; j < mass.length-1-i; j++){ 
      if (mass[j] > mass[j+1]){ //сравниваем число с следующим за ним, если число больше чем следующее, меняем местами
        let x = mass[j];
        mass[j] = mass[j+1];
        mass[j+1] = x;
      }
    }
  } 
  return mass;  //возвращаем массив
}

console.log(sorting(array))
