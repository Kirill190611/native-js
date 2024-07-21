import { Dispatch } from "redux"
import {AppStateType} from "./store";

const initialState = {
    value: 0
}

type CounterIncValueType = ReturnType<typeof IncValueAC>

type SetValuesFromLocalstorageType = ReturnType<typeof SetValuesFromLocalstorageAC>

export type InitialStateType = typeof initialState

export type CounterActionsType = CounterIncValueType | SetValuesFromLocalstorageType

export const counterReducer = (state: InitialStateType = initialState, action: CounterActionsType) => {
    switch (action.type) {
        case "INC-VALUE": {
            return {
                ...state, value: state.value + 1
            }
        }
        case "SET-VALUE-FROM-LOCALSTORAGE": {
          return {
              ...state, value: action.value
          }
        }
        default:
            return state
    }
}

export const IncValueAC = () => (
    {
        type: "INC-VALUE"
    } as const
)

export const SetValuesFromLocalstorageAC = (value: number) => (
    {
        type: "SET-VALUE-FROM-LOCALSTORAGE",
        value
    } as const
)

//THUNK

/*
export const incValuesTC = () => (dispatch: Dispatch<CounterActionsType>, getState: () => AppStateType) => {
    localStorage.setItem("counter value", JSON.stringify(getState().counter.value + 1))
    dispatch(IncValueAC())
}

export const setValueFromLocalstorageTC = () => (dispatch: Dispatch<CounterActionsType>) => {
    let valueAsString = localStorage.getItem("counter value");
    if (valueAsString) {
        dispatch(SetValuesFromLocalstorageAC(JSON.parse(valueAsString)))
    }
}*/
