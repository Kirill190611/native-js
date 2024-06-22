export const axios = {}
export const findUserInDB = (id) => {

}

// Promise может находится в 1-м из 3-х состояниях: pending (Ожидание), resolved (решен), rejected (не выполнен). Если pending, то он может стать rejected или resolved. Если он resolved, то он всегда имеет такое состояние. Если он rejected, то он всегда имеет такое состояние
// then = выполни функцию, когда ты будешь иметь состояние resolved; then = addEventListener; подписываемся с помощью then
// когда resolve, то выполни коллбэк-функцию
// catch = подписываемся на ошибку (если promises будут иметь состояние rejected) / отлавливаем ошибку
// finally = когда нужно что-то сделать независимо от reject or resolved
//in real life:
/*axios.get('https://google.com').then( (data) => {
    console.log(data);
} )
findUserInDB(1).then((user) => {
    console.log(user)
})*/

//Pending
const promise1 = axios.get('https://google.com')
promise1
    .then((data) => {
        console.log(data);
    })

//Pending
const promise2 = findUserInDB(2);

promise2
    .then((user) => {
        console.log(user)
    })
    .catch((error) => {
        console.warn(error)
    })
    .finally(() => {
        console.log('finish')
    })

const anotherPromise = Promise.all([promise1, promise2])
const otherPromise = Promise.allSettled([promise1, promise2])

anotherPromise
    .then((result) => {
        const dataFromGoogle = result[0]
        const userFromDB = result[1]
        console.log(dataFromGoogle.data.vacancies + "; " + userFromDB.name)
    })
    .catch(() => {
        console.log('init failed.')
    })

otherPromise
    .then((result) => {
        const dataFromGoogle =
            result[0].status === "fulfilled"
                ? result[0].value
                : {data: {vacancies: null}}
        const userFromDB =
            result[1].status === "fulfilled"
                ? result[1].value
                : {name: result[1].reason}
                console.log(dataFromGoogle.data.vacancies + "; " + userFromDB.name)
    })

//Todo: need start from 1:00:40
//Повторение пройденного материала + записи