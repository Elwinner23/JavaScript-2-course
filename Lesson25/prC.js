const trans = [
    { id: 1, category: 'Вывод средств на оффшоры', price: 20
   },
    { id: 2, category: 'Вклады в иностранных банках', price: 500
   },
    { id: 3, category: 'Вывод средств на оффшоры', price: 100
   },
    { id: 4, category: '"Чаевые" чиновнику', price: 30},
    { id: 5, category: 'Вклады в иностранных банках', price: 25}
   ];
   
const trans1 = trans.filter(item => item.category == 'Вывод средств на оффшоры');
let sum1 = 0;
trans1.forEach((tran1) => {
    sum1 += tran1.price;
});
console.log('Вывод средств на оффшоры',sum1);

const trans2 = trans.filter(item => item.category == 'Вклады в иностранных банках');
let sum2 = 0;
trans2.forEach((tran2) => {
    sum2 += tran2.price;
});
console.log('Вклады в иностранных банках',sum2);

const trans3 = trans.filter(item => item.category == '"Чаевые" чиновнику');
let sum3 = 0;
trans3.forEach((tran3) => {
    sum3 += tran3.price;
});
console.log('"Чаевые" чиновнику',sum3);

const trans4 = trans.filter(item => item.category!='Вклады в иностранных банках' && item.category!='Вывод средств на оффшоры' && item.category !='"Чаевые" чиновнику');
let sum4 = 0;
trans4.forEach((tran4) => {
    sum4 += tran4.price;
})
console.log('Другое',sum4);

