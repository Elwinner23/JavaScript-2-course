async function postData(){
    const response = await fetch('http://localhost:3000/api/students/', {
        method: 'POST',
        body: JSON.stringify({
        name: nameInput.value,
        surname: surnameInput.value,
        lastname: middleNameInput.value,
        birthday: birthInput.value,
        studyStart: studyYearInput.value,
        majority: majorityInput.value,
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

async function filterData(){
    const response = await fetch('http://localhost:3000/api/students');
    const responseData = await response.json();
    
    const fio = document.querySelector('#searchname').value.toLowerCase();
    const majority = document.querySelector('#majority').value.toLowerCase();
    const birthday = document.querySelector('#birthday').value;
    const studyStart = document.querySelector('#studyStart').value;

    let fio_filter; let majority_filter; let birthday_filter; let studyStart_filter;

    if (fio.replaceAll(' ', '') != '' || majority.replaceAll(' ', '') != '' ||
     birthday.replaceAll(' ', '') != '' || studyStart.replaceAll(' ', '') != ''){
        if (fio != ''){
            fio_filter = responseData.filter(item => `${item.surname} ${item.name} ${item.lastname}`.toLowerCase() == fio.trim())
        }else{fio_filter = responseData};
        if (majority != ''){
            majority_filter = responseData.filter(item => item.majority.toLowerCase() == majority.trim())
        }else{majority_filter = responseData};
        if (birthday != ''){
            birthday_filter = responseData.filter(item => item.birthday == birthday.trim())
        }else{birthday_filter = responseData};
        if (studyStart != ''){
            studyStart_filter = responseData.filter(item => item.studyStart == studyStart.trim())
        }else{studyStart_filter = responseData};
        display(getInt(fio_filter, majority_filter, birthday_filter, studyStart_filter));
    }else{getData()};
    
    document.querySelector('#searchname').value = '';
    document.querySelector('#searchmajority').value = '';
    document.querySelector('#birthday').value = '';
    document.querySelector('#studyStart').value = '';
};

function display(data){
    table.innerHTML = '';
    const thagolovok = document.createElement("tr");
    thagolovok.innerHTML = `<tr><th>ФИО</th><td>Направление</td><td>Дата рождения</td><td>Годы обучения</td><td>Удалить</td></tr>`;
    table.append(thagolovok);
    data.forEach(element => {
        let recipient = document.createElement("tr");
        recipient.innerHTML = `
        <th>${element.surname} ${element.name} ${element.lastname}</th>
        <td>${element.majority}</td>
        <td>${element.birthday}</td>
        <td>${element.studyStart}</td>
        <td onclick="deleteData(${element.id})">Х</td>`;
    table.append(recipient);
    });
};
 
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

const surnameInput = document.querySelector('#surname');
const nameInput = document.querySelector('#name');
const middleNameInput = document.querySelector('#lastname');
const birthInput = document.querySelector('#birthday2');
const studyYearInput = document.querySelector('#year1');
const majorityInput = document.querySelector('#majority2');
const table = document.querySelector('#table');

getData();

document.querySelector('#dobavit').addEventListener('click', () => {
    if (surnameInput.value.replaceAll(' ', '') != '' && nameInput.value.replaceAll(' ', '') != '' && 
        middleNameInput.value.replaceAll(' ', '') != '' && birthInput.value.replaceAll(' ', '') != '' && 
        studyYearInput.value.replaceAll(' ', '') != '' && majorityInput.value.replaceAll(' ', '') != ''){
            postData();
            surnameInput.value = '';
            nameInput.value = '';
            middleNameInput.value = '';
            birthInput.value = '';
            studyYearInput.value = '';
            majorityInput.value = '';
        }
});

document.querySelector('#filterbut').addEventListener('click', () => {
    filterData();
});