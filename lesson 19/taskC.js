let a = prompt("Угадайте число c нескольких попыток");
a = Number(a);
let b = prompt("2 Попытка");
b = Number(b);
let c = prompt("3 Попытка");
c = Number(c);
let d = Math.floor(Math.random() * 101);

if (a == d) {
  alert("Ты ванга!");
}
else if (b == d) {
  alert("Ты ванга на 50%");
}
else if (c == d) {
  alert("Ты ванга на 33%");
}
else {
  alert ("Было близко, но не угадал(");
}