const initialState = {
    value: 0
}

type CounterIncValueType = ReturnType<typeof incValueAC>

type SetValuesFromLocalstorageType = ReturnType<typeof setValuesFromLocalstorageAC>

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

export const incValueAC = () => (
    {
        type: "INC-VALUE"
    } as const
)

export const setValuesFromLocalstorageAC = (value: number) => (
    {
        type: "SET-VALUE-FROM-LOCALSTORAGE",
        value
    } as const
)