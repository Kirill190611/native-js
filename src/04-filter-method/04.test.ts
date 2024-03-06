import {text} from "node:stream/consumers";

test("Should take old people older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 15, 14];

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test("Should take cheaper courses (less than 160)", () => {
    const courses = [
        {title: "CSS", price: 110},
        {title: "js", price: 200},
        {title: "react", price: 150}
    ];

    const cheapCourses = courses.filter(course => course.price < 160);

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe("CSS");
    expect(cheapCourses[0].price).toBe(110);
    expect(cheapCourses[1].title).toBe("react");
    expect(cheapCourses[1].price).toBe(150);
})

test("Get only completed tasks", () => {
    const tasks = [
        {
            id: 1,
            title: "Bread",
            isDone: false,
        },
        {
            id: 2,
            title: "Milk",
            isDone: true,
        },
        {
            id: 3,
            title: "Salt",
            isDone: false,
        },
        {
            id: 4,
            title: "Sugar",
            isDone: true,
        },
    ];

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[0].title).toBe("Milk");
    expect(completedTasks[0].isDone).toBe(true);
    expect(completedTasks[1].id).toBe(4);
    expect(completedTasks[1].title).toBe("Sugar");
    expect(completedTasks[1].isDone).toBe(true);
})

test("Get only uncompleted tasks", () => {
    const tasks = [
        {
            id: 1,
            title: "Bread",
            isDone: false,
        },
        {
            id: 2,
            title: "Milk",
            isDone: true,
        },
        {
            id: 3,
            title: "Salt",
            isDone: false,
        },
        {
            id: 4,
            title: "Sugar",
            isDone: true,
        },
    ];

    const uncompletedTasks = tasks.filter(task => !task.isDone)

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].id).toBe(1);
    expect(uncompletedTasks[0].title).toBe("Bread");
    expect(uncompletedTasks[0].isDone).toBe(false);
    expect(uncompletedTasks[1].id).toBe(3);
    expect(uncompletedTasks[1].title).toBe("Salt");
    expect(uncompletedTasks[1].isDone).toBe(false);
})