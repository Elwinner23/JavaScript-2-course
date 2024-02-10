let a = prompt("Введите число");
a = Number(a);
let b = prompt("Введите еще 1 число");
b = Number(b)
let c = prompt("Введите математический оператор");

switch (c) {
  case "+" : alert(a+b);
    break;
 case "*" : alert(a*b);
    break;
 case "-" : alert(a-b);
    break;
 case "/" : alert(a/b);
    break;
 case "**" : alert(a**b);
    break;
 case "%" : alert(a%b);
    break;
default: "oops, error";
};
console.log(`Your result ${c}`);