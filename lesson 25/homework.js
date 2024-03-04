// Массив для сортировки
let arr = [13, 22, 5, 1, 10];

//Сортировка пузырьком 
function bubbleSort(arr) {
    let len = arr.length;
    // Внешний цикл проходит по всем элементам массива
    for (let i = 0; i < len; i++) {
    // Внутренний цикл сравнивает и меняет пары соседних элементов
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
            // Если текущий элемент больше следующего, меняем их местами
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
  return arr;
}

//Сортировка вставками
function insertionSort(arr) {
    let len = arr.length;
    // Внешний цикл проходит по всем элементам массива, начиная со второго элемента
    for (let i = 1; i < len; i++) {
        let key = arr[i]; // Сохраняем текущий элемент
        let j = i - 1;
    // Внутренний цикл сдвигает элементы массива, большие чем key, на одну позицию вправо
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
    arr[j + 1] = key; // Вставляем key в правильную позицию
  }
  return arr;
}

//сортировка выбором
function selectionSort(arr) {
    const n = arr.length;
    // Проходим по всем элементам массива
    for (let i = 0; i < n; i++) {
    // Находим минимальный элемент в оставшейся части массива
    	let min = i;
    	for (let j = i + 1; j < n; j++) {
    		if (arr[j] < arr[min]) {
    			min = j;
    			}
    		}
    // Перемещаем минимальный элемент в начало (на текущую позицию i)
    	[arr[i], arr[min]] = [arr[min], arr[i]];
    	}
    return arr;
}

console.log(bubbleSort(arr));
console.log(insertionSort(arr));
console.log(selectionSort(arr.slice()));