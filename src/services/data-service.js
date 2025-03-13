import Student from "../../model/student.js";

export default class DataService {
    constructor() { }

    async getStudentsData() {
        const studentsPromise = fetch('../../assets/students.json')
            .then((resp) => resp.json())
            .then((jsonData) => {
                const students = this.createStudentsFromRawData(jsonData);
                return students;
            })
            .catch((error) => console.log(error));
        return studentsPromise;
    }

    getStudentsByName() {
        return this.getStudentsData().then(students => {
            const studentsClone = students.slice();
            studentsClone.sort((s1, s2) => s1.compareByName(s2));
            return studentsClone;
        })
        
    }

    getStudentsByAge() {
        return this.getStudentsData().then(students =>{
            const studentsClone = students.slice();
            studentsClone.sort((s1, s2) => s1.compareByAge(s2));
            return studentsClone;
        })       
    }

    async getShuffledStudents() {
        const students = await this.getStudentsData();
        const studentsClone = students.slice();
        const shuffledStudents = this.shuffleArray(studentsClone);
        return shuffledStudents;    
    }

    shuffleArray(array) {
        const newArray = array.slice();
        newArray.sort(() => Math.random() - 0.5);
        return newArray;
    }

    createStudentsFromRawData(data) {
        const students = [];
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            const newStudent = new Student(element.name, element.surname, element.yob, element.gender, element.nationality, element.marks);
            students.push(newStudent);
        }
        return students;
    }
}