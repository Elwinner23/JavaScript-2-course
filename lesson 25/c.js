const transactions = [
    { category: 'food', amount: 50 },
    { category: 'food', amount: 80 },
    { category: 'clothing', amount: 120 },
    { category: 'clothing', amount: 50 },
    { category: 'electronics', amount: 200 },
    { category: 'food', amount: 30 },
  ];
  
  function calculSum(transactions) {
    const categorySum = {};
  
    transactions.forEach(transaction => {
      const { category, amount } = transaction;
      
      if (categorySum[category]) {
        categorySum[category] += amount;
      } else {
        categorySum[category] = amount;
      }
    });
  
    return categorySum;
  }
  
  const sum = calculSum(transactions);
  console.log(sum);