import React from 'react'


type OutputType = {
    currentValue: number
    incValue:() => void
    decValue:() => void
    maxValue: number
}

export const Output = (props:OutputType) => {

    const onIncValue = () => {
        props.incValue()
    }

    const onDecValue = () => {
        props.decValue()
    }

    return (
        <div>
            <span>{props.currentValue}</span>
            <button disabled={!(props.currentValue < props.maxValue)} onClick={onIncValue}>+</button>
            <button onClick={onDecValue}>-</button>
        </div>
    )

}