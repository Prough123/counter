import React from 'react'
import ModuleCounter from './Counter.module.css'
import DisplayCounter from "./DisplayCounter/DisplayCounter";
import ControlCounterContainer from "./ContolCounter/ControlCounterContainer";






const Counter = () => {
    return (
        <div className={ModuleCounter.Counter}>
            <div className={ModuleCounter.CounterControl}>
               <DisplayCounter />
               <ControlCounterContainer />
            </div>
        </div>
    )
}

export default Counter;