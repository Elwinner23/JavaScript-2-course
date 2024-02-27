

const transactions = [
    { category: 'Еда', amount: 100 },
    { category: 'Одежда', amount: 2000 },
    { category: 'Обувь', amount: 3000 },
    { category: 'Еда', amount: 250 },
    { category: 'Аксессуары', amount: 700 },
    { category: 'Обувь', amount: 5000 },
  	{ category: 'Одежда', amount: 300 },
	{ category: 'Аксессуары', amount: 4000 },
  	{ category: 'Еда', amount: 1400 },
  ];
  
  
function calculateSumma(transactions) {
  return transactions.reduce((accumulator, transaction) => {
    const category = transaction.category;
    if (!accumulator[category]) {
      accumulator[category] = 0;
    }
    accumulator[category] += transaction.amount;
    return accumulator;
  }, {});
}

const categorySumma = calculateSumma(transactions);

console.log(categorySumma);