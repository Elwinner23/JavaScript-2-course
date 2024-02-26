/**
 * Функция для получения списка пород кошек с использованием API "Cat Fact Ninja"
 */
async function getCatBreeds() {

    let count = document.getElementById("limit__input")

    let link = `https://catfact.ninja/breeds?limit=${count}`;
    // Отправляем запрос на сервер для получения данных о породах кошек
    const response = await fetch(link);

    // Разбираем ответ сервера в формате JSON
    const data = await response.json();
    console.log(data)
    // Получаем массив объектов с данными о породах кошек
    const breedsData = data.data;
    // Находим элемент, в который будем добавлять список пород кошек
    const breedsList = document.getElementById("breedsList");

    // Проходимся по каждой породе кошек и создаем соответствующий элемент списка
    breedsData.forEach(breed => {
        // Создаем новый элемент li для текущей породы кошки
        const newLi = document.createElement("li");
        newLi.className = "breeds__item";

        // Создаем блоки для каждого атрибута породы кошки и заполняем их данными
        // Breed
        const breedBlock1 = document.createElement("div");
        breedBlock1.className = "breeds__block";
        breedBlock1.innerHTML = `<span class="breed__key">Breed:</span><span class="breed__name">${breed.breed}</span>`;
        newLi.appendChild(breedBlock1);

        // Country
        const breedBlock2 = document.createElement("div");
        breedBlock2.className = "breeds__block";
        breedBlock2.innerHTML = `<span class="breed__key">Country:</span><span class="breed__name">${breed.country}</span>`;
        newLi.appendChild(breedBlock2);

        // Origin
        const breedBlock3 = document.createElement("div");
        breedBlock3.className = "breeds__block";
        breedBlock3.innerHTML = `<span class="breed__key">Origin:</span><span class="breed__name">${breed.origin}</span>`;
        newLi.appendChild(breedBlock3);

        // Coat
        const breedBlock4 = document.createElement("div");
        breedBlock4.className = "breeds__block";
        breedBlock4.innerHTML = `<span class="breed__key">Coat:</span><span class="breed__name">${breed.coat}</span>`;
        newLi.appendChild(breedBlock4);

        // Pattern
        const breedBlock5 = document.createElement("div");
        breedBlock5.className = "breeds__block";
        breedBlock5.innerHTML = `<span class="breed__key">Pattern:</span><span class="breed__name">${breed.pattern}</span>`;
        newLi.appendChild(breedBlock5);

        // Добавляем элемент li в список пород кошек
        breedsList.appendChild(newLi);
    });
    return breedsList
}

// Вызываем функцию для получения списка пород кошек
/**
 * Функция для получения фактов о котах
 * @param {number} count - количество фактов, которые необходимо получить
 * @returns {Promise} - возвращает массив объектов с фактами о котах
 */

/**
 * Функция для отображения фактов о котах
 */

// Назначаем обработчик события на кнопку

let button = document.getElementById("sendFacts__button");

button.addEventListener("click", getCatBreeds())