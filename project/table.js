const surname = document.getElementById("surname");
const name = document.getElementById("name");
const lastname = document.getElementById("lastname");
const birthday = document.getElementById("birthday");
const studyStart = document.getElementById("f_year");
const majority = document.getElementById("majority");
const button = document.getElementById("add");
const button_upd = document.getElementById("update");
const full = document.getElementById("full");

const searchName = document.getElementById("search_name");
const searchMaj = document.getElementById("search_majority");
const searchStart = document.getElementById("search_fyear");
const searchFinish = document.getElementById("search_lyear");
const buttonSearch = document.getElementById("searchi");

button.addEventListener("click", async () => {
    const response = await fetch('http://localhost:3000/api/students', {
    method: 'POST', 
    body: JSON.stringify(
        {name: name.value, 
        surname: surname.value,
        lastname: lastname.value,
        birthday: birthday.value,
        studyStart: studyStart.value,
        majority: majority.value}),
    headers: {
        'Content-type': 'application/json'
        }
    })
    .then((response) => {
        console.log(response);
        update()
    }, (error) => {
        console.log(error);
    });
});

button_upd.addEventListener("click", async () => {
    const res = await fetch('http://localhost:3000/api/students')
    .then(response => response.json())
    .then(json => {
  
        // Loop through each data and add a table row
        json.forEach(student => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${student.surname + " " + student.name + " " + student.lastname}</td>
                <td>${student.majority}</td>
                <td>${student.birthday}</td>
                <td>${student.studyStart}</td>
                <td style="text-align: center;"><button class="deleteButton" data-id="${student.id}">&#10008;</button></td>
            `;
            full.getElementsByTagName('tbody')[0].appendChild(tr);
        });
        const deleteButtons = document.querySelectorAll('.deleteButton');
        deleteButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const studentId = button.dataset.id;
            await fetch(`http://localhost:3000/api/students/${studentId}`, {
                method: 'DELETE',
              });
            this.closest('tr').remove()
            });
        });
    });
});


