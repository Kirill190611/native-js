import React, {useState} from 'react';
import './App.css';


function App() {

    const [value, setValue] = useState<number>(0);

    const incHandler = () => {
        setValue(value + 1)
    }

    const setToLocalStorageHandler = () => {
        //code
        localStorage.setItem("counter value", JSON.stringify(value))
        localStorage.setItem("counter value + 1", JSON.stringify(value + 1))
    }

    const getFromLocalStorageHandler = () => {
        //code
        let valueAsString = localStorage.getItem("counter value");
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString);
            setValue(newValue);
        }
    }

    const clearLocalStorageHandler = () => {
        localStorage.clear();
        setValue(0);
    }

    const removeItemFormLocalStorageHandler = () => {
        localStorage.removeItem("counter value + 1")
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
            <button onClick={removeItemFormLocalStorageHandler}>removeItemFormLocalStorage</button>
        </div>
    );
}

export default App;
