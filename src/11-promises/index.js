const axios = {}
const findUserInDB = (id) => {

}

// Promise может находится в 1-м из 3-х состояниях: pending (Ожидание), resolved (решен), rejected (не выполнен). Если pending, то он может стать rejected или resolved. Если он resolved, то он всегда имеет такое состояние. Если он rejected, то он всегда имеет такое состояние
// then = выполни функцию, когда ты будешь иметь состояние resolved; then = addEventListener; подписываемся с помощью then
// когда resolve, то выполни коллбэк-функцию
// catch = подписываемся на ошибку (если promises будут иметь состояние rejected) / отлавливаем ошибку
// finally = когда нужно что-то сделать независимо от reject or resolved

//Pending
const promise1 = axios.get('https://google.com')
promise1.then((data) => {
    console.log(data);
})

console.log(promise1)

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

//in real life:
/*axios.get('https://google.com').then( (data) => {
    console.log(data);
} )
findUserInDB(1).then((user) => {
    console.log(user)
})*/

console.log('finish');

//Todo: need start from 34:07