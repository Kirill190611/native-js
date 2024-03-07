import {GovernmentBuildingsProps, HousesProps} from "../02-objects/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: GovernmentBuildingsProps[]) => {
    return buildings.map(building => building.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: HousesProps[]) => {
    return houses.map(house => house.address.street.title)
}

export const createMessages = (houses: HousesProps[]) => {
    return houses.map(house => `Hello guys from ${house.address.street.title}`)
}