const transaction = [
    {category: 'Одежда', amout: 20},
    {category: 'Техника', amout: 500},
    {category: 'Обувь', amout: 100},
    {category: 'Техника', amout: 30},
    {category: 'Одежда', amout: 25},
    {category: 'Обувь', amout: 50}
   ];

function sumAmout(transaction) {
return transaction.reduce((item,  operation) => {
    const category = operation.category;
    if (!item[category]) {
        item[category] = 0;
    }
    item[category] += operation.amout;
    return item;
}, {});
}

const categorySum = sumAmout(transaction);

console.log(categorySum);