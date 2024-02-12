const n = Math.floor(Math.random() * 100) + 1;
let c = 0;
let b = false;

while (!b) {
    let user = parseInt(prompt("Угадайте число от 1 до 100"));
    c++;
    if (user === n) {
        b = true;
        alert(`Поздравляем! Вы угадали число за ${c} ${c === 1 ? 'попытку' : 'попыток'}!`);
    } 
  	else if (user < n) {
        alert("Попробуйте больше!");
    } 
  	else {
        alert("Попробуйте меньше!");
    }
}