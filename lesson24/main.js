async function getCatFacts(number) {
    const response = await fetch(`https://catfact.ninja/facts?limit=${number}`);
    const data = await response.json();
    const factsData = data.data;
    const factsList = document.getElementById('facts_list_all')
    factsData.forEach(fact => {
        newLi = document.createElement('li');
        newLi.className = 'facts_text';

        const factBlock1 = document.createElement("div");
        factBlock1.innerHTML = `<span class="fact__key">Факт:</span><span class="fact__name">${fact.fact}</span>`;
        newLi.appendChild(factBlock1);

        factsList.appendChild(newLi);
    })
}

document.getElementById('but').addEventListener('click', () => {
    let input = document.getElementById('number');
    let number = document.getElementById('number').value;
    if ((number != '') && (Number(number) > 0)){
        getCatFacts(number)
            .catch(error => {
            console.error('Произошла ошибка:', error);
        })

    } else if (document.querySelector('.error__input') == null){
        input.style = 'border: 1px solid red';
        const er = document.createElement('error');
        er.innerText = 'Надо ввести число, а не белеберду';
        document.getElementById('error_text_footer').prepend(er)
    }
});