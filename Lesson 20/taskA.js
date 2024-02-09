let nums = [1, 2, 3, 10, 20, 30, 100, 200, 300, 1000];
let total;

for (let num of nums) {
  console.log(num);
}

let i = 0;

while (i < nums.length) {
  total += nums[i];
  i++;
}

console.log(`Сумма элементов = ${total}`);

