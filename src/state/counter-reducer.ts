const INCREASE_VALUE = 'INCREASE_VALUE'
const SET_VALUE = 'SET_VALUE'
const DECREASE_VALUE = 'DECREASE_VALUE'


export type initialStateType = {
    maxValue: number,
    minValue: number,
    error: boolean,
    currentValue: number
}

const initialState = {
    maxValue: 0,
    minValue: 0,
    error: false,
    currentValue: 0,
} as initialStateType

type ActionsType = incValueACType | decValueACType | setValueACType


export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'SET_VALUE': {
            return {...state, maxValue: action.maxValue,currentValue: action.minValue}
        }
        case 'INCREASE_VALUE': {
            // return {...state,  currentValue: state.currentValue = state.minValue <= state.maxValue ? state.currentValue + 1 : 0  }
            return {...state, currentValue: state.currentValue + 1 }

        }
        case 'DECREASE_VALUE': {
            // return {...state, currentValue: state.currentValue = state.minValue >= state.maxValue ? state.currentValue - 1 : 0   }
            return {...state, currentValue: state.currentValue - 1}
        }

        default: {
            return state
        }
    }
}

export const incValueAC = ():incValueACType => ({type:  'INCREASE_VALUE'})
export type incValueACType = {
    type: typeof INCREASE_VALUE
}


export const decValueAC = ():decValueACType => ({type: 'DECREASE_VALUE'})
export type decValueACType = {
    type:typeof DECREASE_VALUE
}


export const setValueAC = (minValue: number, maxValue: number) => ({type:'SET_VALUE', maxValue, minValue})
export type setValueACType = {
    type: typeof SET_VALUE
    maxValue:number
    minValue:number
}
