//Сортировака по возрастанию цены и убыванию
const products = [
    { id: 1, name: 'Футболка', category: 'Одежда', price: 20, available: true },
    { id: 2, name: 'Ноутбук', category: 'Техника', price: 500, available: false },
    { id: 3, name: 'Кроссовки', category: 'Обувь', price: 100, available: true },
    { id: 4, name: 'Мышь', category: 'Техника', price: 30, available: true },
    { id: 5, name: 'Шорты', category: 'Одежда', price: 25, available: false }
];

const productsCopyup = [...products];
const products_price_up_filter = productsCopyup.sort((a, b) => a.price - b.price);

const productsCopydown = [...products];
const products_price_down_ilter = productsCopydown.sort((a, b) => b.price - a.price);

console.log(products_price_up_filter);
console.log(products_price_down_ilter);

//Сортировка по категории
const products_copy_sort = [...products];
const products_copy_reduce = products_copy_sort.reduce((group, product) => {
    const { category } = product;
    group[category] = group[category] ?? [];
    group[category].push(product);
    return group;
}, {});

console.log(products_copy_reduce);

//Сортировка по длступности
const products_sort_available = [...products];

products_sort_available.sort((a, b) => {
    if(a.available !== b.available){
        return a.available ? -1 : 1;
    }
})
console.log(products_sort_available);