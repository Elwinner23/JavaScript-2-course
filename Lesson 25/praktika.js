// Практика А

const a = [1,2,-3,4,-5,6,-7,8];
const polCh = a.filter(item => item > 0);


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

//-----------------------------------------------------------------------------------------------------------------------------------------------
//                                                                    ДЗ


// Пузырьковый метод
function bubble_sorting(array){
    for (let i = 0; i < array.length - 1; i ++){
        for (let j = 0; j < array.length - 1 - i; j ++){
            if (array[j] > array[j + 1]){
                let per = array[j];
                array[j] = array[j + 1];
                array[j + 1] = per;
            };
        };
    };
    return array;
};

// Сортировка перемешиванием

function sorting_by_mixing(array){
    for (let i = 1; i < array.length; i++){
        while (i > 0 && array[i] < array[i - 1]){
            let per = array[i];
            array[i] = array[i - 1];
            array[i - 1] = per;
            i -= 1;
        };
    };
    return array;
};
console.log(sorting_by_mixing(a))

// Сортировка расчёской

function sorting_with_a_comb(array){
    const l = array.length;
    const factor = 1.247;
    let gapFactor = l / factor;
    while (gapFactor > 1) {
        const gap = Math.round(gapFactor);
        for (let i = 0, j = gap; j < l; i++, j++) {
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        gapFactor = gapFactor / factor;
    };
    return array;
}