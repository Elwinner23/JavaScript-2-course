const products = [
	{ id: 1, name: 'Футболка', category: 'Одежда', price: 20, available: true },
	{ id: 2, name: 'Ноутбук', category: 'Техника', price: 500, available: false },
	{ id: 3, name: 'Кроссовки', category: 'Обувь', price: 100, available: true },
	{ id: 4, name: 'Мышь', category: 'Техника', price: 30, available: true },
	{ id: 5, name: 'Шорты', category: 'Одежда', price: 25, available: false }
]

function filterProducts(products, filters) {
return products.filter(product => { const { category, maxPrice, available } = filters;
return (!category || product.category === category) &&
	(!maxPrice || product.price <= maxPrice) &&
	(available === undefined || product.available === available);
});
}

const filters = { category: 'Одежда', maxPrice: 20, available: true };
const filteredProducts = filterProducts(products, filters);

console.log(filteredProducts);