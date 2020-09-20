import React from 'react'
import {SetValue} from "./SetValue/SetValue";


type SetupType = {
    setValue: (maxValue:number , minValue:number) => void
}

export const Setup = (props:SetupType) => {
    return (
    <div>
        <SetValue setValue={props.setValue}/>
    </div>
    )
}


