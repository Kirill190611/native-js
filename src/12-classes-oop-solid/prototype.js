function DeleteUserAction(userId) {
    //this = {}
    this.type = 'DELETE-USER';
    this.payload = {
        userId: userId
    }
}

const action1 = new DeleteUserAction(12345);
const action2 = new DeleteUserAction(1234523);

//start from 16:20