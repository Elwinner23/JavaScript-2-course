const surnameInput = document.getElementById('surname');
const nameInput = document.getElementById('name');
const middleNameInput = document.getElementById('lastname');
const birthInput = document.getElementById('birthday');
const studyYearInput = document.getElementById('f_year');
const majority = document.getElementById('majority');
const table = document.getElementById('full');

const full_name = document.getElementById('search_name');
const majority_search = document.getElementById('search_majority');
const birthday = document.getElementById('search_byear');
const start = document.getElementById('search_syear');

const filterButton = document.getElementById('update');

async function postData(){
    const response = await fetch('http://localhost:3000/api/students', {
        method: 'POST',
        body: JSON.stringify({
        name: nameInput.value,
        surname: surnameInput.value,
        lastname: middleNameInput.value,
        birthday: birthInput.value,
        studyStart: studyYearInput.value,
        majority: majority.value,
      }),
      headers: {
        'Content-type': 'application/json',
      }
    });
    getData();
};

async function getData(){
    const response = await fetch('http://localhost:3000/api/students');
    var responseData = await response.json();
    data = responseData;
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
    const thagolovok = document.createElement("tr");
    thagolovok.innerHTML = `<tr><td>ФИО</td><td>Направление</td><td>Дата рождения</td><td>Годы обучения</td><td>Удалить</td></tr>`;
    table.append(thagolovok);
    data.forEach(element => {
        let recipient = document.createElement("tr");
        recipient.innerHTML = `
        <td>${element.surname} ${element.name} ${element.lastname}</td>
        <td>${element.majority}</td>
        <td>${element.birthday}</td>
        <td>${element.studyStart}</td>
        <td onclick="deleteData(${element.id})">Х</td>`;
    table.append(recipient);
    });
};

// Функция по поиску пересечения  
function getInt(...arrs) {
	let result = [];
	let arr0 = arrs.shift();
	
	for (let elem of arr0) {
		if(inArrays(arrs, elem)) {
			result.push(elem);
		}
	}
	
	return result;
}

function inArrays(arrs, elem) {
	for (let arr of arrs) {
		if (!inArray(arr, elem)) {
			return false;
		}
	}
	
	return true;
}

function inArray(arr, elem) {
	return arr.find(e => e === elem);
}

// ----------------------------

function filtration(data){
    const nameValue = full_name.value.trim();
    const facultyValue = majority_search.value.trim();
    const birthDateValue = birthday.value.trim();
    const studyStartValue = start.value.trim();
    

    const filteredStudents = data.filter(student => {
        //const fullfullnameValue = student.name + ' ' + student.surname + ' ' + student.lastname;
        //console.log(fullfullnameValue)
        if (nameValue && student.majority.toLowerCase() !== facultyValue.toLowerCase()) {
            return false;
        }
        //if (facultyValue && fullfullnameValue !== facultyValue.toLowerCase()) {
        //    return false;
        //}
        if (birthDateValue && student.birthday !== birthDateValue) {
            return false;
        }
        if (studyStartValue && student.studyStart !== studyStartValue) {
            return false;
        }
        return true;
    });
    console.log(filteredStudents)
    display(filteredStudents);
}

filterButton.addEventListener('click', () => {
    filtration(data)
});

getData();

document.getElementById('add').addEventListener('click', () => {
    if (surnameInput.value.replaceAll(' ', '') != '' && nameInput.value.replaceAll(' ', '') != '' && 
        middleNameInput.value.replaceAll(' ', '') != '' && birthInput.value.replaceAll(' ', '') != '' && 
        studyYearInput.value.replaceAll(' ', '') != '' && majority.value.replaceAll(' ', '') != ''){
            postData();
            surnameInput.value = '';
            nameInput.value = '';
            middleNameInput.value = '';
            birthInput.value = '';
            studyYearInput.value = '';
            majority.value = '';
        }
});


