import {
    addCompany,
    addedNewBook, addedNewBooksToUser, CompanyType,
    makeHairstyle,
    moveUser, moveUserToOtherHouse, removeUserBook, updateCompany, updateCompanyTitle, updateUserBook,
    upgradeUserLaptop,
    upgradeUserLaptopRam,
    upgradeUserLaptopVideocardVersion,
    UserType, UserWithBooksType,
    UserWIthLaptopType
} from "./10";

test("reference type test", () => {
    let user: UserWIthLaptopType & UserWithBooksType = {
        name: "Kirill",
        hair: 30,
        address: {
            title: "Obninsk",
            house: 12,
        },
        laptop: {
            title: "HP",
            parts: {
                ram: 16,
                videocard: {
                    title: "Nvidia",
                    version: "15.5",
                },
            },
        },
        books: [
            "css", "html", "js", "react",
        ],
        companies: [
            {
                title: "Apple",
                id: 1,
            },
        ],
    }


    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(30);
    expect(awesomeUser.hair).toBe(15);
})

test("change address", () => {
    let user: UserWIthLaptopType & UserWithBooksType = {
        name: "Kirill",
        hair: 30,
        address: {
            title: "Obninsk",
            house: 12,
        },
        laptop: {
            title: "HP",
            parts: {
                ram: 16,
                videocard: {
                    title: "Nvidia",
                    version: "15.5",
                },
            },
        },
        books: [
            "css", "html", "js", "react",
        ],
        companies: [
            {
                title: "Apple",
                id: 1,
            },
        ],
    }


    const movedUser = moveUser(user, 'Moscow')

    expect(user).not.toBe(movedUser);
    expect(user.address.title).toBe("Obninsk");
    expect(movedUser.address.title).toBe('Moscow');
    expect(user.address).not.toBe(movedUser.address);
    expect(user.laptop).toStrictEqual(movedUser.laptop);

})

test("upgrade laptop to macbook", () => {
    let user: UserWIthLaptopType & UserWithBooksType = {
        name: "Kirill",
        hair: 30,
        address: {
            title: "Obninsk",
            house: 12,
        },
        laptop: {
            title: "HP",
            parts: {
                ram: 16,
                videocard: {
                    title: "Nvidia",
                    version: "15.5",
                },
            },
        },
        books: [
            "css", "html", "js", "react",
        ],
        companies: [
            {
                title: "Apple",
                id: 1,
            },
        ],
    }


    const upgradedUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(upgradedUser);
    expect(user.address.title).toBe(upgradedUser.address.title);
    expect(upgradedUser.laptop.title).toBe('Macbook');
    expect(user.laptop.title).toBe('HP');
    expect(user.laptop).not.toBe(upgradedUser.laptop);
    expect(user.address).toStrictEqual(upgradedUser.address);
})

test("upgrade laptop RAM", () => {
    let user: UserWIthLaptopType & UserWithBooksType = {
        name: "Kirill",
        hair: 30,
        address: {
            title: "Obninsk",
            house: 12,
        },
        laptop: {
            title: "HP",
            parts: {
                ram: 16,
                videocard: {
                    title: "Nvidia",
                    version: "15.5",
                },
            },
        },
        books: [
            "css", "html", "js", "react",
        ],
        companies: [
            {
                title: "Apple",
                id: 1,
            },
        ],
    }


    const upgradedUser = upgradeUserLaptopRam(user, 32)

    expect(user).not.toBe(upgradedUser);
    expect(user.laptop.parts.ram).not.toBe(upgradedUser.laptop.parts.ram);
    expect(user.laptop.parts.ram).toBe(16);
    expect(upgradedUser.laptop.parts.ram).toBe(32);
})

test("upgrade laptop video driver version", () => {
    let user: UserWIthLaptopType & UserWithBooksType = {
        name: "Kirill",
        hair: 30,
        address: {
            title: "Obninsk",
            house: 12,
        },
        laptop: {
            title: "HP",
            parts: {
                ram: 16,
                videocard: {
                    title: "Nvidia",
                    version: "15.5",
                },
            },
        },
        books: [
            "css", "html", "js", "react",
        ],
        companies: [
            {
                title: "Apple",
                id: 1,
            },
        ],
    }


    const upgradedUser = upgradeUserLaptopVideocardVersion(user, "17.2")

    expect(user).not.toBe(upgradedUser);
    expect(user.laptop.parts.videocard.version).not.toBe(upgradedUser.laptop.parts.videocard.version);
    expect(user.laptop.parts.videocard.version).toBe("15.5");
    expect(upgradedUser.laptop.parts.videocard.version).toBe("17.2");
})

test("upgrade house number", () => {
    let user: UserWIthLaptopType & UserWithBooksType = {
        name: "Kirill",
        hair: 30,
        address: {
            title: "Obninsk",
            house: 12,
        },
        laptop: {
            title: "HP",
            parts: {
                ram: 16,
                videocard: {
                    title: "Nvidia",
                    version: "15.5",
                },
            },
        },
        books: [
            "css", "html", "js", "react",
        ],
        companies: [
            {
                title: "Apple",
                id: 1,
            },
        ],
    }


    const upgradedUser = moveUserToOtherHouse(user, 81)

    expect(user).not.toBe(upgradedUser);
    expect(upgradedUser.address.house).toBe(81);
    expect(user.books).toBe(upgradedUser.books);
})

