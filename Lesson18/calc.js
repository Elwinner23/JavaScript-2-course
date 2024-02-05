var i = "do"
while (i){
  	i = prompt("Введите первое число или введите ex", "");
  	if (i === "ex") {
    	break;
  	}
  	var m = prompt("Введите второе число", "");
  
  	var op = prompt("Введите математический оператор", "");
    var result
    switch (op) {
        case '+':
          result = +i + +m;
          break;
        case '-':
          result = +i - +m;
          break;
        case '*':
          result = +i * +m;
          break;
        case '/':
          result = +i / +m;
          break;
        case '%':
          result = +i % +m;
          break;
        case '**':
          result = Math.pow(+i, +m)
          break;
        case '//':
          result = Math.floor(+i/+m)
          break;
        case '%':
          result = +i % +m
          break;
      }
    alert(result)
 }