var i = "do"
while (i){
  	i = prompt("Введите первое число или введите ex", "");
  	if (i === "ex") {
    	break;
  	}
  	var m = prompt("Введите второе число", "");
  
  	var op = prompt("Введите математический оператор (+ сложение, - вычитание, * умножение, / деление, % остаток от деления, ** возведение в степень", "");
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
        case '%':
          result = +i % +m
          break;
        default:
            alert("Вы ввели неверный оператор")
      }
    alert(result)
 }