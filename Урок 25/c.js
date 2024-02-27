const transactions = [
    { id: 1, category: 'Одежда', cost: 1500},
    { id: 2, category: 'Техника', cost: 50000},
    { id: 3, category: 'Обувь', cost: 3000},
    { id: 4, category: 'Техника', cost: 3200 },
    { id: 5, category: 'Одежда', cost: 550 },
    { id: 6, category: 'Еда', cost: 500 },
    { id: 7, category: 'Обувь', cost: 1499 },
    { id: 8, category: 'Посуда', cost: 400 },
    { id: 9, category: 'Техника', cost: 10000 },
    { id: 10, category: 'Одежда', cost: 2800 },
    { id: 11, category: 'Еда', cost: 350 },
    { id: 12, category: 'Одежда', cost: 4500 },
    { id: 13, category: 'Обувь', cost: 6550 },
    { id: 14, category: 'Техника', cost: 4400 },
    { id: 15, category: 'Посуда', cost: 540 },
   ];
  
  function calSum(transactions) {
    const categorySum = {};
  
    transactions.forEach(transaction => {
      const { category, cost } = transaction;
      
      if (categorySum[category]) {
        categorySum[category] += cost;
      } else {
        categorySum[category] = cost;
      }
    });
  
    return categorySum;
  }
  
  const sum = calSum(transactions);
  console.log(sum);