while (true) {
    let operator = prompt("Выберите операцию (+, -, *, **, /) или введите 'exit', чтобы выйти:");

    if (operator === "exit") {
        break;
    }

    let n1 = prompt("Введите первое число(или слово):");
    let n2 = prompt("Введите второе число(или слово):");

    let result;

    if (operator === "+") {
    	result = n1 + n2;
  	} 
  	else if (operator === "-") {
    	result = n1 - n2;
  	} 
 	else if (operator === "*") {
    	result = n1 * n2;
  	} 
  	else if (operator === "**") {
    	result = n1 ** n2;
  	}
  	else if (operator === "/") {
    	result = n1 / n2;
  	}
  	else {
    	result = "Неверный оператор!";
  	}

    console.log("Результат: " + result);
}