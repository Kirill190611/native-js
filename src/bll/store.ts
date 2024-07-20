import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore
} from "redux";
import { counterReducer } from "./counter-reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer,
})

// @ts-ignore
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>

export type AppStoreType = typeof store;