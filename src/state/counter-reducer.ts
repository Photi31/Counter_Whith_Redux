
export type IncrementAT = {type: 'INC'}
export type ResetAT = {type: 'RESET'}
export type SetAT = {type: 'SET-NEW-VALUES'}
export type SetMinValueAT = {type: 'SET-MIN-VALUE', value: number}
export type SetMaxValueAT = {type: 'SET-MAX-VALUE', value: number}

export type CounterStateType = {
    startValue: number
    finishValue: number
    setMinValue: number
    setMaxValue: number
    currentValue: number
}
type ActionType = IncrementAT | ResetAT | SetAT | SetMinValueAT | SetMaxValueAT

const initialState: CounterStateType = {
    startValue: 0,
    finishValue: 5,
    setMinValue: 0,
    setMaxValue: 5,
    currentValue: 0
}

export const counterReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "INC":
            return {...state, currentValue: state.currentValue + 1}
        case "RESET":
            return {...state, currentValue: state.startValue}
        case "SET-MIN-VALUE":
            return {...state, setMinValue: action.value}
        case "SET-MAX-VALUE":
            return {...state, setMaxValue: action.value}
        case "SET-NEW-VALUES":
            return {
                ...state,
                startValue: state.setMinValue,
                finishValue: state.setMaxValue,
                currentValue: state.setMinValue,
            }
        default:
            return state
    }
}

export const incrementAC = (): IncrementAT => {
    return {type: 'INC'}
}
export const resetAC = (): ResetAT => {
    return {type: 'RESET'}
}
export const setNewValuesAC = (): SetAT => {
    return {type: 'SET-NEW-VALUES'}
}
export const setMinValueAC = (value: number): SetMinValueAT => {
    return {type: 'SET-MIN-VALUE', value}
}
export const setMaxValueAC = (value: number): SetMaxValueAT => {
    return {type: 'SET-MAX-VALUE', value}
}