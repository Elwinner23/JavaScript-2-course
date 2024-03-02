const products = [
    { id: 1, name: 'Футболка', category: 'Одежда', price: 20, available: true },
    { id: 2, name: 'Ноутбук', category: 'Техника', price: 500, available: false },
    { id: 3, name: 'Кроссовки', category: 'Обувь', price: 100, available: true },
    { id: 4, name: 'Мышь', category: 'Техника', price: 30, available: true },
    { id: 5, name: 'Шорты', category: 'Одежда', price: 25, available: false }
    ]
    
    function calculateCategoryTotal(products) {
        const categoryTotals = {};
        products.forEach(product => { 
            const { category, price } = product;
            if (categoryTotals[category]) {
                categoryTotals[category] += price;
            } else {
                categoryTotals[category] = price;
    }
    });
    return categoryTotals;
    }
    
    const categorySums = calculateCategoryTotal(products);
    console.log(categorySums);