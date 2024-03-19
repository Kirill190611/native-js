type MentorsProps = {
    "id": string
    "title": string
    "my salary": number
}

const mentors: Array<MentorsProps> = [
    {"id": 'id100', "title": "Dimych", "my salary": 10}, // 0
    {"id": 'id20222', "title": "Viktor", "my salary": 100}, // 1
    {"id": 'id323242', "title": "Valera", "my salary": 100}, // 2
    {"id": 'id489829898989', "title": "Arten", "my salary": 100}, // 3
];

const artemId = 'id489829898989';
const mentor1 = mentors.find(m => m.id === artemId); // const mentor = mentors[3] (O(n))
const mentor2 = mentors[3] // 0(1)
/*mentor1.salary = 50;
mentor2.salary = 50;*/
mentor1["my salary"] = 50;
mentor2["my salary"] = 50;
console.log(mentor1["id"]);
console.log(mentor1.id);
console.log(mentor1["title"]);
console.log(mentor1.title);
console.log(mentor1["my salary"]);


const propetryName = "title";
const value = "Sveta";

mentor1[propetryName] = value; //
mentor1.title = "Sveta"

// ______________________________________________________

const students = [
    {id: 'id101', title: "Andrew",}, // 0
    {id: 'id2', title: "Ann",}, // 1
    {id: 'id4', title: "Alex",}, // 2
    //...
    {
        id: 'id1000000',
        title: "Marina",
        technologies: [
            {id: 1, title: "CSS",},
            {id: 2, title: "HTMLS",},
            {id: 3, title: "JS",},
            {id: 4, title: "Reac",},
        ],
    }, // 1000000
];

const marina1 = students.find(s => s.id === "id1000000")
const tech = marina1.technologies.find(t => t.id === 4)
tech.title = "React";

type TechProps = {
    [key: string]: {id: number, title: string}
}

type StudentObjProps = {
    id: string
    title: string
    technologies?: TechProps
}

type StudentsObjProps = {
    [key: string]: StudentObjProps
}

const studentsObj: StudentsObjProps = {
    'id101': {id: 'id101', title: "Andrew",},
    'id2': {id: 'id2', title: "Ann",},
    'id4': {id: 'id4', title: "Alex",},
    //....
    'id1000000': {
        id: 'id1000000',
        title: "Marina",
        technologies: {
            "1": {id: 1, title: "CSS",},
            "2": {id: 2, title: "HTML",},
            "3": {id: 3, title: "JS",},
            "4": {id: 4, title: "Reac",},
        },
    },
};

const marina2 = studentsObj['id1000000'];
const tech2 = marina2.technologies["4"];
tech2.title = "React";
