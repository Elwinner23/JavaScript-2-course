// СОРТИРОВКА ВЫБОРОМ
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
    
    // Выводим результат в консоль
    const arr = [7, 15, 9, 35, 48];
    console.log(selectionSort(arr.slice()));