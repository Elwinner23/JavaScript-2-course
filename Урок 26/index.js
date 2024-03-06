function getFromInput()
{
    let cardNum = document.getElementById("card-number");
    let cvv = document.getElementById("cvv");
    let date = document.getElementById("card-data");

    cardNum.addEventListener("input", (e) => {
        const inputText = e.target.value.replace(' ', '').replace(/\D/g, '');
        const formattedText = inputText.replace(/(.{4})/g, '$1 ');
        e.target.value = formattedText.trim();
    })

    cvv.addEventListener("input", (e) => {
        const inputText = e.target.value.replaceAll(' ', '').replace(/\D/g, '');
        e.target.value = inputText.trim();
    })

    date.addEventListener("input", (e) => {
        let value = date.value;
        value = value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        date.value = value;
        if(value.length === 5 ) {
            var month = value.substr(0, 2);
            var year = value.substr(3);
            if(!isNaN(month) && !isNaN(year)) {
                if(month >= 1 && month <= 12 && year>23 ) {
                    date.value = month + "/" + year;
                } else {
                    date.value = "";
                    alert('Введите корректную дату')
                }
            } else {
                date.value = "";
                alert('Введите корректную дату')
            }
        }})
}

let buttonPay = document.getElementById("pay__button")

getFromInput()
buttonPay.addEventListener("click", getFromInput)

document.querySelector('#card-number').oninput = function () {
    let cardNum = this.value;
    if(cardNum.trim().length > 5){
        let cardInfo = new CardInfo(cardNum.trim(), {
            banksLogosPath: './node_modules/card-info/dist/banks-logos/',
            brandsLogosPath: './node_modules/card-info/dist/brands-logos/'
        });
        console.log(cardInfo.bankName)
        console.log(cardInfo.bankLogo)
        console.log(cardInfo.brandLogo)
        console.log(cardInfo.backgroundColor)
        document.querySelector('.card-image').src= cardInfo.bankLogo;
        document.querySelector('.card-logo').src= cardInfo.brandLogo;
        document.querySelector('.card-front').style.backgroundColor = cardInfo.backgroundColor;
}}