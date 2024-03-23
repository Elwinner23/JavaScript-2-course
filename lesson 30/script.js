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
};

async function getData(){
    const response = await fetch('http://localhost:3000/api/students');
    const responseData = await response.json();
    display(responseData);
};

async function deleteData(id){
    const response = await fetch(`http://localhost:3000/api/students/${id}`, {
        method: 'DELETE',
    });
    getData();
};


function display(data){
    table.innerHTML = '';
    const heading = document.createElement("tr");
    heading.innerHTML = `<tr><td>ФИО</td><td>Направление</td><td>Дата рождения</td><td>Годы обучения</td><td>Удалить</td></tr>`;
    table.append(heading);
    data.forEach(element => {
        let recipient = document.createElement("tr");
        recipient.innerHTML = `
        <td>${element.surname} ${element.name} ${element.lastname}</td>
        <td>${element.faculty}</td>
        <td>${element.birthday}</td>
        <td>${element.studyStart}</td>
        <td onclick="deleteData(${element.id})">Х</td>`;
    table.append(recipient);
    });
};


const surnameInput = document.querySelector('#surname');
const nameInput = document.querySelector('#name');
const middleNameInput = document.querySelector('#fatherland');
const birthInput = document.querySelector('#date_of_birth');
const studyYearInput = document.querySelector('#year_the_beginning');
const facultyInput = document.querySelector('#direction');
const table = document.querySelector('#table');

getData();

document.querySelector('#add').addEventListener('click', () => {
    if (surnameInput.value.replaceAll(' ', '') != '' && nameInput.value.replaceAll(' ', '') != '' && 
        middleNameInput.value.replaceAll(' ', '') != '' && birthInput.value.replaceAll(' ', '') != '' && 
        studyYearInput.value.replaceAll(' ', '') != '' && facultyInput.value.replaceAll(' ', '') != ''){
            postData();
            surnameInput.value = '';
            nameInput.value = '';
            middleNameInput.value = '';
            birthInput.value = '';
            studyYearInput.value = '';
            facultyInput.value = '';
        }
});
