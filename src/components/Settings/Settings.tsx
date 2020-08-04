import React from 'react'
import ModuleSettigns from './Settings.module.css'


const Settings = () => {



    const onChangeStartCount = (e: React.FormEvent<HTMLInputElement>) => {
        let startCount =  e.currentTarget.value
        console.log('start:', startCount)
    }
    const onChangeEndCount = (e: React.FormEvent<HTMLInputElement>) => {
        let endCount = e.currentTarget.value
        console.log('end:', endCount)
    }


    return(
        <div className={ModuleSettigns.Settings}>
            <input onChange={onChangeStartCount} type='number'/>
            <input onChange={onChangeEndCount} type="number"/>
            <button>set</button>
        </div>
    )
}

export default Settings;