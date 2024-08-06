//Result: + + + + + + - + +

/*//1Q:
let pr = new Promise((res, rej) => res("Oleg"));
pr
    .then(value => value)
    .then(value => console.log(value))

//Result: "Oleg" +*/

/*//2Q:
let pr1 = new Promise((res, rej) => res("Oleg"));
console.log(pr1.then(value => value) === pr1.then(value => value));

//Result: false, потому что промис - это объект, для каждого нового объекта создается новая ячейка памяти и эти 2 объекта
//не будут равны. В общем .then() возвращает новый промис, в данном случае 2 метода .then(), которые возвращают разные промисы +*/

/*//3Q:
console.log(1);
let pr2 = new Promise((res, rej) => {
    res("Oleg")
    console.log(2)
});
pr2.then(value => console.log(3))
pr2.then(value => console.log(4))

//Result: 1 2 3 4 +*/

/*//4Q:
console.log(1);
let pr3 = new Promise((res, rej) => {
    res("Oleg")
    console.log(2)
});
pr3.then(value => console.log(3))
pr3.then(value => console.log(4))
console.log(5)

//Result: 1 2 5 3 4, тк 1й консоль лог выполнится 1м, далее идет тело промиса, что не является асинхронной операцией и является синхронной операцией (соответственно будет 2м),
//далее подписка на промис при помощи методов then является асинхронной операцией и они попадут в микротаски (выполнятся в последнюю очередь под номер 4 и 5), далее идет консоль лог который выполнится 3м +*/

/*//5Q:
Promise.all([Promise.resolve(3), Promise.resolve(5)])
    .then((resArray) => console.log(resArray))

//Result: [3, 5], тк статичный метод .all принимает массив промисов, дожидается когда все промисы получат состояние resolved и после этого вернет массив значений, которым он зарезолвился. Если 1й промис зарезолвится позже 2го, то местами они не поменяются. +*/

/*//6Q:
let pr4 = new Promise((res, rej) => {
    rej("Oleg")
})
pr4.then(() => console.log(1))
pr4.catch(() => console.log(2))
pr4.catch(() => console.log(3))
pr4.then(() => console.log(4))

//Result 2, 4, тк промис зареджектился, далее он попадет в 1й кэтч и выведет 2 в консоли, далее он попадет в следующий метод then и выведет в консоль 4. +*/

/*//7Q:
async function yo() {
    return 5;
}

let a = yo()

console.log(a);

//Result: 5. Выведет промис, который зарезолвлен 5, тк любая асинхронная функция возвращаемый объект оборачивает в ПРОМИС. -*/

/*//8Q:
async function yo() {
    return 'yo';
}

(async function () {
    let result = await yo();
    console.log(result)
})();

//Result: "yo", тк первая асинхронная ф-ция вернет объект промиса, который зарезолвлен 'yo', далее в ф-ции есть await, который дожидается резолв промиса, который соответственно зарезолвится значением 'yo'.  +*/

//9Q:
import {axios} from "./index";

axios.get('https://nl.com/user/12')
    .then(user => axios.get('https://belbank.by/') + user.accountNumber)
    .then(accountNumber => console.log(accountNumber.money))

//Result: можно ли так писать? Ответ: да.

//Todo: start from 00:38:40
