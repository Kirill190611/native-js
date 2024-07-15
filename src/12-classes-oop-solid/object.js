function commonHello() {
    console.log(`I am ${this.name} from ${this.site}`)
}

const userFabric = (name) => {
    const user = {
        name: name,
        site: 'it-incubator.by',
        dateOfBirth: new Date(1994, 6, 19),
        hello: commonHello,
    }

    return user
}

const u1 = userFabric('DDD')
const u2 = userFabric('KKK')

u1.hello();
u2.hello();