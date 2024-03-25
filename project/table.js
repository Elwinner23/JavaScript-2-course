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
const addButton = document.getElementById('add');

async function getData(){
    const response = await fetch('http://localhost:3000/api/students');
    var responseData = await response.json();
    data = responseData;
    display(responseData);
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
        <td class="cross" onclick="deleteData(${element.id})">Х</td>`;
    table.append(recipient);
    });
    sortTable(2)
};

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

async function deleteData(id){
    const response = await fetch(`http://localhost:3000/api/students/${id}`, {
        method: 'DELETE',
    });
    getData();
};

function filtration(data){
    const nameValue = full_name.value.trim();
    const facultyValue = majority_search.value.trim();
    const birthDateValue = birthday.value.trim();
    const studyStartValue = start.value.trim();
    

    if (nameValue.replaceAll(' ', '') != '' && facultyValue.replaceAll(' ', '') != '' && 
    birthDateValue.replaceAll(' ', '') != '' && studyStartValue.replaceAll(' ', '') != ''){
        var filteredStudents = data.filter(student => {
            const fullfullnameValue = student.surname + ' ' + student.name + ' ' + student.lastname;
            if (nameValue && fullfullnameValue.toLowerCase() !== nameValue.toLowerCase()) {
                return false;
            }
            if (facultyValue && student.majority.toLowerCase() !== facultyValue.toLowerCase()) {
                return false;
            }
            if (birthDateValue && student.birthday !== birthDateValue) {
                return false;
            }
            if (studyStartValue && student.studyStart !== studyStartValue) {
                return false;
            }
            return true;
        });
    }
    display(filteredStudents);
    clean(full_name, majority_search, birthday, start, start, start)
}

function clean(a, b, c, d, e, f){
    a.value = '';
    b.value ='';
    c.value = '';
    d.value = '';
    e.value = '';
    f.value = '';
}

function sortTable(columnIndex) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("full");
    switching = true;
  
    while (switching) {
      switching = false;
      rows = table.getElementsByTagName("tr");
  
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[columnIndex];
        y = rows[i + 1].getElementsByTagName("td")[columnIndex];
  
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
  
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

function check(a){
    if (a.value == ''){
        a.style.border = "1px solid red";
    }
}

function checking(a, b, c, d, e, f){
    check(a);
    check(b);
    check(c);
    check(d);
    check(e);
    check(f);
}

function proverka(a, b, c, d, e, f, but){
    if (a.value.replaceAll(' ', '') != '' && b.value.replaceAll(' ', '') != '' && 
        c.value.replaceAll(' ', '') != '' && d.value.replaceAll(' ', '') != '' && 
        e.value.replaceAll(' ', '') != '' && f.value.replaceAll(' ', '') != ''){
            but.style.backgroundColor = '#5E5BFF';
            but.style.cursor = 'pointer';
        }
}

//проверка формы заполнения
surnameInput.addEventListener('focusout', () => {
        proverka(surnameInput, nameInput, middleNameInput, birthInput, studyYearInput, majority, addButton)
});
nameInput.addEventListener('focusout', () => {
    proverka(surnameInput, nameInput, middleNameInput, birthInput, studyYearInput, majority, addButton)
});
middleNameInput.addEventListener('focusout', () => {
    proverka(surnameInput, nameInput, middleNameInput, birthInput, studyYearInput, majority, addButton)
});
birthInput.addEventListener('focusout', () => {
    proverka(surnameInput, nameInput, middleNameInput, birthInput, studyYearInput, majority, addButton)
});
studyYearInput.addEventListener('focusout', () => {
    proverka(surnameInput, nameInput, middleNameInput, birthInput, studyYearInput, majority, addButton)
});
majority.addEventListener('focusout', () => {
    proverka(surnameInput, nameInput, middleNameInput, birthInput, studyYearInput, majority, addButton)
})

//проверка формы фильтрации
full_name.addEventListener('focusout', () => {
    proverka(full_name, majority_search, birthday, start, start, start, filterButton)
});
majority_search.addEventListener('focusout', () => {
    proverka(full_name, majority_search, birthday, start, start, start, filterButton)
});
birthday.addEventListener('focusout', () => {
    proverka(full_name, majority_search, birthday, start, start, start, filterButton)
});
start.addEventListener('focusout', () => {
    proverka(full_name, majority_search, birthday, start, start, start, filterButton)
})


getData();

addButton.addEventListener('mouseenter', () => {
    checking(surnameInput, nameInput, middleNameInput, birthInput, studyYearInput, majority)
});

filterButton.addEventListener('mouseenter', () => {
    checking(full_name, majority_search, birthday, start, start, start)
});

addButton.addEventListener('click', () => {
    if (surnameInput.value.replaceAll(' ', '') != '' && nameInput.value.replaceAll(' ', '') != '' && 
        middleNameInput.value.replaceAll(' ', '') != '' && birthInput.value.replaceAll(' ', '') != '' && 
        studyYearInput.value.replaceAll(' ', '') != '' && majority.value.replaceAll(' ', '') != ''){
            postData();
            clean(surnameInput, nameInput, middleNameInput, birthInput, studyYearInput, majority)
        }
});

filterButton.addEventListener('click', () => {
    filtration(data)
});


