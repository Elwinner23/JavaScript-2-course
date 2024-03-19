let surname = document.getElementById("surname");
var name = document.getElementById("name");
var lastname = document.getElementById("lastname");
var birthday = document.getElementById("birthday");
var studyStart = document.getElementById("studyStart");
var majority = document.getElementById("majority");
var button = document.getElementById("add");

button.addEventListener('click', async function(){
    const response = await fetch('http://localhost:3000/api/students', {method: 'POST', 
    body: JSON.stringify({name: name.value, surname: surname.value, lastname: lastname.value, birthday: birthday.value, studyStart: studyStart.value, majority: majority.value}),
    headers: {'Content-type': 'application/json'}})
})
