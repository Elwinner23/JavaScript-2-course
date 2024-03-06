//Пузырьковая сортировка
function sort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // меняем элементы местами
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// Пример использования:
var array = [3, 6, 2, 8, 1, 9, 4];
console.log(sort(array)); // Выводит: [1, 2, 3, 4, 6, 7, 8, 9]

// Алгоритм сортировки выбором
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Меняем местами текущий элемент со значением наименьшего
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

// Алгоритм сортировки вставкой
function insertionSort(arr) {
  // Проходим по всем элементам массива, начиная со второго
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    // Сдвигаем все элементы, которые больше текущего, на одну позицию вправо
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    // Вставляем текущий элемент на свою позицию
    arr[j + 1] = current;
  }
  return arr;
}