import DataService from "./services/data-service.js";

const service = new DataService();

function nameSort() {
    const studentData = service.getStudentsByName();
    render(studentData);
}
window.nameSort = nameSort;

function ageSort() {
    const studentData = service.getStudentsByAge();
    render(studentData);
}
window.ageSort = ageSort;

function shuffleSort() {
    const studentData = service.getShuffledStudents();
    render(studentData);
}
window.shuffleSort = shuffleSort;

const studentData = service.getShuffledStudents();
render(studentData);
function render(studentData) {
    const container = document.getElementById('students-container');
    container.innerHTML = '';
    studentData.forEach(student => {
        const studentContainer = document.createElement('div');
        const nameContainer = createTextElement('h2', student.name + ' ' + student.surname);
        const infoContainer = createTextElement('h4', 'From ' + student.nationality + ', ' + student.getAge() + ' years old!');
        const genderContainer = createTextElement('h5', 'Is a ' + student.gender);
        studentContainer.classList.add('student-container-son');
        container.appendChild(studentContainer);
        studentContainer.appendChild(nameContainer);
        studentContainer.appendChild(infoContainer);
        studentContainer.appendChild(genderContainer);
    });
}

function createTextElement(elementType, text) {
    const element = document.createElement(elementType);
    const node = document.createTextNode(text);
    element.appendChild(node);
    return element;
}

const nameButton = document.getElementById('name-button');
nameButton.addEventListener('click', nameSort);
const ageButton = document.getElementById('age-button');
ageButton.addEventListener('click', ageSort);
const shuffleButton = document.getElementById('shuffle-button');
shuffleButton.addEventListener('click', shuffleSort);