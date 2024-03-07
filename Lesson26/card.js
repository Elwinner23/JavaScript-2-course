let inputNumber = document.getElementById("card-number");

inputNumber.addEventListener('input', (event) => {
    const inputText = event.target.value.replaceAll(' ', '').replace(/\D/g, '');
    const formattedText = inputText.replace(/(.{4})/g, '$1 ');
    event.target.value = formattedText.trim();
  });

let inputDate = document.getElementById("card-date");

inputDate.addEventListener('input', (event) => {
      const inputText = event.target.value.replaceAll(' ', '').replace(/\D/g, '');
      const formattedText = inputText.replace(/(.{2})/g, '$1/');
      event.target.value = formattedText.trim();
    });

let inputCVV = document.getElementById("cvv-code");

inputCVV.addEventListener('input', (event) => {
    const inputText = event.target.value.replaceAll(' ', '').replace(/\D/g, '');
    const formattedText = inputText.replace(/(.{5})/g, '$1/');
    event.target.value = formattedText.trim();
});