let znak = prompt("Что вы хотите сделать? + - сложение, - - вычитание, * - произведение, / - частное, ^ - возведение в степерь, % - остаток от деления");
let a = prompt("Введите 1 число:");
let b = prompt("Введите 2 число:");
switch(znak)
{
  case "+":
    {
      alert(+a + +b);
      break;
    }
  case "-":
    {
      alert(a - b);
      break;
    }
  case "*":
    {
      alert(a * b);
      break;
    }
  case "/":
    {
      alert(a / b);
      break;
    }
  case "^":
    {
      alert(a**b);
      break;
    }
  case "%":
    {
      alert(a%b);
      break;
    }
}