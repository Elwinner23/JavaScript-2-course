document.getElementById('numb').addEventListener('input', function() {
  document.getElementById('card_number').innerText = this.value;
});

document.getElementById('cvv').addEventListener('input', function() {
  document.getElementById('seccode').innerText = this.value;
});

document.getElementById('cvv').addEventListener('focus', function(){
  document.getElementById('card').style.transform ='rotatey(180deg)';
});

document.getElementById('cvv').addEventListener('focusout', function(){
  document.getElementById('card').style.transform ='rotatey(0deg)';
});

document.getElementById('inputname').addEventListener('input', function(){
  document.getElementById('fullname').innerText = this.value;
});

document.getElementById('expire').addEventListener('input', function(){
  document.getElementById('date_value').innerText = this.value;
});

document.getElementById('numb').addEventListener('input', (event) => {
  const inputText = event.target.value.replaceAll(' ', '').replace(/\D/g, '');
  const formattedText = inputText.replace(/(.{4})/g, '$1 ');
  event.target.value = formattedText.trim();
});

document.getElementById('cvv').addEventListener('input', (event) => {
  const inputText = event.target.value.replaceAll(' ', '').replace(/\D/g, '');
  const formattedText = inputText.replace(/(.{5})/g, '$1/');
  event.target.value = formattedText.trim();
});

document.getElementById('expire').addEventListener('input', (event) => {
  const inputText = event.target.value.replaceAll(' ', '').replace(/\D/g, '');
  const formattedText = inputText.replace(/(.{2})/g, '$1/', /(.{4})/g);
  event.target.value = formattedText.trim();
});


var cards = [{
  nome: "mastercard",
  colore: "#0061A8",
  src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
}, {
  nome: "visa",
  colore: "#E2CB38",
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2000px-Visa_Inc._logo.svg.png"
}, {
  nome: "dinersclub",
  colore: "#888",
  src: "http://www.worldsultimatetravels.com/wp-content/uploads/2016/07/Diners-Club-Logo-1920x512.png"
}, {
  nome: "americanExpress",
  colore: "#108168",
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo.svg/600px-American_Express_logo.svg.png"
}, {
  nome: "discover",
  colore: "#86B8CF",
  src: "https://lendedu.com/wp-content/uploads/2016/03/discover-it-for-students-credit-card.jpg"
}, {
  nome: "dankort",
  colore: "#0061A8",
  src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Dankort_logo.png"
}];


document.getElementById('numb').addEventListener('focusout', function() {
  var number = document.getElementById('numb').value;
    
    if(parseInt(number.substring(0, 2)) > 50 && parseInt(number.substring(0, 2)) < 56){
      selected_card = 0;
    }else if(parseInt(number.substring(0, 1)) == 2){
      selected_card = 1;  
      console.log('visa')
    }else if(parseInt(number.substring(0, 2)) == 36 || parseInt(number.substring(0, 2)) == 38 || parseInt(number.substring(0, 2)) == 39){
      selected_card = 2;     
    }else if(parseInt(number.substring(0, 2)) == 34 || parseInt(number.substring(0, 2)) == 37){
      selected_card = 3; 
    }else if(parseInt(number.substring(0, 2)) == 65){
      selected_card = 4; 
    }else if(parseInt(number.substring(0, 4)) == 5019){
      selected_card = 5; 
    }else{
      selected_card = -1; 
    }
    
    if(selected_card != -1){
      document.getElementById('bankid').src += cards[selected_card].src;
      html.setAttribute("style", "--card-color: " + cards[selected_card].colore);
    }else{
      document.getElementById('bankid').src += "".hide();
    }

});
  




