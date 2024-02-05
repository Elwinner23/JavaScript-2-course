let number = Math.floor(Math.random() * 100) + 1;
let jopa = false
let h = 2
while (h > 0){
	let a = prompt("Введите ваше число:");
  	if (a == number){
  		jopa = true
  break;}
	else if (a<number){
  		alert('ЗАГАДАННОЕ ЧИСЛО БОЛЬШЕ ВАШЕГО!');
	}
	else if (a>number){
		alert("ЗАГАДАННОЕ ЧИСЛО МЕНЬШЕ ТВОЕГО!");
	}
	h --; }
if (jopa){
  	alert('happy')
}
else{
	alert("Вы неудачни, было загадано: " + number)
}