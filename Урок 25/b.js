const products = [
    { id: 1, name: 'Футболка', category: 'Одежда', price: 20, available: true
   },
    { id: 2, name: 'Ноутбук', category: 'Техника', price: 500, available: false
   },
    { id: 3, name: 'Кроссовки', category: 'Обувь', price: 100, available: true
   },
    { id: 4, name: 'Мышь', category: 'Техника', price: 30, available: true },
    { id: 5, name: 'Шорты', category: 'Одежда', price: 25, available: false }
   ];
   
   
   function filterProducts(products, filters) {
       return products.filter(product => {
           if(filters.category && product.category !== filters.category) {
               return false;
           }
             if(filters.priceMax && product.price > filters.priceMax) {
                 return false;
           }
             if(filters.available && !product.available) {
                 return false;
           }
         return true;
       });
         
   }
   const filteredProducts = filterProducts(products, {category: 'Одежда', priceMax: 20, available: true});
   console.log(filteredProducts);