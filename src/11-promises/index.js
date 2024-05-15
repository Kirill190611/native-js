const axios = {

}
const findUserInDB = (id) => {

}


const promise1 = axios.get('https://google.com')
promise1.then( (data) => {
    console.log(data);
} ) //then resolve will be completed callback; then = addEventListener; подписываемся с помощью then
console.log(promise1)


const promise2 = findUserInDB(1);


console.log('finish');

//Todo: need start from 13:18