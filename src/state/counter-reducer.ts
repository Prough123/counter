const INCREASE_VALUE = 'INCREASE_VALUE'
const SET_VALUE = 'SET_VALUE'
const DECREASE_VALUE = 'DECREASE_VALUE'
const SET_ERROR = 'SET_ERROR'
const errorText = 'set value'

export type disableType = typeof initialState.disable
export type initialStateType = {
    maxValue: number,
    minValue: number,
    error: boolean,
    currentValue: number
    disable: {
        disabledSetValue: boolean
        disabledIncValue: boolean
        disabledDecValue: boolean
    }
}


const initialState = {
    maxValue: 0,
    minValue: 0,
    disable: {
        disabledSetValue: false,
        disabledIncValue: false,
        disabledDecValue: false,
    },
    currentValue: 0,
} as initialStateType

type ActionsType = incValueACType | decValueACType | setValueACType | setDisableACType


export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'SET_VALUE': {
            return {...state, maxValue: action.maxValue, currentValue: action.minValue, minValue: action.minValue}
        }
        case 'INCREASE_VALUE': {
            return {...state, currentValue: state.currentValue + 1}
        }
        case 'DECREASE_VALUE': {
            return {...state, currentValue: state.currentValue - 1}
        }
        case 'SET_ERROR': {
            return {
                ...state, disable: {
                    disabledDecValue: action.disabledDecValue,
                    disabledIncValue: action.disabledIncValue,
                    disabledSetValue: action.disabledSetValue
                }
            }
        }

        default: {
            return state
        }
    }
}

export const incValueAC = (): incValueACType => ({type: 'INCREASE_VALUE'})
export type incValueACType = {
    type: typeof INCREASE_VALUE
}


export const decValueAC = (): decValueACType => ({type: 'DECREASE_VALUE'})
export type decValueACType = {
    type: typeof DECREASE_VALUE
}


export const setValueAC = (minValue: number,
                           maxValue: number): setValueACType => ({
    type: 'SET_VALUE',
    minValue,
    maxValue
})
export type setValueACType = {
    type: typeof SET_VALUE
    maxValue: number
    minValue: number
}

export const setDisableAC = (disabledSetValue: boolean,
                             disabledIncValue: boolean,
                             disabledDecValue: boolean): setDisableACType => ({
    type: 'SET_ERROR',
    disabledDecValue,
    disabledIncValue,
    disabledSetValue
})
export type setDisableACType = {
    type: typeof SET_ERROR
    disabledSetValue: boolean
    disabledIncValue: boolean
    disabledDecValue: boolean
}

