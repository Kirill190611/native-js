import {findUserInDB} from "./index";

findUserInDB(1)
    .then(user => {
        console.log(user);
    })

function getNumber() {
    /*const promise = Promise.resolve(Math.random())*/

    const promise = new Promise((resolve, reject) => {
        reject("some error")

        setTimeout(() => {
            resolve(Math.random())
        }, 2000)
    })

    return promise;
}

getNumber()
    .then(n => console.log(n))
getNumber()
    .then(n => console.log(n))


const repo = {
    save(data) {
        try {
            localStorage.setItem("Some key", JSON.stringify(data));
        } catch (error) {
            return false
        }
        return true;
    },
    read() {
        const data = localStorage.getItem("some-key")
        if (!data) {
            return null
        } else {
            return JSON.parse(data)
        }
    },
    saveAsync(data) {
        const promise = new Promise((resolve, reject) => {
            try {
                localStorage.setItem("Some key", JSON.stringify(data))
                resolve()
            } catch (error) {
                reject(error)
            }
        })
        return promise;
    },
    readAsync() {
        return new Promise((resolve, reject) => {
            const data = localStorage.getItem("some-key")
            if (!data) {
                resolve({})
            } else {
                resolve(JSON.parse(data))
            }
        })
    }
}

const result = repo.save({name: "Kyky"})
console.log("SAVED")
const data = repo.read()
console.log(data)


const run = async () => {
    await repo.saveAsync({name: "Kyky"})
    console.log("SAVED")

    const data = await repo.readAsync()
    console.log(data)
}
run();


