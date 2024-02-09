let fruits = ["apple", "pearch", "pear", "banana"];

for (let fruit of fruits) {
  console.log(fruit.charAt(0).toUpperCase() + fruit.slice(1));
}

let fruitsLen = fruits.length;

if (fruitsLen > 100) {
  alert("Братан, ты где столько фруктов взял???");
} else if (fruitsLen < 3 && fruitsLen >= 0) {
  alert("Че-то маловато, а ну ка добавь еще!!!");
} else if (fruitsLen < 0) {
  alert("Выздоравливай..........\nДемон...........");
} else {
  alert("Нормально, красава, но зарплату все равно не получишь.......");
}
