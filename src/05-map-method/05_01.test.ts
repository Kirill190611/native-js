import {createGreetingMessage, PeopleProps} from "./05_01";

let people: PeopleProps[] = []

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitriy Sidorov", age: 18},
    ]
})

test("Should get array of greeting messages", () => {
    const messages = createGreetingMessage(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Andrew! Welcome to IT-Incubator!")
    expect(messages[1]).toBe("Hello Alexander! Welcome to IT-Incubator!")
    expect(messages[2]).toBe("Hello Dmitriy! Welcome to IT-Incubator!")
})