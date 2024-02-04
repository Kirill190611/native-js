import {CityType} from "./02_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    },
                },
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    },
                },
            },
            {
                buildedAt: 2020,
                repaired: true,
                address: {
                    number: 105,
                    street: {
                        title: "Black street"
                    },
                },
            },
        ],
        governmentBuildings: [
            {
                type: "Hospital",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Street",
                    },
                },
            },
            {
                type: "Fire Station",
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

test("test city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White street");

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe("Happy street");

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(true);
    expect(city.houses[2].address.number).toBe(105);
    expect(city.houses[2].address.street.title).toBe("Black street");
})
test("test city should contains hospital and fire station", () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe("Hospital");
    expect(city.governmentBuildings[0].budget).toBe(200000);
    expect(city.governmentBuildings[0].staffCount).toBe(200);
    expect(city.governmentBuildings[0].address.street.title).toBe("Central Street");

    expect(city.governmentBuildings[1].type).toBe("Fire Station");
    expect(city.governmentBuildings[1].budget).toBe(500000);
    expect(city.governmentBuildings[1].staffCount).toBe(1000);
    expect(city.governmentBuildings[1].address.street.title).toBe("South Street");
})