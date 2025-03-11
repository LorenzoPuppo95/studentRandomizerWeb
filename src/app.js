import DataService from "./services/data-service.js";

const service = new DataService();
const studentData = service.getStudentsData();
const container = document.getElementById('students-container');

studentData.sort((a, b) => {
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();
    if (name1 < name2) {
        return -1;
    }
    if (name1 > name2) {
        return 1;
    }
    return 0;
});

studentData.forEach(student => {
    const studentContainer = document.createElement('div');
    const nameContainer = document.createElement('h2');
    const infoContainer = document.createElement('h4');
    const genderContainer = document.createElement('h5');
    const annoAttuale = new Date().getFullYear();
    const studentAge = annoAttuale - student.yob;
    const nameNode = document.createTextNode(student.name + ' ' + student.surname);
    nameContainer.appendChild(nameNode);
    const infoNode = document.createTextNode('Born in ' + student.nationality + ' and has ' + studentAge + ' years!');
    infoContainer.appendChild(infoNode);
    const genderNode = document.createTextNode('Gender: ' + student.gender);
    genderContainer.appendChild(genderNode);
    studentContainer.classList.add('student-container-son');
    container.appendChild(studentContainer);
    studentContainer.appendChild(nameContainer);
    studentContainer.appendChild(infoContainer);
    studentContainer.appendChild(genderContainer);
});
