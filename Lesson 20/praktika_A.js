let numbers = [12, 876, 123, 34353, 456];
let i = 0; let cnt = 0;
for (let num of numbers){
  console.log(num);
}
while (i < numbers.length){
  cnt += numbers[i];
  i ++;
}
console.log(cnt)
