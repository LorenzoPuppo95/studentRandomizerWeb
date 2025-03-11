export default class DataService {
    constructor() { }
    getStudentsData() {
        const data = [
            {
                "name": "Lorenzo",
                "surname": "Puppo",
                "gender": "Male",
                "marks": [
                    7,
                    10,
                    7
                ],
                "yob": 1995,
                "nationality": "Italy"
            },
            {
                "name": "Jan",
                "surname": "Stigliani",
                "gender": "Male",
                "marks": [
                    8,
                    9,
                    7
                ],
                "yob": 2000,
                "nationality": "Italy"
            },
            {
                "name": "Hugo Alexander",
                "surname": "Martinez Rivas",
                "gender": "Female",
                "marks": [
                    9,
                    9,
                    10
                ],
                "yob": 1994,
                "nationality": "El Salvador"
            },
            {
                "name": "Jeremias Emmanuele",
                "surname": "Cedeno Giler",
                "gender": "Male",
                "marks": [
                    8,
                    9,
                    10
                ],
                "yob": 2003,
                "nationality": "Ecuador"
            },
            {
                "name": "Giovanni",
                "surname": "Sussarellu",
                "gender": "Male",
                "marks": [
                    8,
                    9,
                    7
                ],
                "yob": 1981,
                "nationality": "Italy"
            },
            {
                "name": "Laura",
                "surname": "Mazza",
                "gender": "Female",
                "marks": [
                    8,
                    6,
                    7
                ],
                "yob": 1984,
                "nationality": "Italy"
            },
            {
                "name": "Eusebio",
                "surname": "Veizi",
                "gender": "Peanut",
                "marks": [
                    6,
                    6,
                    7
                ],
                "yob": 1993,
                "nationality": "Albany"
            },
            {
                "name": "Sara",
                "surname": "De Prà",
                "gender": "Fluid",
                "marks": [
                    8,
                    9,
                    10
                ],
                "yob": 1989,
                "nationality": "Italy"
            }
        ]

        const sortedData = data.sort((a, b) => {
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

        return sortedData;
    }
}