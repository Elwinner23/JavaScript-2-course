async function getCatFacts(number){
    const response = await fetch(`https://catfact.ninja/facts?limit=${number}`);
    const data = await response.json();
    const factsData = data.data;
    const factsList = document.getElementById('factsList')
    console.log(factsList);
    factsData.forEach(fact => {
        newLi = document.createElement('li');
        newLi.className = 'facts__item';

        const factBlock1 = document.createElement("div");
        factBlock1.className = "facts__block";
        factBlock1.innerHTML = `<span class="fact__key">Fact:</span><span class="fact__name">${fact.fact}</span>`;
        newLi.appendChild(factBlock1);

        factsList.appendChild(newLi);
    })
}

document.getElementById('send').addEventListener('click', () => {
    let input = document.getElementById('num');
    let number = document.getElementById('num').value;
    if ((number != '') && (Number(number) > 0)){
        getCatFacts(number)
            .catch(error => {
            console.error('Произошла ошибка:', error);
        })
    }else if (document.querySelector('.error__input') == null){
        input.style = 'border: 2px solid red';
        const er = document.createElement('error');
        er.innerText = 'Вы ввели число меньше нуля, не надо так ';
        document.getElementById('text_error').prepend(er)
    }
});






