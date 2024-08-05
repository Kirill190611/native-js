import {findUserInDB} from "./index";

findUserInDB(1)
    .then(user => {
        console.log(user.name)
        return user.friend
    })
    .then(friendId => findUserInDB(friendId))
    .then(friend1 => {
        console.log(friend1.name)
        return friend1.friend
    })
    .then(friend1Id => findUserInDB(friend1Id))
    .then(friend2 => console.log(friend2.name))
    .catch(error => alert(error))

//Todo: need to check additional video about promises