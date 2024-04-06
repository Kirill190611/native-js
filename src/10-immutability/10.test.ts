import {
    makeHairstyle,
    moveUser,
    upgradeUserLaptop,
    upgradeUserLaptopRam,
    upgradeUserLaptopVideocardVersion,
    UserType,
    UserWIthLaptopType
} from "./10";

test("reference type test", () => {
    let user: UserType = {
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
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(30);
    expect(awesomeUser.hair).toBe(15);
})

test("change address", () => {
    let user: UserWIthLaptopType = {
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
    }

    const movedUser = moveUser(user, 'Moscow')

    expect(user).not.toBe(movedUser);
    expect(user.address.title).toBe("Obninsk");
    expect(movedUser.address.title).toBe('Moscow');
    expect(user.address).not.toBe(movedUser.address);
    expect(user.laptop).toStrictEqual(movedUser.laptop);

})

test("upgrade laptop to macbook", () => {
    let user: UserWIthLaptopType = {
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
    let user: UserWIthLaptopType = {
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
    }

    const upgradedUser = upgradeUserLaptopRam(user, 32)

    expect(user).not.toBe(upgradedUser);
    expect(user.laptop.parts.ram).not.toBe(upgradedUser.laptop.parts.ram);
    expect(user.laptop.parts.ram).toBe(16);
    expect(upgradedUser.laptop.parts.ram).toBe(32);
})

test("upgrade laptop video driver version", () => {
    let user: UserWIthLaptopType = {
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
    }

    const upgradedUser = upgradeUserLaptopVideocardVersion(user, "17.2")

    expect(user).not.toBe(upgradedUser);
    expect(user.laptop.parts.videocard.version).not.toBe(upgradedUser.laptop.parts.videocard.version);
    expect(user.laptop.parts.videocard.version).toBe("15.5");
    expect(upgradedUser.laptop.parts.videocard.version).toBe("17.2");
})