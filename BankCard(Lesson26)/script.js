function validInput()
{
    let image = document.getElementById("image1")
    let image__cont = document.getElementsByClassName("images__container")[0]
    let img = new URL('images/great.jpg', import.meta.url);
    image.setAttribute("src", img)
    image__cont.appendChild(image)
    console.log(image__cont)


    return true
}

function invalidInput()
{
    let cardNum = document.getElementById("card-num__input");
    let cvvCode = document.getElementById("cvv-code__input");
    let date = document.getElementById("date__input");
    let fullName = document.getElementById("full-name__input");

    var content = require("creditcard.js");

    cardNum.setCustomValidity("Неверно заполнен номер карты")
    cvvCode.setCustomValidity("Неверно заполнен cvv-код карты")
    date.setCustomValidity("Неверно заполнена дата")
    fullName.setCustomValidity("Неверно заполнено имя")

    let validCardNum = false;
    let validCvvCode = false; 
    let validDate = false; 
    let validFullName = false; 

    cardNum.addEventListener("input", (e) => {
        const inputText = e.target.value.replace(' ', '').replace(/\D/g, '');
        const formattedText = inputText.replace(/(.{4})/g, '$1 ');
        e.target.value = formattedText.trim();

        if (content.getCreditCardNameByNumber(cardNum.value) == 'Credit card is invalid!')
        {
            cardNum.reportValidity();
        }
    })

    cvvCode.addEventListener("input", (e) => {
        const inputText = e.target.value.replaceAll(' ', '').replace(/\D/g, '');
        e.target.value = inputText.trim();

        if (content.isSecurityCodeValid(cardNum.value, cvvCode.value) == false)
        {
            cvvCode.reportValidity();
        }
    })

    date.addEventListener("input", (e) => {
        const inputText = e.target.value.replaceAll(' ', '').replace(/\D/g, '');
        const formattedText = inputText.replace(/(.{2})/g, '$1/');
        e.target.value = formattedText.trim();

        if (!content.isExpirationDateValid(date.value.slice(0, 2), date.value.slice(3, 5)))
        {
            date.reportValidity();
        }
    })

    fullName.addEventListener("input", (e) => {
        const inputText = e.target.value.replace(/\d/g, '').replace(/[А-Яа-я]/g, '').toUpperCase();
        e.target.value = inputText;

        if (!fullName.value)
        {
            fullName.reportValidity();
        }
    })

    
    if (!fullName.value)
    {
        fullName.reportValidity();
    }
    else
    {
        validFullName = true
    }
    
    
    if (!content.isExpirationDateValid(date.value.slice(0, 2), date.value.slice(3, 5)))
    {
        date.reportValidity()
    }
    else
    {
        validDate = true
    }
    
    if (content.isSecurityCodeValid(cardNum.value, cvvCode.value) == false)
    {   
        if (content.getCreditCardNameByNumber(cardNum.value) == 'Credit card is invalid!')
        {
            cardNum.reportValidity()
        }
        else
        {
            validCardNum = true
        }
        
    }
    else
    {
        validCvvCode = true
    }

    if (content.getCreditCardNameByNumber(cardNum.value) == 'Credit card is invalid!')
    {
        cardNum.reportValidity()
    }
    else
    {
        validCardNum = true
    }

    let countValids = 0; 
    let valids = [validCardNum, validCvvCode, validDate, validFullName]

    valids.forEach(element => {
        if (element == false)
        {
            countValids++
        }
    });

    
    let image = document.getElementById("image1")
    let image__cont = document.getElementsByClassName("images__container")[0]
    console.log(image__cont)
    

    let img1 = new URL('images/ok.jpg', import.meta.url);
    let img2 = new URL('images/bad.jpg', import.meta.url);
    let img3 = new URL('images/VeryBad.jpg', import.meta.url);
    let img4 = new URL('images/extBad.jpg', import.meta.url);
    
    switch (countValids)
    {
        case (1):
            image.setAttribute("src", img1)
            break;
        case (2):
            image.setAttribute("src", img2)
            break;
        case (3):
            image.setAttribute("src", img3)
            break;
        case (4):
            image.setAttribute("src", img4)
            break;
    }
    image.setAttribute("src", "/")
    image__cont.appendChild(image)
    
    return true
}

invalidInput()

let buttonPay = document.getElementById("pay__button")

let cardNum = document.getElementById("card-num__input");
let cvvCode = document.getElementById("cvv-code__input");
let date = document.getElementById("date__input");
let fullName = document.getElementById("full-name__input");

var content = require("creditcard.js");

document.addEventListener("mousemove", (e) => {
    if ((content.getCreditCardNameByNumber(cardNum.value) != 'Credit card is invalid!') && (content.isSecurityCodeValid(cardNum.value, cvvCode.value)) && (content.isExpirationDateValid(date.value.slice(0, 2), date.value.slice(3, 5))) && (fullName.value))
    {
        buttonPay.style.backgroundColor = "green"
        buttonPay.addEventListener("click", validInput)
    }
    else
    {
        buttonPay.style.backgroundColor = "red"
        buttonPay.addEventListener("click", invalidInput)
    }
})

