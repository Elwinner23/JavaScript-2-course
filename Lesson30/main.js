const fam = document.getElementById("fam");
const namei = document.getElementById("name");
const oth = document.getElementById("oth");
const birth = document.getElementById("birth");
const start = document.getElementById("start");
const naprav = document.getElementById("naprav");

const btn = document.getElementById("btn");
const fullStudentTable = document.getElementById('full_student');

const searchID = document.getElementById("searchID");
const searchFac = document.getElementById("searchFac");
const searchBitrh = document.getElementById("searchBitrh");
const searchStart = document.getElementById("searchStart");
const buttonSearch = document.getElementById("searchi");

const buttonUpd = document.getElementById("upd");
let data = [];

const filterButton = document.getElementById('filtr');

filterButton.addEventListener('click', () => {
    const facultyValue = searchFac.value.trim();
    const birthDateValue = searchBitrh.value.trim();
    const studyStartValue = searchStart.value.trim();

    const filteredStudents = data.filter(student => {
        if (facultyValue && student.faculty.toLowerCase() !== facultyValue.toLowerCase()) {
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

    renderStudents(filteredStudents);
});

function renderStudents(students) {
    const tbody = fullStudentTable.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    students.forEach(student => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${student.surname} ${student.name} ${student.lastname}</td>
            <td>${student.faculty}</td>
            <td>${student.birthday}</td>
            <td>${student.studyStart}</td>
            <td style="text-align: center;"><button class="deleteButton" data-id="${student.id}">Удалить</button></td>
        `;
        tbody.appendChild(tr);
    });

    const deleteButtons = document.querySelectorAll('.deleteButton');
    deleteButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const studentId = button.dataset.id;
            await axios.delete(`http://localhost:3000/api/students/${studentId}`);
            onsole.log(`Студент с ID ${studentId} удален`);
        });
    });
}


async function obn() {
  const res = await axios.get('http://localhost:3000/api/students');
  const students = res.data;
  data = students
  renderStudents(students);
};

// obn();

function sortTable(columnIndex) {
  var table = document.getElementById("full_student");
  var tbody = table.tBodies[0];
  var rows = Array.from(tbody.rows);

  rows.sort(function(a, b) {
    var x = a.getElementsByTagName("td")[columnIndex].innerHTML.toLowerCase();
    var y = b.getElementsByTagName("td")[columnIndex].innerHTML.toLowerCase();
    return x.localeCompare(y);
  });

  rows.forEach(function(row) {
    tbody.appendChild(row);
  });
}

btn.addEventListener("click", async () => {

  await axios.post("http://localhost:3000/api/students", {
        surname: fam.value,
        name: namei.value,
        lastname: oth.value,
        birthday: birth.value,
        studyStart: start.value,
        faculty: naprav.value
      
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    obn();
});

buttonSearch.addEventListener("click", async () => {
  const res = await axios.get(`http://localhost:3000/api/students/${searchID.value}`);
  const student = res.data;
  console.log(student);
  fullStudentTable.getElementsByTagName('tbody')[0].innerHTML = '';
  const tr = document.createElement('tr');
  tr.innerHTML = `
      <td>${student.surname + " " + student.name + " " + student.lastname}</td>
      <td>${student.faculty}</td>
      <td>${student.birthday}</td>
      <td>${student.studyStart}</td>
      <td style="text-align: center;"><button class="deleteButton" data-id="${student.id}">Удалить</button></td>
  `;
  fullStudentTable.getElementsByTagName('tbody')[0].appendChild(tr);
  obn();
});

buttonUpd.addEventListener("click", async () => {
  let patchStudent = {}
  if (searchBitrh.value){
    patchStudent["birthday"] = searchBitrh.value
  }
  if (searchFac.value){
    patchStudent["faculty"] = searchFac.value
  }
  if (searchStart.value){
    patchStudent["studyStart"] = searchStart.value
  }
  console.log(patchStudent);
  if (patchStudent){
    const res = await axios.patch(`http://localhost:3000/api/students/${searchID.value}`, patchStudent);
  }
  obn();
});
