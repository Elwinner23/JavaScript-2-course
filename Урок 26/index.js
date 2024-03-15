import { isValid } from './node_modules/credit-cards/src/index';
var cardnumber = document.getElementById("cardnumber");
cardnumber.addEventListener('change', (event)=>{
    if(isValid(cardnumber.ariaValueNow))
{
    cardnumber.style = "border-color: red"
}
else
{
    cardnumber.style = "border-color: green"
}
});
