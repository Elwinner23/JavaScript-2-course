async function serverfactcat(numberfact) {
    const response = await fetch(`https://catfact.ninja/facts?limit=${numberfact}`);
    const data = await response.json();
    const facts = data.data;
    return facts;
}

async function fact() {
    var numberfact = document.getElementById('numfact').value;
    
    if(numberfact === "") {
        alert("Ввидите число");
        return;
    }
    
    const factscat = await serverfactcat(numberfact);

    const facttext = factscat.map(fact => fact.fact)
    text(facttext);
}

function text(facttext){
    const factsContainer = document.getElementById('factsssw');
    
    facttext.forEach(facttext => {
        let factss = document.createElement('p');
        factss.innerHTML = facttext;
        factsContainer.appendChild(factss);
    });
}

function clearFacts() {
    const factsContainer = document.getElementById('factsssw');
    factsContainer.innerHTML = "";
}