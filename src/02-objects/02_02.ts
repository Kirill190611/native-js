type AddressGovernmentBuildingsProps = {
    street: StreetProps
}

type GovernmentBuildingsProps = {
    type: string
    budget: number
    staffCount: number
    address: AddressGovernmentBuildingsProps
}

type StreetProps = {
    title: string
}

type AddressProps = {
    number: number
    street: StreetProps
}

type HousesProps = {
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