import {counterReducer} from "./counter-reducer";
import {settingsReducer} from "./settings-reduce";
import { combineReducers, createStore, Store } from "redux";


let reducers = combineReducers({
    counter: counterReducer,
    settings: settingsReducer,
})

export type RootStateType = ReturnType<typeof reducers>

let store:Store = createStore(reducers)

export default store