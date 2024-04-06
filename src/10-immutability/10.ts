export type UserType = {
    name: string
    hair: number
    address: { title: string, house: number }
    laptop: LaptopType
    books: Array<string>
    companies: Array<CompaniesType>
}

export type CompanyType = {
    [key: string]: Array<CompaniesType>
}

export type CompaniesType = {
    title: string
    id: number
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

export type UserWithBooksType = UserType & {
    books: Array<string>
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

export const moveUserToOtherHouse = (u: UserType, house: number) => {
    return {
        ...u,
        address: {
            ...u.address, house
        }
    }
}

export const addedNewBook = (u: UserType, book: string) => {
    return {
        ...u,
        books: [
            ...u.books, book
        ]
    }
}

export const addedNewBooksToUser = (u: UserType, books: Array<string>) => {
    return {
        ...u,
        books: [
            ...u.books.concat(books)
        ]
    }
}

export const updateUserBook = (u: UserType, oldBook: string, updateBook: string) => {
    return {
        ...u,
        books: u.books.map(book => book === oldBook ? updateBook : book)
    }
}

export const removeUserBook = (u: UserType, removeBook: string) => {
    return {
        ...u,
        books: u.books.filter(book => book !== removeBook)
    }
}

export const addCompany = (u: UserType, company: CompaniesType) => {
    const newCompany = {
        title: company.title,
        id: company.id,
    }

    return {
        ...u,
        companies: [...u.companies, newCompany]
    }
}

export const updateCompanyTitle = (u: UserType, companyId: number, updatedTitle: string) => {
    return {
        ...u,
        companies: u.companies.map(company => company.id === companyId ? {...company, title: updatedTitle} : company)
    }
}

export const updateCompany = (companies: CompaniesType,
                              userName: string,
                              companyId: number,
                              newTitle: string) => {
    // @ts-ignore
    return {
        ...companies,
        [userName]: companies[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)
    }

}