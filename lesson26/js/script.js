function card(){
    const number_card = document.getElementById('card-number').value;
    const card_time_one = document.getElementById('card-time-one').value;
    const card_time_two = document.getElementById('card-time-two').value;
    const name_card = document.getElementById('card-name').value;
    const cvc_cvv = document.getElementById('card-cvс').value;
    const card = document.getElementById('card');
    const the_payment_has_been_completed = document.getElementById('the-payment-has-been-completed')

    if(card_time_one > 12){
        alert("Некорректное значение срока действия")
    }
    if(card_time_two < 24){
        alert("Некорректное значение срока действия")
    }

    const data = {
        number_card,
        card_time_one,
        card_time_two,
        name_card,
        cvc_cvv
    }

    if(
        number_card === '' ||
        card_time_one === '' ||
        card_time_two === '' ||
        name_card === '' ||
        cvc_cvv === ''
    ){
        alert("Не все поля заполнены");
    } else {
        //serverget(data);
        console.log(data);
        card.style.display = 'none';
        the_payment_has_been_completed.style.display = 'flex';
    }
}

// Пример отправка данных на сервер 

function serverget(data){
    let response = fetch('cardpay',{
        method: 'POST',
        headers:{
            'Content-Type': 'applicatiom/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
}
