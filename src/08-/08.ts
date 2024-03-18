//users[10] - чтение

/*let user = {
    id: 100500,
    name: "Danil",
}

users[user.id] = user;
Запись*/

/*delete users[user.id] - удаление*/

//users[user.id].name = "Lolo" - обновить


export const usersArr = [
    {
        id: 101,
        name: "Kirill",
    },
    {
        id: 10323,
        name: "Nastya",
    },
    {
        id: 1032,
        name: "Valera",
    },
    {
        id: 10,
        name: "Liza",
    },
]

//usersArr.find(e => e.id === 10); - чтение
//usersArr.push(user); - добавляем
//let usersCopy = [...usersArr.filter(), user]; - добавляем
//let usersArr =  usersArr.filter(u => u.id !== user.id) - удалить