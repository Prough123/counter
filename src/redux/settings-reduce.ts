import {counterPropsType, initialState} from "./counter-reducer";

const UPDATE_COUNT = 'UPDATE_COUNT'


type dispatchActionType = {
    type: string
    startCount: number
    endCount: number
}



export const settingsReducer = (state:  counterPropsType = initialState, action: dispatchActionType) => {

    switch (action.type) {

        case  UPDATE_COUNT: {
            if (action.startCount && action.endCount) {
                return {...state, counter: state.counter.map(el => ({...el, startCount: action.startCount, endCount: action.endCount}))}
            }
        }
        default:
            return state
    }
}

export const updateCountAC = (startCountSetting: number, endCountSettings: number) => ({
    type: UPDATE_COUNT,
    startCount: startCountSetting,
    endCount: endCountSettings
})