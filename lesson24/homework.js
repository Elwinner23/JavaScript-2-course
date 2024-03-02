
//1 способ 
const sort = (array) => {  
    if (array.length <= 1) { //проверим длину массива, если меньше 1 элемента то возвращаем его
        return array;
    }

const base = array[0]; // выберем первый элемент за опорный
const less = array.slice(1).filter(el => el <= base);  // относительно опорного элемента относим числа которые меньше
const larger = array.slice(1).filter(el => el > base); // относительно опорного элемента относим числа которые больше

return sort(less).concat(base, sort(larger)); //складываем полученные масивы, отсортировав их методом sort и опорный элемент
}

console.log(sort([31, 12, 104, 5, 777])) // выводим отсортированный массив

//2 способ
const messy = [12, 74, 15,3]; //создаем массив
const  increasing = messy.sort((a,b) => a - b); //при помощи метода сорт, изменяем исходный массив
//внутри сортируем при помощи функции, если a>b, то сначала идет б, если a<b, то сначала идет б
console.log(messy); //выводим массв

//3 cпособ
function sortArr(arr) { //создаем функцию
    for (let i = 0; i < arr.length; i++) { //проходим циклом по длине массива, 1 прохода будет не досаточно, поэтому добавляем еще цикл
        for (let x = 0; x < arr.length -1 -i; x++) { //добавили еще цикл, оптимизировав, кол-во перебираемых элементов
            if (arr[x] > arr[x + 1]) { //создаем условие, что если текущей элемент больше следущего, то надо поменять их местами
                const a = arr[x] //запоминаем 1 число
                arr[x] = arr[x + 1] // меняем первое на второе
                arr[x + 1] = a; //меняем второе на первое
            }
        }
    }
console.log(arr) //выведем сортировку
}
const test =[132, 5324, 1, 210, 78, 21];
sortArr(test)
