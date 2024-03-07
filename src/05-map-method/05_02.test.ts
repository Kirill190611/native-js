import {CityProps} from "../02-objects/02_02";
import {createMessages, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from "./05_02";

let city: CityProps

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street",
                    },
                },
            },
            {
                buildAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street",
                    },
                },
            },
            {
                buildAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street",
                    },
                },
            },
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Street",
                    },
                },
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "South Street",
                    },
                },
            },
        ],
        citizensNumber: 100000,
    }
})

test("list of streets title of governments buildings", () => {
    let streets = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streets.length).toBe(2);
    expect(streets[0]).toBe("Central Street");
    expect(streets[1]).toBe("South Street");
})

test("list of streets titles", () => {
    let streets = getStreetsTitlesOfHouses(city.houses);

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("White street");
    expect(streets[1]).toBe("Happy street");
    expect(streets[2]).toBe("Happy street");
})

test("Create greeting messages for streets", () => {
    let messages = createMessages(city.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello guys from White street");
    expect(messages[1]).toBe("Hello guys from Happy street");
    expect(messages[2]).toBe("Hello guys from Happy street");
})