// Практика А

const a = [1,2,-3,4,-5,6,-7,8];
const polCh = a.filter(item => item > 0);
console.log(polCh);

// Практика B


function filterProducts(list, criteria){
    return list.filter(item => item.category == criteria.category && item.price < criteria.max_price && item.available == criteria.available);
};


const products = [
    { id: 1, name: 'Футболка', category: 'Одежда', price: 20, available: true},
    { id: 2, name: 'Ноутбук', category: 'Техника', price: 500, available: false},
    { id: 3, name: 'Кроссовки', category: 'Обувь', price: 100, available: true},
    { id: 4, name: 'Мышь', category: 'Техника', price: 30, available: true },
    { id: 5, name: 'Шорты', category: 'Одежда', price: 25, available: false }
];


let criteriaObject = {category: 'Техника', max_price: 100, available: true};
console.log(filterProducts(products, criteriaObject));


// Практика С

const transactions = [
    {category: 'Одежда', amount: 20},
    {category: 'Обувь', amount: 300},
    {category: 'Техника', amount: 500},
    {category: 'Обувь', amount: 50},
    {category: 'Техника', amount: 60},
    {category: 'Техника', amount: 160},
    {category: 'Одежда', amount: 200},

];

function filterTransactions(list, criteria){
    return list.reduce((accumulator, value) => {
        if (value.category == criteria){accumulator += value.amount;}
        return accumulator;
    }, 0);
}

console.log(filterTransactions(transactions, 'Одежда'))

