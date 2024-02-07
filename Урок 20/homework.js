let number = Math.floor(Math.random() * 10) + 1;
let jopa = false
let h = 10
let p = 0
while (h > 0){
	let a = prompt("Введите ваше число:");
  	if (a == number){
  		jopa = true
  break;}
	else if (a<number){
  		alert('ЗАГАДАННОЕ ЧИСЛО БОЛЬШЕ ВАШЕГО!');
      p++
	}
	else if (a>number){
		alert("ЗАГАДАННОЕ ЧИСЛО МЕНЬШЕ ТВОЕГО!");
      p++
	}
	h --; }
if (jopa){
  	alert('happy')
    alert('Вы потратили: ' + p)
}
else{
	alert("Вы неудачни, было загадано: " + number)
}