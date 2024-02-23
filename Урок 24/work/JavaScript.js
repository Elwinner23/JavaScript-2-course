/**
 * Функция для получения списка пород кошек с использованием API "Cat Fact Ninja"
 */
async function getCatFacts() {
    // Отправляем запрос на сервер для получения данных о породах кошек
    const response = await fetch('https://catfact.ninja/facts?max_length=40&limit=10');

    // Разбираем ответ сервера в формате JSON
    const data = await response.json();
    // Получаем массив объектов с данными о породах кошек
    const factsData = data.data;
console.log(factsData)
    // Находим элемент, в который будем добавлять список пород кошек
    const factsList = document.getElementById("factsList");

    // Проходимся по каждой породе кошек и создаем соответствующий элемент списка
    factsData.forEach(facts => {
        // Создаем новый элемент li для текущей породы кошки
        const newLi = document.createElement("li");
        newLi.className = "facts__item";

        // Создаем блоки для каждого атрибута породы кошки и заполняем их данными
        // Breed
        const factBlock1 = document.createElement("div");
        factBlock1.className = "facts__block";
        factBlock1.innerHTML = `<span class="fact__key">Fact: </span><span class="facts__name">${facts.fact}</span>`;
        newLi.appendChild(factBlock1);

        // Country
        const factBlock2 = document.createElement("div");
        factBlock2.className = "facts__block";
        factBlock2.innerHTML = `<span class="fact__key">Length: </span><span class="facts__name">${facts.length}</span>`;
        newLi.appendChild(factBlock2);

        // Добавляем элемент li в список пород кошек
        factsList.appendChild(newLi);
    });
}

// Вызываем функцию для получения списка пород кошек
getCatFacts()
    .catch(error => {
        // В случае ошибки выводим сообщение об ошибке в консоль
        console.error('Произошла ошибка:', error);
    });

/**
 * Функция для получения фактов о котах
 * @param {number} count - количество фактов, которые необходимо получить
 * @returns {Promise} - возвращает массив объектов с фактами о котах
 */

/**
 * Функция для отображения фактов о котах
 */

// Назначаем обработчик события на кнопку

