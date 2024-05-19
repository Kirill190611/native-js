//Promise chaining
import {axios, findUserInDB} from "./index";

findUserInDB(1)
    .then(user => user.name)
    .then(name => console.log(name))

axios.get("https://google.com")
    .then(response => response.data)
    .then(data => console.log(data))

const getVacanciesFromGoogle = () => {
    /*const pr = axios.get("https://google.com")
    const pr2 = pr.then(response => response.data)
    return pr2;*/

    return axios.get("https://google.com")
        .then(response => response.data)
        .then(data => data.vacancies)
}

getVacanciesFromGoogle().then(vacancies => console.log(vacancies))