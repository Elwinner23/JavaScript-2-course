//быстрая сортировка
let numbers = [5, 2, 1, 3, 4];
function quickSort(array) {
    if (array.length <= 1) {
      return array; // Если массив уже отсортирован
    }
  
    const pivot = array[0]; // Выбираем первый элемент массива в качестве опорного
    const left = []; // Массив для элементов меньше опорного
    const right = []; // Массив для элементов больше опорного
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]); // Заполняем массив элементов меньше опорного
      } else {
        right.push(array[i]); // Заполняем массив элементов больше опорного
      }
    }
  
    return quickSort(right).concat(pivot, quickSort(left)); // Сортируем и объединяем массивы
}

  console.log(quickSort(numbers));