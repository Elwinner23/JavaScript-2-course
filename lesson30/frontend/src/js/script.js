document.getElementById('addstudent').addEventListener('click', async function() {
    const faculty = document.getElementById('direction').value;
    const studyStart = document.getElementById('year_of_commencement').value;
    const birthday = document.getElementById('date_of_birth').value;

    const surname = document.getElementById('middle_name').value;
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('surname').value;

    const data = {
        lastname,
        name,
        surname,
        faculty,
        studyStart,
        birthday
    }

    try {
        const response = await fetch('http://localhost:3000/api/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log(result);

        addStudentToTable(result);
    } catch (error) {
        console.error('Error:', error);
    }
});

function addStudentToTable(student) {
    const tbody = document.querySelector('tbody');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td class="border-2 indent-[12px]">${student.lastname} ${student.name} ${student.surname}</td>
        <td class="border-2 indent-[12px]">${student.faculty}</td>
        <td class="border-2 indent-[12px]">${student.birthday}</td>
        <td class="border-2 indent-[12px]">${student.studyStart}</td>
        <td class="border-2 indent-[12px]"><button class="delete-btn" data-id="${student.id}">X</button></td>
    `;
    tbody.appendChild(tr);

    tr.querySelector('.delete-btn').addEventListener('click', async function() {
        const studentId = this.getAttribute('data-id');
        try {
            await fetch(`http://localhost:3000/api/students/${studentId}`, {
                method: 'DELETE'
            });
            tr.remove();
        } catch (error) {
            console.error('Error:', error);
        }
    });
}

async function fetchAndDisplayStudents() {
    const url = new URL('http://localhost:3000/api/students');
    try {
        const response = await fetch(url);
        const students = await response.json();
        document.querySelector('tbody').innerHTML = '';
        students.forEach(student => addStudentToTable(student));
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchAndDisplayStudents();