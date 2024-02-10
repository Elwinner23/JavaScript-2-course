let input = prompt('Введите через пробел два числа и оператор (сложение,вычитание, умножение, деление, возведение_в_степень, остаток_от_деления)').split(' ');
switch (input[2]){
  case 'сложение': 
    console.log(+input[0] + +input[1]);
    break;
  case 'вычитание':
    console.log(+input[0] - +input[1]);
    break;
  case 'умножение':
    console.log(+input[0] * +input[1]);
    break;
  case 'деление':
    console.log(+input[0] / +input[1]);
    break;
  case 'возведение_в_степень':
    console.log(Number(input[0]) ** Number(input[1]));
    break;
  case 'остаток_от_деления':
    console.log(Number(input[0]) % Number(input[1]));
    break;
}
