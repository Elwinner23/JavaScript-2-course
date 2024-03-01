function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sun(){
    return transactions.reduce((acc, transaction) => {
        acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
        return acc;
    }, {});
}


const transactions = [
    { category: 'Еда', amount: random(100, 500)},
    { category: 'Транспорт', amount: random(100, 500)},
    { category: 'Отель', amount: random(100, 500)},
    { category: 'Еда', amount: random(100, 500)},
    { category: 'Отель', amount: random(100, 500)},
];

console.log(sun(transactions));