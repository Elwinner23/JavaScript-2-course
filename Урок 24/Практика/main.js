async function getCatFacts(num){
    const response = await fetch(`https://catfact.ninja/facts?limit=${num}`);
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

document.getElementById('but').addEventListener('click', () => {
    let input = document.getElementById('num');
    let num = document.getElementById('num').value;
    if ((num != '') && (Number(num) > 0)){
        getCatFacts(num)
            .catch(error => {
            console.error('Произошла ошибка:', error);
        })
    }else if (document.querySelector('.error__input') == null){
        input.style = 'border: 2px solid red';
        const er = document.createElement('error');
        er.innerText = 'You have not enter a number';
        document.getElementById('error-text').prepend(er)
    }
});