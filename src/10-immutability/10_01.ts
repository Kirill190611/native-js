export type ManProps = {
    name: string
    age: number
}

export type MotherProps = {
    name: string
    age: number
}

export type ManProps1 = {
    name: string
    age: number
    mother: MotherProps
}

export type ManProps2 = {
    name: string
    age: number
    friends: Array<string>
}

export type ManProps3 = {
    name: string
    age: number
    friends: Array<ManProps>
}

export type WorkProps = {
    position: string
    experience: number
}

export type MotherProps1 = {
    name: string
    age: number
    work: WorkProps
}

export type MotherProps2 = {
    name: string
    age: number
    work: WorkProps
    parents: ParentsProps[]
}

export type ParentsProps = {
    name: string
    age: number
}

export type ManProps4 = {
    name: string
    age: number
    mother: MotherProps1
}

export type ManProps5 = {
    name: string
    age: number
    mother: MotherProps2
}

export type FavoriteDish = {
    title: string
}

export type ParentsProps2 = {
    name: string
    age: number
    favoriteDish: FavoriteDish
}

export type MotherProps3 = {
    name: string
    age: number
    work: WorkProps
    parents: Array<ParentsProps2>
}

export type ManProps6 = {
    name: string
    age: number
    mother: MotherProps3
}

export type IngredientsProps = {
    title: string
    amount: number
}

export type FavoriteDishProps = {
    title: string
    ingredients: Array<IngredientsProps>
}

export type ParentsProps3 = {
    name: string
    age: number
    favoriteDish: FavoriteDishProps
}

export type MotherProps4 = {
    name: string
    age: number
    work: WorkProps
    parents: Array<ParentsProps3>
}

export type ManProps7 = {
    name: string
    age: number
    mother: MotherProps4
}

export const makeManCopy = (man: ManProps) => {
    return {
        ...man
    }
}

export const makeNumbersCopy = (numbers: Array<number>) => {
    return [...numbers]
}

export const makeManCopy1 = (man: ManProps1) => {
    return {
        ...man,
        mother: {...man.mother}
    }
}

export const makeManCopy2 = (man: ManProps2, name: string) => {
    return {
        ...man,
        friends: [...man.friends, name]
    }
}

export const makeManCopy3 = (people: Array<ManProps>) => {
    return people.map(p => ({...p}))
}

export const makeManCopy4 = (man: ManProps3) => {
    return {
        ...man, friends: man.friends.map(f => ({...f}))
    }
}

export const makeManCopy5 = (man: ManProps4) => {
    return {
        ...man, mother: {
            ...man.mother, work: {
                ...man.mother.work
            }
        }
    }
}

export const makeManCopy6 = (man: ManProps5) => {
    return {
        ...man, mother: {
            ...man.mother, work: {
                ...man.mother.work
            },
            parents: man.mother.parents.map(p => ({...p}))
        }
    }
}

export const makeManCopy7 = (man: ManProps6) => {
    return {
        ...man, mother: {
            ...man.mother,
            work: {...man.mother.work},
            parents: man.mother.parents.map(p => ({...p,
                favoriteDish: {...p.favoriteDish}}))
        }
    }
}

export const makeManCopy8 = (man: ManProps7) => {
    return {
        ...man, mother: {
            ...man.mother,
            work: {...man.mother.work},
            parents: man.mother.parents.map(p => ({...p,
                favoriteDish: {
                ...p.favoriteDish,
                    ingredients: p.favoriteDish.ingredients.map(fd => ({...fd}))}}))
        }
    }
}