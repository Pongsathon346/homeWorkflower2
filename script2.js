function hideAll(){
    document.getElementById('studentResult').style.display='none';
    document.getElementById('movieResult').style.display='none';
}


function showAllstudents() 
{ 
    hideAll(); 
    document.getElementById('students').style.display = 'block'; 
    tableBodyElm = document.getElementById('students_table'); 
    fetch('https://dv-student-backend-2019.appspot.com/students') 
        .then((response) => { 
            return response.json(); 
        }).then((json) => { 
            students = json ; 
            for (let i = 0; i < students.length; i++) { 
                let newRow = document.createElement('tr') 
                let indexData = document.createElement('th') 
                indexData.scope = 'row' 
                indexData.innerHTML = (i + 1); 
                let studentIdData = document.createElement('td'); 
                studentIdData.innerHTML = students[i].studentId; 
                let studentNameData = document.createElement('td'); 
                studentNameData.innerHTML = students[i].name +' '+students[i].surname;
                let gpaData = document.createElement ('td'); 
                gpaData.innerHTML = students[i].gpa;
                let imageData = document.createflement ('td'); 
                let imageElement = document.createElement('img'); 
                imageElement.src = students[i].image;
                imageElement.classlist.add('profile-img'); 
                imageData.appendChild(imageElement); 
                newRow.appendChild(indexData); 
                newRow.appendChild(studentIdData); 
                newRow.appendChild(studentNameData); 
                newRow. ppendChild(gpaData); 
                newRow.appendchild(imageData);
                tableBodyElm.appendChild(newRow); 
            } 
        });
}
document.getElementById('studentMenu').addEventListener('click', showAllstudents());
    tableBodyElm.appendChild(newRow);
    newRow.addEventListener('click',function() {
        alert(JSON.stringify(students[i]));
    });