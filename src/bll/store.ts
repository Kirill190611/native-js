import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore
} from "redux";
import {counterReducer} from "./counter-reducer";
import {thunk} from "redux-thunk";
import {
    loadState,
    saveState
} from "../utils/localstorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer,
})

// @ts-ignore
export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

export type AppStateType = ReturnType<typeof rootReducer>

export type AppStoreType = typeof store;