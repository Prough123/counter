import React from 'react'
import ModuleCounter from './ControlCounter.module.css'
import {counterPropsType} from "../../../redux/counter-reducer";

type ControlCountTypeProps = {
    onPlusCount: () => void
    onMinusCount: () => void
    counter: counterPropsType
}



const ControlCounter = (props:ControlCountTypeProps) => {

    const onPlusCount =() => {
        props.onPlusCount()
    }

    const onMunisCount = () => {
        props.onMinusCount()
    }

    return (
        <div className={ModuleCounter.Counter}>
            <button onClick={onPlusCount}>+
            </button>
            <button onClick={onMunisCount}>-</button>
            <button >reset
            </button>
        </div>
    )
}

export default ControlCounter;