test("add new book", () => {
    let user: UserWIthLaptopType & UserWithBooksType = {
        name: "Kirill",
        hair: 30,
        address: {
            title: "Obninsk",
            house: 12,
        },
        laptop: {
            title: "HP",
            parts: {
                ram: 16,
                videocard: {
                    title: "Nvidia",
                    version: "15.5",
                },
            },
        },
        books: [
            "css", "html", "js", "react",
        ],
        companies: [
            {
                title: "Apple",
                id: 1,
            },
        ],
    }


    const upgradedUser = addedNewBook(user, "ts")

    expect(upgradedUser.books.length).toBe(5);
    expect(upgradedUser.books[4]).toBe("ts");
})

test("add new books", () => {
    let user: UserWIthLaptopType & UserWithBooksType = {
        name: "Kirill",
        hair: 30,
        address: {
            title: "Obninsk",
            house: 12,
        },
        laptop: {
            title: "HP",
            parts: {
                ram: 16,
                videocard: {
                    title: "Nvidia",
                    version: "15.5",
                },
            },
        },
        books: [
            "css", "html", "js", "react",
        ],
        companies: [
            {
                title: "Apple",
                id: 1,
            },
        ],
    }


    const upgradedUser = addedNewBooksToUser(user, ["ts", "redux",])

    expect(upgradedUser.books.length).toBe(6);

})

test("update js book to ts", () => {
    let user: UserWIthLaptopType & UserWithBooksType = {
        name: "Kirill",
        hair: 30,
        address: {
            title: "Obninsk",
            house: 12,
        },
        laptop: {
            title: "HP",
            parts: {
                ram: 16,
                videocard: {
                    title: "Nvidia",
                    version: "15.5",
                },
            },
        },
        books: [
            "css", "html", "js", "react",
        ],
        companies: [
            {
                title: "Apple",
                id: 1,
            },
        ],
    }


    const upgradedUser = updateUserBook(user, "js", "ts")

    expect(upgradedUser.books.length).toBe(4);
    expect(upgradedUser.books[2]).toBe("ts");
})

test("remove book", () => {
    let user: UserWIthLaptopType & UserWithBooksType = {
        name: "Kirill",
        hair: 30,
        address: {
            title: "Obninsk",
            house: 12,
        },
        laptop: {
            title: "HP",
            parts: {
                ram: 16,
                videocard: {
                    title: "Nvidia",
                    version: "15.5",
                },
            },
        },
        books: [
            "css", "html", "js", "react",
        ],
        companies: [
            {
                title: "Apple",
                id: 1,
            },
        ],
    }


    const upgradedUser = removeUserBook(user, "js")

    expect(upgradedUser.books.length).toBe(3);
    expect(upgradedUser.books[2]).toBe("react");
})

test("add company", () => {
    let user: UserWIthLaptopType & UserWithBooksType = {
        name: "Kirill",
        hair: 30,
        address: {
            title: "Obninsk",
            house: 12,
        },
        laptop: {
            title: "HP",
            parts: {
                ram: 16,
                videocard: {
                    title: "Nvidia",
                    version: "15.5",
                },
            },
        },
        books: [
            "css", "html", "js", "react",
        ],
        companies: [
            {
                title: "Apple",
                id: 1,
            },
            {
                title: "Google",
                id: 2,
            },
        ],
    }

    const upgradedUser = addCompany(user, {title: "Yandex", id: 3})

    expect(upgradedUser.companies.length).toBe(3);
    expect(upgradedUser.companies[2].title).toBe("Yandex");
    expect(upgradedUser.companies[2].id).toBe(3);
})

test("update company", () => {
    let user: UserWIthLaptopType & UserWithBooksType = {
        name: "Kirill",
        hair: 30,
        address: {
            title: "Obninsk",
            house: 12,
        },
        laptop: {
            title: "HP",
            parts: {
                ram: 16,
                videocard: {
                    title: "Nvidia",
                    version: "15.5",
                },
            },
        },
        books: [
            "css", "html", "js", "react",
        ],
        companies: [
            {
                title: "Appleswq",
                id: 1,
            },
            {
                title: "Google",
                id: 2,
            },
        ],
    }

    const upgradedUser = updateCompanyTitle(user, 1, "Apple")

    expect(upgradedUser.companies.length).toBe(2);
    expect(upgradedUser.companies[0].title).toBe("Apple");
    expect(upgradedUser.companies[0].id).toBe(1);
})

test("update company 123", () => {
    let user: UserWIthLaptopType & UserWithBooksType = {
        name: "Kirill",
        hair: 30,
        address: {
            title: "Obninsk",
            house: 12,
        },
        laptop: {
            title: "HP",
            parts: {
                ram: 16,
                videocard: {
                    title: "Nvidia",
                    version: "15.5",
                },
            },
        },
        books: [
            "css", "html", "js", "react",
        ],
        companies: [
            {
                title: "Appleswq",
                id: 1,
            },
            {
                title: "Google",
                id: 2,
            },
        ],
    }

    let companies: CompanyType = {
        'Kirill': [
            {
                title: "ABC",
                id: 1,
            },
            {
                title: "CBA",
                id: 2,
            },
        ],
        'Viktor': [
            {
                title: "QWE",
                id: 1,
            },
            {
                title: "RTY",
                id: 2,
            },
        ],
    }

    const upgradedUser = updateCompany(companies, 'Kirill', 2, "Yandex")

    expect(upgradedUser['Kirill']).not.toBe(companies['Kirill']);
    expect(upgradedUser['Viktor']).toBe(companies['Viktor']);
    expect(upgradedUser['Kirill'][1].title).toBe('Yandex');
    expect(upgradedUser['Kirill'][1].id).toBe(2);
})