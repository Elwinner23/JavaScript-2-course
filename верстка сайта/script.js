// Обработчик события клика на кнопку
document.getElementById("submitButton").addEventListener("click", async function(event) {
    event.preventDefault(); // Отменяем стандартное поведение кнопки
  
    // Заголовок кнопки
    this.innerHTML = "Отправка данных...";
  
    // Получение значений полей ввода
    const name = document.getElementById("nameInput").value;
    const surname = document.getElementById("surnameInput").value;
    const lastname = document.getElementById("lastnameInput").value;
    const birthday = document.getElementById("birthdayInput").value;
    const studystart = document.getElementById("studystartInput").value;
    const faculty = document.getElementById("facultyInput").value;
  
    // Проверка полей на пустоту
    if (name === "" || surname === "" || lastname === "" || birthday === "" || studystart === "" || faculty === "") {
      // Подсветка пустых полей красным цветом
      if (name === "") document.getElementById("nameInput").style.borderColor = "red";
      if (surname === "") document.getElementById("surnameInput").style.borderColor = "red";
      if (lastname === "") document.getElementById("lastnameInput").style.borderColor = "red";
      if (birthday === "") document.getElementById("birthdayInput").style.borderColor = "red";
      if (studystart === "") document.getElementById("studystartInput").style.borderColor = "red";
      if (faculty === "") document.getElementById("facultyInput").style.borderColor = "red";
  
      // Возвращаем исходный заголовок кнопки
      this.innerHTML = "Отправить";
    } else {
      // Если все поля заполнены, отправляем данные на сервер
      try {
        const response = await fetch('http://localhost:3000/api/students', {
          method: 'post',
          body: JSON.stringify({ name: name, surname: surname, lastname: lastname, birthday: birthday, studystart: studystart, faculty: faculty }),
          headers: { 'Content-Type': 'application/json' }
        }); 
        if (response.ok) {
          // Успешно отправлено
          this.innerHTML = "Данные отправлены";
        } else {
          // Произошла ошибка при отправке
          throw new Error("Ошибка при отправке данных");
        }
      } catch (error) {
        console.error(error);
        // Выводим сообщение об ошибке
        this.innerHTML = "Произошла ошибка";
      }
    }
});

// Добавление полученных данных в таблицу при помощи forEach
const table = document.querySelector(".tabl table");

const newTableRow = document.createElement("tr");
const nameCell = document.createElement("td");
const facultyCell = document.createElement("td");
const birthdayCell = document.createElement("td");
const studystartCell = document.createElement("td");
const deleteCell = document.createElement("td");

nameCell.innerHTML = name + " " + surname + " " + lastname;
facultyCell.innerHTML = faculty;
birthdayCell.innerHTML = birthday;
studystartCell.innerHTML = studystart;
deleteCell.innerHTML = "x";
deleteCell.style.cursor = "pointer";
deleteCell.addEventListener("click", deleteStudent);

newTableRow.appendChild(nameCell);
newTableRow.appendChild(facultyCell);
newTableRow.appendChild(birthdayCell);
newTableRow.appendChild(studystartCell);
newTableRow.appendChild(deleteCell);

table.appendChild(newTableRow);

// Обработчик события клика на ячейку "удалить"
function deleteStudent(event) {
    const tableRow = event.target.parentNode;
    if (tableRow.tagName === "TR") {
        tableRow.remove();
    }
}
