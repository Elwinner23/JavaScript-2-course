let inputNumber = document.getElementById("card-number");
let inputDate = document.getElementById("card-date");
let inputCVV = document.getElementById("cvv-code");
let inputHolder = document.getElementById("card-holder");

inputNumber.addEventListener('input', (event) => {
    const inputText = event.target.value.replaceAll(' ', '').replace(/\D/g, '');
    const formattedText = inputText.replace(/(.{4})/g, '$1 ');
    event.target.value = formattedText.trim();
  });

inputDate.addEventListener('input', (event) => {
      const inputText = event.target.value.replaceAll(' ', '').replace(/\D/g, '');
      const formattedText = inputText.replace(/(.{2})/g, '$1/');
      event.target.value = formattedText.trim();
    });

inputCVV.addEventListener('input', (event) => {
    const inputText = event.target.value.replaceAll(' ', '').replace(/\D/g, '');
    const formattedText = inputText.replace(/(.{5})/g, '$1/');
    event.target.value = formattedText.trim();
});

const button = document.getElementById('oplat');
button.addEventListener('click', (event) => {
    inputNumber.value = '';
    inputDate.value = '';
    inputCVV.value = '';
    inputHolder.value = '';
})