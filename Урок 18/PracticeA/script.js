var op;

function calculator() {
  var result;

  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);

  switch(op){
    case '+':
      result = num1 + num2;
        break;
    
    case '-':
      result = num1 - num2;
        break;

    case '*':
      result = num1 * num2;
        break;
    
    case "/":
    if(num2 == 0)
    result = ("Нет решения");
  
    else
    result = num1 / num2;

    break;
    
}

document.getElementById("opertaor").innerHTML = op;
document.getElementById('result').innerHTML = result;
}