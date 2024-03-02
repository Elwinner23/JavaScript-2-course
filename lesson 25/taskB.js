const products = [
    { id: 1, name: 'Футболка', category: 'Одежда', price: 20, available: true },
    { id: 2, name: 'Ноутбук', category: 'Техника', price: 500, available: false },
    { id: 3, name: 'Кроссовки', category: 'Обувь', price: 100, available: true},
    { id: 4, name: 'Мышь', category: 'Техника', price: 30, available: true },
    { id: 5, name: 'Шорты', category: 'Одежда', price: 25, available: false }
   ];

function filterProducts(products, test) {
    return products.filter(item => {
        if (test.category && item.category != test.category) {
            return false;
        }

        if (test.maxPrice && item.price > test.maxPrice) {
            return false;
        }

        if (test.available != undefined && item.available != test.available) {
            return false;
        }
        return true;
    });
};

const filteredProduct = filterProducts(products, {category: 'Техника', maxPrice: 100, available: true});
console.log(filteredProduct)