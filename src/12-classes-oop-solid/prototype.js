function User(name, site, dob) {
    this.name = name;
    this.site = site;
    this.dateOfBirth = dob;
}

User.prototype.hello = function () {
    console.log(`I am ${this.name} from ${this.site}`)
}

const u1 = new User("DDD", '123.ru', new Date(1994, 6, 19))
const u2 = new User("AAA", '456.com', new Date(2004, 6, 19))

u1.hello();
u2.hello();