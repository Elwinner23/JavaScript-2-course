
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("buttonn").addEventListener("click", async function() {
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const lastname = document.getElementById("ot").value;
        const birthday = document.getElementById("bithday").value;
        const studyStart = document.getElementById("god").value;
        const faculty = document.getElementById("napr").value;
      



        if (name === "" || surname === "" || lastname === "" || birthday === "" || studyStart === "" || faculty === "") {
            if (name === "") document.getElementById("name").style.borderColor = "red";
            if (surname === "") document.getElementById("surname").style.borderColor = "red";
            if (lastname === "") document.getElementById("ot").style.borderColor = "red";
            if (birthday === "") document.getElementById("bithday").style.borderColor = "red";
            if (studyStart === "") document.getElementById("god").style.borderColor = "red";
            if (faculty === "") document.getElementById("napr").style.borderColor = "red";
        } else{
            if (name === "") document.getElementById("name").style.borderColor = "#D2D2D2";
            if (surname === "") document.getElementById("surname").style.borderColor = "#D2D2D2";
            if (lastname === "") document.getElementById("ot").style.borderColor = "#D2D2D2";
            if (birthday === "") document.getElementById("bithday").style.borderColor = "#D2D2D2";
            if (studyStart === "") document.getElementById("god").style.borderColor = "#D2D2D2";
            if (faculty === "") document.getElementById("napr").style.borderColor = "#D2D2D2";
        }

   

        
            try {
                const response = await fetch('http://localhost:3000/api/students', {
                  method: 'post',
                  body: JSON.stringify({name: name, surname: surname, lastname: lastname, birthday: birthday, studyStart: studyStart, faculty: faculty}),
                  headers: { 'Content-Type': 'application/json' }
                }); 
            
                if (response.ok) {
                    const res = await axios.get('http://localhost:3000/api/students');
                    const students = res.data;
                    const table = document.querySelector('table');
                    

                    const newStudent = students[students.length - 1]; 

                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                      <td>${newStudent.surname} ${newStudent.name} ${newStudent.lastname}</td>
                      <td>${newStudent.faculty}</td>
                      <td>${newStudent.birthday}</td>
                      <td>${newStudent.studyStart}</td>
                      <td class="x">X</td>
                    `;
                
                    table.appendChild(tr);
                    console.log(students);
                  }
                } catch (error) {
                  console.error('Ошибка:', error);
                }
                });
                    
               
});


        // var table = document.getElementById("table");
        // table.addEventListener("click", function(event) {
            
        //     if (event.target.classList.contains("delete")) {
        //         var row = event.target.parentNode;
        //         row.parentNode.removeChild(row);
        //     }
        // });
            document.addEventListener('click', function(event) {
            if (event.target.classList.contains('x')) {
                const tr = event.target.parentElement;
                tr.remove(); 
                
                const name = tr.children[0].textContent.split(' '); // разделяем строку с именем на имя, фамилию и отчество
                const faculty = tr.children[1].textContent;
                const dob = tr.children[2].textContent;
                
                
                
                fetch('http://localhost:3000/api/students', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name: name, faculty: faculty, dob: dob })
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed');
                    }
                })
                .catch(error => {
                    console.error('Error', error);
                });
            }
        });