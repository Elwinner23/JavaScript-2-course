function filterProducts(products, criteria) {
    const filteredProducts = products.filter((product) => {

      if (criteria.category && product.category !== criteria.category) {
        return false;
      }

      if (criteria.maxPrice && product.price > criteria.maxPrice) {
        return false;
      }

      if (criteria.available && !product.available) {
        return false;
      }

      return true;
    });

    return filteredProducts;
}

const products = [
    { id: 1, name: 'футболка', category: 'одежда', price: 20, available: true },
    { id: 2, name: 'ноутбук', category: 'техника', price: 500, available: false },
    { id: 3, name: 'кроссовки', category: 'обувь', price: 100, available: true },
    { id: 4, name: 'мышь', category: 'техника', price: 30, available: true },
    { id: 5, name: 'шорты', category: 'одежда', price: 25, available: false }
];

const criteria = {
    category: 'одежда',
    maxPrice: 30,
    available: true
};

const filteredProducts = filterProducts(products, criteria);

console.log(filteredProducts);