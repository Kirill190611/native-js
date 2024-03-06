export type AddressGovernmentBuildingsProps = {
    street: StreetProps
}

export type GovernmentBuildingsProps = {
    type: string
    budget: number
    staffCount: number
    address: AddressGovernmentBuildingsProps
}

export type StreetProps = {
    title: string
}

export type AddressProps = {
    number: number
    street: StreetProps
}

export type HousesProps = {
    id?: number
    buildAt: number
    repaired: boolean
    address: AddressProps
}

export type CityProps = {
    title: string
    houses: HousesProps[]
    governmentBuildings: GovernmentBuildingsProps[]
    citizensNumber: number
}