import {CityProps} from "../02-objects/02_02";
import {demolishHouses, getBuildings} from "./04_02";

let city: CityProps

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1,
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
                id: 2,
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
                id: 3,
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

test("Houses should be destroyed", () => {
    demolishHouses(city, "Happy street");

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})

test("buildings with correct staff count", () => {
    let buildings = getBuildings(city.governmentBuildings, 500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("FIRE-STATION");
})