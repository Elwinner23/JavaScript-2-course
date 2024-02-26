document.getElementById("getFactsButton").addEventListener("click", function() {
    var factCount = document.getElementById("factCount").value;
    var errorElement = document.getElementById("error");

    if (factCount === "") {
        errorElement.textContent = "Enter the number";
        document.getElementById("factCount").style.border = "1px solid red";
    } else {
        errorElement.textContent = "";
        document.getElementById("factCount").style.border = "";
        getCatFacts(factCount);
    }
});
      

function getCatFacts(count) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://catfact.ninja/facts?limit=" + count, true);
    xhr.onload = function() {
    if (xhr.status === 200) {
        var facts = JSON.parse(xhr.responseText);
            displayFacts(facts.data);
        }
    };
    xhr.send();
}
function displayFacts(facts) {
    var responseElement = document.getElementById("response");
        
    while (responseElement.firstChild) {
        responseElement.removeChild(responseElement.firstChild);
    }
    facts.forEach(function(fact) {
        var factElement = document.createElement("p");
        factElement.textContent = fact.fact;
        responseElement.appendChild(factElement);
    });
}