let name1 = document.getElementById("name")
let surname = document.getElementById("surname")
let lastname = document.getElementById("lastname")
let birthday = document.getElementById("birthday")
let year1 = document.getElementById("year1")
let faculty = document.getElementById("direction")

const filterNameInput = document.getElementById('filterName');
const filterFacultyInput = document.getElementById('filterFaculty');
const filterStartYearInput = document.getElementById('filterStartYear');
const filterEndYearInput = document.getElementById('filterEndYear');


let table = document.getElementById("table")

let buttonn = document.getElementById("addStud");

buttonn.addEventListener('click', async () => {
  try {
    const response = await fetch('http://localhost:3000/api/students', {
      method: 'post',
      body: JSON.stringify({name: name1.value, surname: surname.value, lastname: lastname.value, birthday: birthday.value, studyStart: year1.value, faculty: faculty.value}),
      headers: { 'Content-Type': 'application/json' }
    }); 
    if (response.ok) {
      buttonn.innerHTML = "Добавить студента";
      name1.style.border = "none";
      surname.style.border = "none";
      lastname.style.border = "none";
      birthday.style.border = "none";
      year1.style.border = "none";
      faculty.style.border = "none";
      
      const res = await axios.get('http://localhost:3000/api/students');
      const students = res.data;
      table.getElementsByTagName('tbody')[0].innerHTML = '';
          
      students.forEach(student => {
        const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${student.surname + " " + student.name + " " + student.lastname}</td>
            <td>${student.faculty}</td>
            <td>${student.birthday}</td>
            <td>${student.studyStart}</td>
            <td style="text-align: center;"><button class="deleteButton" data-id="${student.id}" style="background-color: #363636; color: white; border: none;">X</button></td>
        `;
        table.getElementsByTagName('tbody')[0].appendChild(tr);
      });
      console.log(students);
      const deleteButtons = document.querySelectorAll('.deleteButton');
      deleteButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const studentId = button.dataset.id;
            const row = button.parentNode.parentNode;
            row.remove();
            await axios.delete(`http://localhost:3000/api/students/${studentId}`);
            console.log(`Студент с ID ${studentId} удален`);
        });
      });
      let inputs = document.getElementsByClassName("input2");
     for (let i = 0; i < inputs.length; i++) {
       inputs[i].value = '';
      }
    } else {
      throw new Error("Ошибка при отправке данных");
    }
  } catch (error) {
    console.error(error);
    buttonn.innerHTML = "Произошла ошибка";
    if (name1.value === "") {name1.style.border = "1px solid red";}
    else{name1.style.border = "none";}
    if (surname.value === "") {surname.style.border = "1px solid red";}
    else{surname.style.border = "none";}
    if (lastname.value === "") {lastname.style.border = "1px solid red";}
    else{lastname.style.border = "none";}
    if (birthday.value === "") {birthday.style.border = "1px solid red";}
    else{birthday.style.border = "none";}
    if (year1.value === "") {year1.style.border = "1px solid red";}
    else{year1.style.border = "none";}
    if (faculty.value === "") {faculty.style.border = "1px solid red";}
    else{faculty.style.border = "none";}
  }
});

function filterTable() {
  const filterName = filterNameInput.value.toLowerCase();
  const filterFaculty = filterFacultyInput.value.toLowerCase();
  const filterStartYear = filterStartYearInput.value;
  const filterEndYear = filterEndYearInput.value;

  for (let i = 1; i < table.rows.length; i++) {
    const row = table.rows[i];
    const name = row.cells[0].textContent.toLowerCase();
    const faculty = row.cells[1].textContent.toLowerCase();
    const startYear = row.cells[2].textContent;
    const endYear = row.cells[3].textContent;

    const isNameMatch = name.includes(filterName);
    const isFacultyMatch = faculty.includes(filterFaculty);
    const isStartYearMatch = startYear.includes(filterStartYear);
    const isEndYearMatch = endYear.includes(filterEndYear);

    if (isNameMatch && isFacultyMatch && isStartYearMatch && isEndYearMatch) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  }
}

filterNameInput.addEventListener('input', filterTable);
filterFacultyInput.addEventListener('input', filterTable);
filterStartYearInput.addEventListener('input', filterTable);
filterEndYearInput.addEventListener('input', filterTable);

function sortTable(columnIndex) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
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