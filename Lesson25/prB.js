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

function filterProducts(array, criterion, lim) {
    if (criterion == 'id'){
        const filteredArray = array.filter(item => item.id  > lim);
        console.log('Сортировка массива по id ', filteredArray); 
    }

    else if (criterion == 'category'){
        const filteredArray = array.filter(item => item.category  === lim);
        console.log('Сортировка массива по категории ', filteredArray); 
    }

    else if (criterion == 'price'){
        const filteredArray = array.filter(item => item.price  <= lim);
        console.log('Сортировка массива по цене ', filteredArray); 
    }

    else if (criterion == 'available'){
        const filteredArray = array.filter(item => item.available  === lim);
        console.log('Сортировка массива по наличию ', filteredArray); 
    }

    else{
        console.log('Вы ввели неверный массив или категорию')
    }
  }

filterProducts(products, 'id', 2);
filterProducts(products, 'category', 'Техника');
filterProducts(products, 'price', 100);
filterProducts(products, 'available', true);
filterProducts(products, 'a', false);