import React, {useEffect} from 'react';
import './App.css';
import {
    useDispatch,
    useSelector
} from "react-redux";
import {AppStateType} from "./bll/store";
import {
    IncValueAC,
    SetValuesFromLocalstorageAC
} from "./bll/counter-reducer";

function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(SetValuesFromLocalstorageAC(value))
    }, [])

    const incHandler = () => {
        dispatch(IncValueAC())
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
        </div>
    );
}

export default App;
