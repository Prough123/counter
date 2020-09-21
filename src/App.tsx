import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Setup} from "./componets/Setup/Setup";
import {Output} from "./componets/Output/Output";
import {useDispatch, useSelector} from "react-redux";
import {
    decValueAC,
    disableType,
    incValueAC,
    initialStateType,
    setDisableAC,
    setValueAC,
} from "./state/counter-reducer";
import {AppRootStateType} from "./state/redux-store";


function App() {
    // Пока вводим сообщение должны быть задизейблены кнопки INC и Reset и сообщение нажать кнопку Set
    // Если Старт и Макс равны или Макс меньше Старт все кнопки задизейблены и сообщение об ошибке,
    //подсветка инпутов во время ошибки
    // После нажатия Set она дизейблится до начала ввода нового значение

    const state = useSelector<AppRootStateType, initialStateType>(state => state.counter)
    const disableBtn = useSelector<AppRootStateType, disableType>(state => state.counter.disable)
    const currentValue = state.currentValue
    const dispatch = useDispatch()


    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)


    const onChangeSetValue = () => {
        setValue(minValue, maxValue)
    }

    const onSetMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(+e.currentTarget.value)
        if(minValue === maxValue || maxValue <= minValue){
            dispatch(setDisableAC(true,true,true))
        }else {
            dispatch(setDisableAC(false,false,false))
        }
    }

    const onSetMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
        if(minValue ===  maxValue || maxValue <= minValue){
            dispatch(setDisableAC(true,true,true))
        }else {
            dispatch(setDisableAC(false,false,false))
        }
    }

    const setValue = (minValue: number, maxValue: number) => {
        dispatch(setValueAC(minValue, maxValue))
        setMaxValue(0)
        setMinValue(0)
    }

    const increaseValue = () => {
        if(currentValue < state.maxValue){
            dispatch(incValueAC())
        }
        if((state.maxValue - 1) === currentValue){
            dispatch(setDisableAC(false,true,false))
        }
    }

    const decreaseValue = () => {
        if(currentValue > state.minValue){
            dispatch(decValueAC())
        }
        if((state.maxValue - 1) === currentValue){
            dispatch(setDisableAC(false,false,true))
        }
    }

    const resetValue = () => {
        dispatch(setValueAC(0, 0))
    }

    return (
        <div className="App">
            <div className="wrapper">
                <Setup onChangeSetValue={onChangeSetValue} onSetMaxValue={onSetMaxValue} onSetMinValue={onSetMinValue}
                       maxValue={maxValue} minValue={minValue} setValue={setValue}/>
                <Output reset={resetValue} disableBtn={disableBtn} minValue={minValue} maxValue={maxValue}
                        currentValue={currentValue} incValue={increaseValue}
                        decValue={decreaseValue}/>
            </div>
        </div>
    );
}

export default App;
