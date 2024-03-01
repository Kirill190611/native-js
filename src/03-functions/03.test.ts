import {addSkill, doesStudentLiveIn, makeStudentActive, StudentProps} from "./03";

let student: StudentProps

beforeEach(() => {
    student = {
        id: 1,
        name: "Kirill",
        age: 29,
        isActive: false,
        address: {
            streetTitle: "Gagarina",
            city: {
                title: "Obninsk",
                country: "Russia",
            },
        },
        technologies: [
            {
                id: 1,
                title: "CSS",
            },
            {
                id: 2,
                title: "HTML",
            },
            {
                id: 3,
                title: "React",
            },
        ],
    }
})
test("new tech skill should be added to Student", () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, "Redux")

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("Redux")
})

test("Student should be made active", () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student, true);

    expect(student.isActive).toBe(true);
})

test("Student should live in city", () => {

    let result1 = doesStudentLiveIn(student, "Obninsk");
    let result2 = doesStudentLiveIn(student, "Moscow");

    expect(result1).toBe(true);
    expect(result2).toBe(false);
})