const resolvedPromise = Promise.resolve([{}]);

resolvedPromise
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.warn(error)
    })

const rejectedPromise = Promise.reject({message: 'Some error'})

rejectedPromise
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.warn(error)
    })

const usersAPI = {
    getAllUsers() {
        return Promise.resolve([{name: "D"}, {name: "N"}])
    },
    login(login, password) {
        if (login !== '123' && password !== '123') {
            return Promise.reject({message: 'Incorrect login and password'})
        } else {
            return Promise.resolve({name: 'Dima', id: 12, avatarUrl: 'bla'})
        }
    }
}

const pr = usersAPI.getAllUsers()

pr.then((users) => {
    console.log(users)
})

usersAPI.login('123', '1232')
    .then((data) => {
        //makeRedirect
    })
    .catch((error) => {
        //showError
    })