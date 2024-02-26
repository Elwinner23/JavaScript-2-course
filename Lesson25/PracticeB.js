const products = [
    { id: 1, name: 'Футболка', category: 'Одежда', price: 20, available: true},
    { id: 2, name: 'Ноутбук', category: 'Техника', price: 500, available: false},
    { id: 3, name: 'Кроссовки', category: 'Обувь', price: 100, available: true},
    { id: 4, name: 'Мышь', category: 'Техника', price: 30, available: true },
    { id: 5, name: 'Носки', category: 'Одежда', price: 5, available: true },
    { id: 6, name: 'Хлеб', category: 'Еда', price: 2, available: true },
    { id: 7, name: 'Сапоги', category: 'Обувь', price: 40, available: true },
    { id: 8, name: 'Чашка', category: 'Посуда', price: 15, available: false },
    { id: 9, name: 'Клавиатура', category: 'Техника', price: 50, available: true },
    { id: 10, name: 'Кепка', category: 'Одежда', price: 10, available: true },
    { id: 11, name: 'Набор конфет', category: 'Еда', price: 10, available: true },
    { id: 12, name: 'Куртка', category: 'Одежда', price: 70, available: true },
    { id: 13, name: 'Тапки', category: 'Обувь', price: 15, available: true },
    { id: 14, name: 'Телевизор', category: 'Техника', price: 200, available: true },
    { id: 15, name: 'Набор тарелок', category: 'Посуда', price: 25, available: true },
    { id: 16, name: 'Посудомойка', category: 'Техника', price: 150, available: true },
    { id: 17, name: 'Молоко', category: 'Еда', price: 3, available: false },
    { id: 18, name: 'Робот-пылесос', category: 'Техника', price:40, available: true },
    { id: 19, name: 'Макасины', category: 'Обувь', price: 20, available: false },
    { id: 20, name: 'Свиттер', category: 'Одежда', price: 25, available: true },
];
   
   
   function getProductByCriteries(Products, CriteriesObj)
   {
     let ProductArray = 
         Products.filter(item => 
                         (((item.category == CriteriesObj.category)||(CriteriesObj.category === undefined))&&
                          ((item.price < CriteriesObj.price)||(CriteriesObj.price === undefined))&&
                          ((item.available == CriteriesObj.available)||(CriteriesObj.available === undefined))))
     return ProductArray
   }
   
   
   let criteriesObj = {category: "Одежда", price: 40, available: true}
   console.log(getProductByCriteries(products, criteriesObj))