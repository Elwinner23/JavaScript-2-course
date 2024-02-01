let a;
let b;
let x;
let result;

while (true) { 
  
  x = prompt("Введите математический оператор или 'выход', если хотите выйти:"); 

  
  if (x === "выход") { 
    break; 
  } 
	a = Number(prompt("Введите первое число:"));
	b = Number(prompt("Введите второе число:"));
  
    if (x === "+") {
    	result = a + b;
  	} 
  	else if (x === "-") {
    	result = a - b;
  	} 
 	else if (x === "*") {
    	result = a * b;
  	} 
  	else if (x === "/") {
    	result = a / b;
  	}
  	else if (x === "^") {
    	result = a ** b;
  	}

    else if (x === "%") {
    result = a % b;
    } 
  else {
    result = "Неверный оператор!";
  }

    console.log("= " + result);
}