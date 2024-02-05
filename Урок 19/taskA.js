let a = Number(prompt("Введите первое число:"));
let b = Number(prompt("Введите второе число:"));
let n = prompt("Введите введите операцию: +, -, **, /, %");
let fin;
switch
(n) {
	case "+":
 		fin = a + b
 break;
 	case "-":
    	fin = a - b
 break;
  	case "**":
    	fin = a ** b
 break;
    case "/":
    	fin = a / b
 break;
    case "%":
    	fin = a % b
 break;
default:
}
console.log(fin)