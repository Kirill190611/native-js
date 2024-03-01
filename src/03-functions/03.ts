import {CityProps, GovernmentBuildingsProps, HousesProps} from "../02-objects/02_02";

type TechnologiesProps = {
    id: number
    title: string
}

type LocalCityProps = {
    title: string
    country: string
}

type AddressProps = {
    streetTitle: string
    city: LocalCityProps
}

export type StudentProps = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressProps
    technologies: TechnologiesProps[]
}

const student: StudentProps = {
    id: 1,
    name: "Kirill",
    age: 29,
    isActive: true,
    address: {
        streetTitle: "Gagarina",
        city: {
            title: "Obninsk",
            country: "Russia",
        },
    },
    technologies: [
        {
            id: 1,
            title: "CSS",
        },
        {
            id: 2,
            title: "HTML",
        },
        {
            id: 3,
            title: "React",
        },
    ],
}

export const addSkill = (student: StudentProps, skill: string) => {
    student.technologies.push({id: 123, title: skill});
}

export const makeStudentActive = (student: StudentProps, isActive: boolean) => {
    student.isActive = isActive;
}

export const doesStudentLiveIn = (student: StudentProps, city: string) => {
    return student.address.city.title === city;
}

export const addMoneyToBudget = (building: GovernmentBuildingsProps, additionalBudget: number) => {
    building.budget += additionalBudget;
}

export const repairHouse = (house: HousesProps) => {
    house.repaired = true;
}

export const toFireStaff = (governmentBuilding: GovernmentBuildingsProps, fireQty: number) => {
    governmentBuilding.staffCount -= fireQty;
}

export const toHireStaff = (governmentBuilding: GovernmentBuildingsProps, hireQty: number) => {
    governmentBuilding.staffCount += hireQty;
}

export const createMessage = (city: CityProps) => {
    return `Hello ${city.title} people. I want you to be happy. All ${city.citizensNumber}!`
}