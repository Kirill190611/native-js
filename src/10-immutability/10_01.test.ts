import {
    makeManCopy,
    makeManCopy1,
    makeManCopy2,
    makeManCopy3, makeManCopy4, makeManCopy5, makeManCopy6, makeManCopy7, makeManCopy8,
    makeNumbersCopy,
    ManProps,
    ManProps2,
    ManProps3, ManProps4, ManProps5, ManProps6, ManProps7,
} from "./10_01";

test("simple copy of object", () => {
    let man: ManProps = {
        name: 'John',
        age: 28
    };

    let manFullCopy = makeManCopy(man);

    expect(manFullCopy.name).toBe(man.name)
    expect(manFullCopy.age).toBe(man.age)
    expect(manFullCopy).toStrictEqual(man)
})

test("simple copy of array", () => {
    let numbers: Array<number> = [1, 2, 3];

    let numbersFullCopy = makeNumbersCopy(numbers);

    expect(numbersFullCopy.length).toBe(3)
    expect(numbersFullCopy[0]).toBe(1)
    expect(numbersFullCopy[1]).toBe(2)
    expect(numbersFullCopy[2]).toBe(3)
    expect(numbersFullCopy[0]).toBe(numbers[0])
    expect(numbersFullCopy[1]).toBe(numbers[1])
    expect(numbersFullCopy[2]).toBe(numbers[2])
})

test("copy of object inside an object", () => {
    let man1 = {
        name: 'John',
        age: 28,
        mother: {
            name: 'Kate',
            age: 50
        }
    };

    let man1FullCopy = makeManCopy1(man1);
    expect(man1FullCopy.name).toBe(man1.name)
    expect(man1FullCopy.age).toBe(man1.age)
    expect(man1FullCopy).toStrictEqual(man1)
})

test("copy of Array of primitives inside an object", () => {
    let man2: ManProps2 = {
        name: 'John',
        age: 28,
        friends: ["Peter", "Steven", "William"]
    };

    let man2FullCopy = makeManCopy2(man2, 'John');

    expect(man2FullCopy.friends.length).toBe(4);
    expect(man2FullCopy.friends[0]).toBe("Peter");
    expect(man2FullCopy.friends[1]).toBe("Steven");
    expect(man2FullCopy.friends[2]).toBe("William");
    expect(man2FullCopy.friends[3]).toBe("John");
})

test("copy of Array of objects", () => {
    let people: Array<ManProps> = [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ];

    let peopleFullCopy = makeManCopy3(people);

    expect(peopleFullCopy.length).toBe(3);
    expect(peopleFullCopy[1].name).toBe("Steven");
    expect(peopleFullCopy[1].age).toBe(32);
})

test("copy of Array of objects inside object", () => {
    let man3: ManProps3 = {
        name: 'John',
        age: 28,
        friends: [
            {name: "Peter", age: 30},
            {name: "Steven", age: 32},
            {name: "William", age: 28}
        ]
    };

    let man3FullCopy = makeManCopy4(man3);

    expect(man3FullCopy).toStrictEqual(man3);
    expect(man3FullCopy.friends.length).toBe(3);
    expect(man3FullCopy.friends[0].name).toBe("Peter");
    expect(man3FullCopy.friends[0].name).toBe(man3.friends[0].name);
    expect(man3FullCopy.friends[1].name).toBe(man3.friends[1].name);
    expect(man3FullCopy.friends[2].name).toBe(man3.friends[2].name);
})

test("copy of Object inside an object, inside an object", () => {
    let man4: ManProps4 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            }
        }
    };

    let man4FullCopy = makeManCopy5(man4);

    expect(man4FullCopy.mother.work.position).toBe("doctor");
    expect(man4FullCopy.mother.work.experience).toBe(15);
    expect(man4FullCopy.mother.work.experience).toBe(man4.mother.work.experience);
    expect(man4FullCopy.mother.work.position).toBe(man4.mother.work.position);

})

