export type UserType = {
    name: string
    hair: number
    address: {title: string, house: number}
    laptop: LaptopType
}

export type VideoCardType = {
    title: string
    version: string
}

export type LaptopRamType = {
    ram: number
    videocard: VideoCardType
}

export type LaptopType = {
    title: string
    parts: LaptopRamType
}

export type UserWIthLaptopType = UserType & {
    laptop: LaptopType
}

export const makeHairstyle = (u: UserType, qty: number) => {
    const copy = {
        ...u,
        hair: u.hair / qty
    }
    return copy
}

export const moveUser = (u: UserType, newAddress: string) => {
    return {
        ...u,
        address: {...u.address, title: newAddress},
    }
}

export const upgradeUserLaptop = (u: UserType, newLaptop: string) => {
    return {
        ...u,
        laptop: {...u.laptop, title: newLaptop}
    }
}

export const upgradeUserLaptopRam = (u: UserType, ram: number) => {
    return {
        ...u,
        laptop: {
            ...u.laptop, parts: {
                ...u.laptop.parts, ram: ram
            }
        }
    }
}

export const upgradeUserLaptopVideocardVersion = (u: UserType, version: string) => {
    return {
        ...u,
        laptop: {
            ...u.laptop, parts: {
                ...u.laptop.parts, videocard: {
                    ...u.laptop.parts.videocard, version
                }
            }
        }
    }
}