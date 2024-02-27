const products = [
    { id: 1, name: 'Футболка', category: 'Одежда', price: 20, available: true },
    { id: 2, name: 'Hoутбук', category: 'Texника', price: 500, available: false},
    { id: 3, name: 'Kроссовки', category: 'Обувь', price: 100, available: true},
    { id: 4, name: 'Mышь', category: 'Texника', price: 30, available: true },
    { id: 5, name: 'шорты', category: 'Одежда', price: 25, available: false }
  ];
    
  function filterProducts(products, criteria) {
    return products.filter(product => {
      if (criteria.category && product.category !== criteria.category) {
        return false;
      }
      if (criteria.maxprice && product.price > criteria.maxprice) {
        return false;
      }
      if (criteria.available !== undefined && product.available !== criteria.available) {
        return false;
      }
      return true;
    });
  }
  
  const filteredProducts = filterProducts(products, {category: 'Одежда', maxprice: 30, available:true});
  console.log(filteredProducts);