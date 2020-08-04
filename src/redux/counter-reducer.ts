
const PLUS_COUNT = 'ADD_COUNT'
const MINUS_COUNT = 'MINUS_COUNT'

export type counterType = {
    startCount: number
    endCount: number
}

export type counterPropsType = {
    counter: Array<counterType>
}

type dispatchActionType = {
    type: string
    startCount: number
    endCount: number
}

export let initialState = {
    counter: [
        {startCount: 0 , endCount: 0},
    ]
}



export const counterReducer = (state: counterPropsType = initialState, action: dispatchActionType) => {

    switch (action.type) {

        case PLUS_COUNT: {
              let copyState = {...state, counter: [...state.counter.map(el => ({...el, startCount: action.startCount}))]}
              return
        }

        case MINUS_COUNT: {
                return {...state, startCount: state.counter.startCount}

        }

        default:
            return state
    }
}

export const addCountAC = () => ({
    type: PLUS_COUNT,
})

export const minusCountAC = () => ({
    type: MINUS_COUNT
})