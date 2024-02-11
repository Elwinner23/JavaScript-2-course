let number = [3, 6, 2, 7, 124, 4, 56.5];
for (let el = 0; el < number.length; el++){
    console.log(number[el]);
}

let i = 0;
let sum = 0;
while (i < number.length){
    sum += number[i];
    i++;
}
console.log(sum)