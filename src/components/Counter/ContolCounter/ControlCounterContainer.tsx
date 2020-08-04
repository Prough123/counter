import React from 'react'
import {RootStateType} from "../../../redux/redux-store";
import {addCountAC, minusCountAC} from "../../../redux/counter-reducer";
import {connect} from "react-redux";
import ControlCounter from "./ControlCounter";



let mapStateToProps = (state: RootStateType) => {
    return {
        counter: state.counter
    }
}


let mapDispatchToProps = (dispatch:any) => {
    return {
        onPlusCount: () => {
            dispatch(addCountAC())
        },
        onMinusCount: () => {
            dispatch(minusCountAC())
        }
    }
}

const ControlCounterContainer = connect(mapStateToProps,mapDispatchToProps)(ControlCounter)

export default ControlCounterContainer;

