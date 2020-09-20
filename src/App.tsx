import React from 'react';
import './App.css';
import {Setup} from "./componets/Setup/Setup";
import {Output} from "./componets/Output/Output";
import {useDispatch, useSelector} from "react-redux";
import {decValueAC, incValueAC, initialStateType, setValueAC} from "./state/counter-reducer";
import {AppRootStateType} from "./state/redux-store";


type CurrentValueType = {
    currentValue: number
}

function App() {

    const state = useSelector<AppRootStateType, initialStateType>(state => state.counter)
    const currentValue = state.currentValue
    const maxValue = state.maxValue
    const dispatch = useDispatch()

    const setValue = (minValue: number, maxValue:number) => {
        const action = setValueAC(minValue, maxValue)
        dispatch(action)
    }

    const increaseValue = () => {
        const action = incValueAC()
        dispatch(action)
    }

    const decreaseValue = () => {
        const action = decValueAC()
        dispatch(action)
    }

    return (
        <div className="App">
            <div className="wrapper">
                <Setup setValue={setValue}/>
                <Output maxValue={maxValue} currentValue={currentValue} incValue={increaseValue} decValue={decreaseValue}/>
            </div>
        </div>
    );
}

export default App;
