const transactions = [
    { id: 1, category: 'Одежда', cost: 1200},
    { id: 2, category: 'Техника', cost: 20000},
    { id: 3, category: 'Обувь', cost: 3400},
    { id: 4, category: 'Техника', cost: 5200 },
    { id: 5, category: 'Одежда', cost: 560 },
    { id: 6, category: 'Еда', cost: 50 },
    { id: 7, category: 'Обувь', cost: 1500 },
    { id: 8, category: 'Посуда', cost: 400 },
    { id: 9, category: 'Техника', cost: 60000 },
    { id: 10, category: 'Одежда', cost: 2000 },
    { id: 11, category: 'Еда', cost: 300 },
    { id: 12, category: 'Одежда', cost: 2500 },
    { id: 13, category: 'Обувь', cost: 6700 },
    { id: 14, category: 'Техника', cost: 1400 },
    { id: 15, category: 'Посуда', cost: 500 },
    { id: 16, category: 'Техника', cost: 120000 },
    { id: 17, category: 'Еда', cost: 150 },
    { id: 18, category: 'Техника', cost: 6000 },
    { id: 19, category: 'Обувь', cost: 3200 },
    { id: 20, category: 'Одежда', cost: 5000 },
     
   ];
   
   
   function getTransactionsSums(Transactions)
   {
     let sums = {}
     let transactionsGroups = Transactions.reduce((accum, transaction) => {
       let category = transaction.category
       if (!accum[category])
       {
         accum[category] = []
       }
       accum[category].push(transaction.cost)
       return accum
     }, {})
     
     let key
     for(key in transactionsGroups)
     {
       let listSum = transactionsGroups[key]
       let sum = 0;
       listSum.forEach(cost => {sum += cost})
       transactionsGroups[key] = sum
     }
     
     return transactionsGroups
   }
   
   console.log(getTransactionsSums(transactions))