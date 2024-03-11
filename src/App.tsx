import React from 'react';
import './App.css';
import {User} from "./06-callback-onclick-onchange/06";

function App() {
    const names = [
        "Kirill", "Anastasiya", "Viktor", "Ignat", "Artem", "Sergey"
    ]

    const users = [
        {
            id: 1,
            name: "Kirill",
            age: 10,
        },
        {
            id: 2,
            name: "Anastasiya",
            age: 11,
        },
        {
            id: 3,
            name: "Viktor",
            age: 12,
        },
        {
            id: 4,
            name: "Ignat",
            age: 13,
        },
        {
            id: 5,
            name: "Artem",
            age: 14,
        },
        {
            id: 6,
            name: "Sergey",
            age: 15,
        },

    ]

    const liElements = names.map(name => <li>{name}</li>)
    const elements = users.map(user => (
        <li key={user.id}>
            <div><b>Name: </b> {user.name}</div>
            <div><b>Age: </b> {user.age}</div>
        </li>)
    )

    return (
        <div className="App">
            <ul>
                {liElements}
                ___________
                {elements}
            </ul>
            <User/>
        </div>
    );
}

export default App;
