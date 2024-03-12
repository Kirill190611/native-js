import {ManProps} from "./Destructuring";

let man: ManProps;
beforeEach(() => {
    man = {
        name: "Kirill",
        age: 29,
        lessons: [
            {title: "1",},
            {title: "2",},
            {title: "3",},
        ],
        address: {
            street: {
                title: "Fabr street"
            }
        }
    }
})
test("", () => {
    const {age, lessons, address: {street: {title}}} = man;
    // const {title} = props.address.street

    expect(age).toBe(29);
    expect(lessons.length).toBe(3);
    expect(title).toBe("Fabr street")
})

test(" ", () => {
    const l1 = man.lessons[0];
    const l2 = man.lessons[1];

    const [ls1, ...rest] = man.lessons;

    expect(l1.title).toBe("1");
    expect(l2.title).toBe("2");

    // expect(ls1.title).toBe("1");
    expect(ls1.title).toBe("1");
    expect(rest.length).toBe(2);
    expect(rest[0].title).toBe("2");
    expect(rest[1].title).toBe("3");
})