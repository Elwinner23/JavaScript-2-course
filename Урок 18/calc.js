while (1){
  let a = Number(prompt("Введите число a: "))
  let b = Number(prompt("Введите число b: "))
  let w = prompt("Выберите действие (+, -, *, /) или можете выйти из приложения (1): ")
  let ans

  if (w == "+")
  {
    ans = a + b
  }
  else if (w == "-")
  {
    ans = a - b
  }
  else if (w == "*")
  {
    ans = a * b
  }
  else if (w == "/")
  {
    ans = a / b
  }
  else if (w == 1)
  {
    alert("Спасибо за то, что пользуетесь нашим приложением!")
    break
  }
  else
  {
    alert("Что-то пошло не так, попробуйте еще")
  }

  alert(`Ответ: ${ans}`)
}