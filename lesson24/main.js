

/**
 * Функция для отображения фактов о котах
 */
async function getCatFact() {
    const limit = document.getElementById("limit").value;

    const limitInput = document.getElementById("limit");
    const errorLabel = document.getElementById("labl");

    if (limit.trim() == "") {
        limitInput.style.border = "2px solid red";
        errorLabel.innerText = "Enter the number";
        return;
      }else if (limit < 1) {
        limitInput.style.border = "2px solid red";
        errorLabel.innerText = "Enter pologitelnoe number";
        return;
      }
      
      
   
    const response = await fetch(`https://catfact.ninja/facts?limit=${limit}`);
    const factsData = await response.json();

    
    const factsList = document.getElementById("factsList");

    factsData.data.forEach(item => {
        const newLi = document.createElement('li');
        newLi.className = 'facts__item';

        const factBlock1 = document.createElement("div");
        factBlock1.className = "facts__block";
        factBlock1.innerHTML = `<span class="fact__key">Fact:</span><span class="fact__name">${item.fact}</span>`;
        newLi.appendChild(factBlock1);

        factsList.appendChild(newLi);
    
        limitInput.style.border = "2px solid black";
        errorLabel.remove()
      
      
    });
}


// Назначаем обработчик события на кнопку

let button = document.querySelector("button")
button.addEventListener("click", getCatFact).catch((error) => {
    console.error("Произошла ошибка:", error);
  });