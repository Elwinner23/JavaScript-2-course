const numbers = [2, 1, 7, 5, 9, 100, 3, 20];
numbers = numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);

//Метод sort() сортирует элементы массива. Внутри sort() используется функция сравнения
//Функция сравнения возвращает результат. a - b, если он отрицателен, a будет расположено перед b, если положителен, b будет расположено перед a

const numbers2 = [2, 1, 7, 5, 9, 100, 3, 20];

function sort1(array) {
    const length = array.length;
    
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) { //Проверяем, больше ли текущий элемент array[j] следующего элемента array[j + 1]. 
          // Меняем элементы местами
          const temp = array[j]; //временно сохраняем значение array[j]
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    
    return array;
  }

  sort1(numbers2)
  console.log(numbers2)


  