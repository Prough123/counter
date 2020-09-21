import React from 'react'


type OutputType = {
    currentValue: number
    incValue: () => void
    decValue: () => void
    maxValue: number
    minValue: number
    disableBtn: {
        disabledSetValue: boolean
        disabledIncValue: boolean
        disabledDecValue: boolean
    }
    reset: () => void
}

export const Output = (props: OutputType) => {

    return (
        <div>
            <span>{props.currentValue}</span>
            <button disabled={props.disableBtn.disabledIncValue} onClick={props.incValue}>+</button>
            <button disabled={props.disableBtn.disabledDecValue} onClick={props.decValue}>-</button>
            <button disabled={props.disableBtn.disabledSetValue} onClick={props.reset}>reset</button>
        </div>
    )

}