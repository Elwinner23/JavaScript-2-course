let students = [
    { имя: 'Alice', возраст: 22 },
    { имя: 'Bob', возраст: 20 },
    { имя: 'Alex', возраст: 25 }
    ];
    
    for (let student of students) {
    console.log(`Имя: ${student.имя}, Возраст: ${student.возраст}`);
    }
    
    students.push({ имя: 'Fred', возраст: 19 });
    console.log(students)
    
    let имя = 'Alice';
    
    if (students.some(student => student.имя === имя)) {
    console.log('Ученик найден');
    } else {
    console.log('Ученик не найден');
    }