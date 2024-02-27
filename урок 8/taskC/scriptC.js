function CategorySum(transactions) {
    let categorySum = {};

    for (let transaction of transactions) {
      let category = transaction.category;
      let amount = transaction.amount;
  
      if (category in categorySum) {
        categorySum[category] += amount;
      } 
      else {
        categorySum[category] = amount;
      }
    }
  
    return categorySum;
}
  
const transactions = [
    { category: 'Еда', amount: 100 },
    { category: 'Транспорт', amount: 50 },
    { category: 'Еда', amount: 75 },
    { category: 'Коммуналка', amount: 300 },
    { category: 'Транспорт', amount: 100 },
    { category: 'Еда', amount: 50 }
];
  
const categorySum = CategorySum(transactions);
console.log(categorySum);
  