// Алгоритм пузырьковой сортировки
let numbers = [5, 2, 1, 3, 4];
function bubbleSort(array) { // Пробегаем по всем элементам массива
    for (let i = 0; i < array.length - 1; i++) { // Внутренний цикл для сравнения и обмена элементов
      for (let j = 0; j < array.length - i - 1; j++) { // Если текущий элемент больше следующего, меняем их местами
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
}
console.log(bubbleSort(numbers));