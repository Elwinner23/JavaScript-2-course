let name1 = document.getElementById("name")
let surname = document.getElementById("surname")
let lastname = document.getElementById("lastname")
let birthday = document.getElementById("birthday")
let year1 = document.getElementById("year1")
let faculty = document.getElementById("direction")

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
