let a = prompt("Угадайте число");
a = Number(a);
let b = Math.floor(Math.random() *101);
a == b ? console.log("Да ты Ванга!") : console.log("Было близко(");