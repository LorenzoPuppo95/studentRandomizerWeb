import DataService from "./services/data-service.js";

const service = new DataService();
const container = document.getElementById('students-container');

function reloadPage() {
    container.innerHTML = '';
    const studentData = service.getRandomizedStudents();
    studentData.forEach(student => {
        const studentContainer = document.createElement('div');
        const nameContainer = document.createElement('h2');
        const infoContainer = document.createElement('h4');
        const genderContainer = document.createElement('h5');
        const nameNode = document.createTextNode(student.name + ' ' + student.surname);
        nameContainer.appendChild(nameNode);
        const infoNode = document.createTextNode('From ' + student.nationality + ', ' + student.getAge() + ' years old!');
        infoContainer.appendChild(infoNode);
        const genderNode = document.createTextNode('Is a ' + student.gender);
        genderContainer.appendChild(genderNode);
        studentContainer.classList.add('student-container-son');
        container.appendChild(studentContainer);
        studentContainer.appendChild(nameContainer);
        studentContainer.appendChild(infoContainer);
        studentContainer.appendChild(genderContainer);
    });
}
reloadPage();
const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', reloadPage);