test("copy of Array of objects inside object -> object", () => {
    let man5: ManProps5  = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {name: "Kevin", age: 80},
                {name: "Jennifer", age: 78},
            ]
        }
    };

    let man5FullCopy = makeManCopy6(man5);

    expect(man5FullCopy).toStrictEqual(man5);
    expect(man5FullCopy.mother.name).toBe("Kate");
    expect(man5FullCopy.mother.age).toBe(50);
    expect(man5FullCopy.mother.work.position).toBe("doctor");
    expect(man5FullCopy.mother.work.experience).toBe(15);
    expect(man5FullCopy.mother.parents[0].name).toBe("Kevin");
    expect(man5FullCopy.mother.parents[1].name).toBe("Jennifer");
    expect(man5FullCopy.mother.parents[0].age).toBe(80);
    expect(man5FullCopy.mother.parents[1].age).toBe(78);
    expect(man5FullCopy.mother.name).toBe(man5.mother.name);
    expect(man5FullCopy.mother.age).toBe(man5.mother.age);
    expect(man5FullCopy.mother.work.position).toBe(man5.mother.work.position);
    expect(man5FullCopy.mother.work.experience).toBe(man5.mother.work.experience);
    expect(man5FullCopy.mother.parents[0].name).toBe(man5.mother.parents[0].name);
    expect(man5FullCopy.mother.parents[1].name).toBe(man5.mother.parents[1].name);
    expect(man5FullCopy.mother.parents[0].age).toBe(man5.mother.parents[0].age);
    expect(man5FullCopy.mother.parents[1].age).toBe(man5.mother.parents[1].age);
})

test("copy of Object inside an object -> array -> object ->  object", () => {
    let man6: ManProps6 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {
                    name: "Kevin",
                    age: 80,
                    favoriteDish: {
                        title: "borscht"
                    }
                },
                {
                    name: "Jennifer",
                    age: 78,
                    favoriteDish: {
                        title: "sushi"
                    }
                },
            ]
        }
    };

    let man6FullCopy = makeManCopy7(man6);

    expect(man6).toStrictEqual(man6FullCopy);
    expect(man6FullCopy.mother.parents[0].favoriteDish.title).toBe("borscht");
    expect(man6FullCopy.mother.parents[1].favoriteDish.title).toBe("sushi");
    expect(man6FullCopy.mother.parents[0].favoriteDish.title).toBe(man6.mother.parents[0].favoriteDish.title);
    expect(man6FullCopy.mother.parents[1].favoriteDish.title).toBe(man6.mother.parents[1].favoriteDish.title);
})

test("copy of Array of objects inside an object -> object -> array -> object ->  object", () => {
    let man7: ManProps7 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {
                    name: "Kevin",
                    age: 80,
                    favoriteDish: {
                        title: "borscht",
                        ingredients: [
                            {title: "beet", amount: 3},
                            {title: "potatoes", amount: 5},
                            {title: "carrot", amount: 1},
                        ]
                    }
                },
                {
                    name: "Jennifer",
                    age: 78,
                    favoriteDish: {
                        title: "sushi",
                        ingredients: [
                            {title: "fish", amount: 1},
                            {title: "rise", amount: 0.5}
                        ]
                    }
                },
            ]
        }
    };

    let man7FullCopy = makeManCopy8(man7);

    expect(man7).toStrictEqual(man7FullCopy);
    expect(man7.mother.parents[1].favoriteDish.title).toBe(man7FullCopy.mother.parents[1].favoriteDish.title)
    expect(man7.mother.parents[1].favoriteDish.ingredients[0].title).toBe(man7FullCopy.mother.parents[1].favoriteDish.ingredients[0].title)
    expect(man7.mother.parents[1].favoriteDish.ingredients[0].amount).toBe(man7FullCopy.mother.parents[1].favoriteDish.ingredients[0].amount)

})