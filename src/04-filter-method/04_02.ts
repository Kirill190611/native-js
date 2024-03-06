import {CityProps, GovernmentBuildingsProps} from "../02-objects/02_02";

export function demolishHouses (city: CityProps, street: string) {
    city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export function getBuildings (buildings: GovernmentBuildingsProps[], staffCount: number) {
    return buildings.filter(building => building.staffCount > staffCount);
}