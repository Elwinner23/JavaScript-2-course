let r = true;
while (r == true) {
  	let operac = prompt('Введите для сложения 1, вычитания 2, умножение 3, деления 4');
  	let numbers = prompt('Введите два числа через пробел:').split(' ');
	if (operac == '1'){
      console.log(+numbers[0] + +numbers[1])
    }else if(operac == '2'){
    	console.log(+numbers[0] - +numbers[1])
    }else if(operac == '3'){
    	console.log(+numbers[0] * +numbers[1])
    }else if(operac == '4'){
    	console.log(+numbers[0] / +numbers[1])
    }
  	r = confirm('Оставить калькулятор включенным?')
}