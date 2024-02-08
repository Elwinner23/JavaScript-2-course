const n = [10, 27, 33, 25, 5];
console.log('Элементы массива:');
for (let i = 0; i < n.length; i++) {
    console.log(n[i]);
}
let s = 0;
let i = 0;
while (i < n.length) {
    s += n[i];
    i++;
}
console.log('Сумма всех элементов массива:', s);