function sendRequest() {
    const factCountInput = document.getElementById('factCountInput');
    const errorText = document.getElementById('errorText');

    if (factCountInput.value === '') {
        errorText.style.display = 'block';
        factCountInput.classList.add('error-border');
    } else {
        errorText.style.display = 'none';
        factCountInput.classList.remove('error-border');

        const factCount = parseInt(factCountInput.value);

        document.getElementById('factResults').innerText = 'Вы ввели:' + $factCount;
    }
}
async function getCatFacts() {
    // Отправляем запрос на сервер для получения фактов
    const response = await fetch('https://catfact.ninja/facts?max_length=${factCount}');

    // Разбираем ответ сервера в формате JSON
    const data = await response.json();
    // Получаем массив объектов с фактами
    const factsData = data.data;
console.log(factsData)
    // Находим элемент, в который будем добавлять список фактов
    const factsList = document.getElementById("factsList");

    // Проходимся по фактам создаем соответствующий элемент списка
    factsData.forEach(fact => {
        // Создаем новый элемент li для текущего факта
        const newLi = document.createElement("li");
        newLi.className = "facts__item";

        const factBlock = document.createElement("div");
        factBlock.className = "facts__block";
        factBlock.innerHTML = `<span class="fact__key">Pattern:</span><span class="fact__name">${fact}</span>`;
        newLi.appendChild(factBlock);

        // Добавляем элемент li в список фактов
        factsList.appendChild(newLi);
    });
}
// Вызываем функцию для получения списка фактов
getCatFacts()
    .catch(error => {
        // В случае ошибки выводим сообщение об ошибке в консоль
        console.error('Произошла ошибка:', error);
    });