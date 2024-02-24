let fsubmit = document.getElementById("fsubmit");
let inpNum = document.getElementById("num")
let lab = document.getElementById("lab")
if (inpNum.value == 0){
    inpNum.style = 'border: 1px solid red';
    lab.style = 'color: red'
    inpNum.placeholder = 'Ошибка, введите число!'
}

fsubmit.onclick = function(event) {
async function getCatFacts() {
    inpNum.style = 'border: none';
    lab.style = 'color: black'
    inpNum.placeholder = ''

    let input = document.getElementById("num").value
    const response = await fetch(`https://catfact.ninja/facts?max_length=1000&limit=${input}`);
    const data = await response.json();
    const factsData = data.data;
    console.log(factsData)
    const factsList = document.getElementById("factsList");

    factsData.forEach(fact => {
        const newLi = document.createElement("li");
        newLi.className = "facts__item";

        const factBlock1 = document.createElement("div");
        factBlock1.className = "facts__block";
        factBlock1.innerHTML = `<span class="fact__key">Fact:</span><span class="fact__name">${fact.fact}</span>`;
        newLi.appendChild(factBlock1);

        factsList.appendChild(newLi);
    });

}

getCatFacts()
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });
};