export type PeopleProps = {
    name: string
    age: number
}

const people: PeopleProps[] = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitriy Sidorov", age: 18},
]

const transformator = (people: PeopleProps) => {
    return {
        stack: ["css", "html", "js", "tdd", "react",],
        firstName: people.name.split(" ")[0],
        lastName: people.name.split(" ")[1]
    }
}

const devs = [
    {
        stack: ["css", "html", "js", "tdd", "react",],
        firstName: "Andrew",
        lastName: "Ivanov",
    },
    {
        stack: ["css", "html", "js", "tdd", "react",],
        firstName: "Alexander",
        lastName: "Petrov",
    },
    {
        stack: ["css", "html", "js", "tdd", "react",],
        firstName: "Dmitriy",
        lastName: "Sidorov",
    },
]

let d1 = transformator(people[0])
let d2 = transformator(people[1])
let d3 = transformator(people[2])

const devs2 = [
    d1,
    d2,
    d3,
]

const devs3 = people.map(man => ({
    stack: ["css", "html", "js", "tdd", "react",],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
}));

const messages = people.map(man => `Hello ${man.name.split(" ")[0]}! Welcome to IT-Incubator!`);

export const createGreetingMessage = (people: PeopleProps[]) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}! Welcome to IT-Incubator!`)
}