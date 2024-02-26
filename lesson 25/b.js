const products = [
    { id: 1, name: 'Футболка', category: 'Одежда', price: 20, available: true},
    { id: 2, name: 'Ноутбук', category: 'Техника', price: 500, available: false},
    { id: 3, name: 'Кроссовки', category: 'Обувь', price: 100, available: true},
    { id: 4, name: 'Мышь', category: 'Техника', price: 30, available: true },
    { id: 5, name: 'Шорты', category: 'Одежда', price: 25, available: false }
   ];
   
   function filterProducts(products, criteria) {
       return products.filter(product => {
           if(criteria.category && product.category !== criteria.category) {
               return false;
           }
           if(criteria.maxPrice && product.price > criteria.maxPrice) {
               return false;
           }
           if(criteria.available && !product.available) {
               return false;
           }
           return true;
       });
   }
   
   const filteredProducts = filterProducts(products, {category: 'Одежда', maxPrice: 25, available: true });
   console.log(filteredProducts);