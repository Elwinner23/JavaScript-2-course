const splice = [6, 4, 3, 2, 10, 55,67]
//создаем массив
splice.splice(1, 0, 5)
//метод с помощью которого можно удалять и добавлять новые
//обьекты(№ элемента, сколько удаляем, что добавляем)
console.log(splice)

splice.unshift(9, 8, 7)
//добавляет в начало массива числа
console.log(splice)

const filteres = splice.filter(item => item % 3 === 0)
//метод фильтрует массив по заданному условию
console.log(filteres)