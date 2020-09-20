import React, {ChangeEvent, useState} from 'react'


type SetValueType = {
    setValue:(minValue:number, maxValue:number) => void
}

export const SetValue = (props:SetValueType) => {
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

    const onChangeSetValue = () => {
        props.setValue(minValue,maxValue)
    }

    const onSetMinValue = (e:ChangeEvent<HTMLInputElement>) => {
        setMinValue(+e.currentTarget.value)
    }

    const onSetMaxValue = (e:ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    return (
        <div>
            <div>
                <span>Min</span>
                <input type="number" value={minValue} onChange={onSetMinValue}/>
            </div>
            <div>
                <span>Max</span>
                <input type="number" value={maxValue} onChange={onSetMaxValue}/>
            </div>
            <button onClick={onChangeSetValue}>Set Value</button>
        </div>
    )
}