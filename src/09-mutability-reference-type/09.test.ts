type AddressUserProps = {
    title: string
}

export type UserProps = {
    name: string
    age: number
    address: AddressUserProps
}

const increaseAge = (u: UserProps) => {
    u.age++;
}

test("Reference type test", () => {

    let user: UserProps = {
        name: "Kirill",
        age: 29,
        address: {
            title: "Moscow",
        }
    }

    increaseAge(user);

    const sman = user;

    sman.age = 1000;

    expect(user.age).toBe(1000);
})

test("array reference test", () => {
    let users = [
        {name: "Kirill", age: 29},
        {name: "Alex", age: 30},
    ]

    let admins = users;

    admins.push({name: "Bob", age: 35})

    expect(users.length).toBe(3);
    expect(users[2].name).toBe("Bob");
    expect(users[2].age).toBe(35);
    expect(users[2]).toEqual({name: "Bob", age: 35});
})

test ("value type test", () => {
    let usersCount = 100;

    let adminsCount = usersCount;

    adminsCount = 150;

    expect(adminsCount).toBe(150);
    expect(usersCount).toBe(100);
})

test("Ref1 type test", () => {
    let address = {
        title: "Moscow"
    }

    let user: UserProps = {
        name: "Kirill",
        age: 29,
        address: address
    }

    // let addr = user.address;

    let user2: UserProps = {
        name: "Nata",
        age: 11,
        address: address
    }

    user2.address.title = "123";

    expect(user2.address.title).toBe("123");
    expect(user.address.title).toBe("123");
})

test("Reference array type tests", () => {
    const address = {
        title: "Kaluga",
    }

    let user1 = {
        name: "Danil",
        age: 10,
        address: address,
    }

    let user2 = {
        name: "Dima",
        age: 15,
        address: address,
    }

    const users = [
        user1,
        user2,
        {name: "Bogdan", age: 5, address: address},
    ]

    // users[2].address.title = "BigCity";

    address.title = "Lipetsk";

    expect(users.length).toBe(3);
    expect(users[2].name).toBe("Bogdan");
    expect(users[0].address.title).toBe("Lipetsk");
    expect(users[1].address.title).toBe("Lipetsk");
    expect(users[2].address.title).toBe("Lipetsk");
    expect(address.title).toBe("Lipetsk");
})