async function postData(){
    const response = await fetch('http://localhost:3000/api/students', {
        method: 'POST',
        body: JSON.stringify({
        name: nameInput.value,
        surname: surnameInput.value,
        lastname: middleNameInput.value,
        birthday: birthInput.value,
        studyStart: studyYearInput.value,
        faculty: facultyInput.value,

      }),
      headers: {
        'Content-type': 'application/json',
      }
    });
    getData();
}

async function getData(){
    const response = await fetch('http://localhost:3000/api/students');
    const responseData = await response.json()
    table.innerHTML = '';
    const thagolovok = document.createElement("tr");
    thagolovok.innerHTML = `<tr><td>ФИО</td><td>Направление</td><td>Дата рождения</td><td>Годы обучения</td><td>Удалить</td></tr>`;
    table.append(thagolovok);
    responseData.forEach(element => {
        let recipient = document.createElement("tr");
        recipient.innerHTML = `
        <td>${element.surname} ${element.name} ${element.lastname}</td>
        <td>${element.faculty}</td>
        <td>${element.birthday}</td>
        <td>${element.studyStart}</td>
        <td onclick="deleteData(${element.id})">Х</td>`;
    table.append(recipient);
    })
}

async function deleteData(id){
    const response = await fetch(`http://localhost:3000/api/students/${id}`, {
        method: 'DELETE',
    });
    getData();
};

const surnameInput = document.querySelector('#surname');
const nameInput = document.querySelector('#name');
const middleNameInput = document.querySelector('#fatherland');
const birthInput = document.querySelector('#date_of_birth');
const studyYearInput = document.querySelector('#year_the_beginning_of_training2');
const facultyInput = document.querySelector('#direction');
const table = document.querySelector('#table');

getData();

document.querySelector('#add').addEventListener('click', () => {
    if (surnameInput.value.length > 3 && nameInput.value.length > 3 && 
        middleNameInput.value.length > 3 && birthInput.value.length > 4 && 
        studyYearInput.value.length > 3 && facultyInput.value.length > 3){
            postData();
            surnameInput.value = '';
            nameInput.value = '';
            middleNameInput.value = '';
            birthInput.value = '';
            studyYearInput.value = '';
            facultyInput.value = '';
        }
});

