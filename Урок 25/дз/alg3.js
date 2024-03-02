// БЫСТРАЯ СОРТИРОВКА
function quickSort(arr) {
    if (arr.length <= 1) {
    return arr;
    }
    
    const pivot = arr[0]; // Выбираем первый элемент в качестве опорного
    const left = [];
    const right = [];
    
    // Разбиваем массив на элементы меньше и больше опорного
    for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    
    // Сортируем левую и правую части и объединяем их с опорным элементом
    return quickSort(left).concat(pivot, quickSort(right));
    }
    
    // Выводим результат в консоль
    const arr = [0, 117, 28, 36, 5];
    console.log(quickSort(arr.slice()));