type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType

beforeEach(() => {
    users = {
        "101": {
            id: 101,
            name: "Kirill",
        },
        "10323": {
            id: 10323,
            name: "Nastya",
        },
        "1032": {
            id: 1032,
            name: "Valera",
        },
        "10": {
            id: 10,
            name: "Liza",
        },
    }
})

test("should select corresponding user from obj", () => {
    users["10"].name = "Elizaveta"

    expect(users["10"]["name"]).toBe("Elizaveta")
    expect(users["10"]).toEqual({id: 10, name: "Elizaveta",})
})

test("should delete corresponding user from obj", () => {
    delete users["10"];

    expect(users["10"]).toBe(undefined)
})