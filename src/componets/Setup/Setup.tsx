import React, {ChangeEvent, useState} from 'react'


type SetValueType = {
    setValue: (minValue: number, maxValue: number) => void
    onSetMinValue: (e:ChangeEvent<HTMLInputElement>) => void
    onSetMaxValue: (e:ChangeEvent<HTMLInputElement>) => void
    onChangeSetValue: () => void

    minValue: number
    maxValue: number
}

export const Setup = (props: SetValueType) => {

    return (
        <div>
            <div>
                <span>Min</span>
                <input type="number" value={props.minValue} onChange={props.onSetMinValue}/>
            </div>
            <div>
                <span>Max</span>
                <input type="number" value={props.maxValue} onChange={props.onSetMaxValue}/>
            </div>
            <button onClick={props.onChangeSetValue}>Set Value</button>
        </div>
    )
}
