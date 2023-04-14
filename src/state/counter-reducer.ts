
export type IncrementAT = {type: 'INC'}
export type ResetAT = {type: 'RESET'}
export type SetAT = {type: 'SET'}
export type CounterStateType = {
    startValue: number
    finishValue: number
    setMinValue: number
    setMaxValue: number
    currentValue: number
    error: string | null
}
type ActionType = IncrementAT | ResetAT | SetAT

const initialState: CounterStateType = {
    startValue: 0,
    finishValue: 5,
    setMinValue: 0,
    setMaxValue: 5,
    currentValue: 0,
    error: null
}

export const counterReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "INC":
            return {...state, currentValue: state.currentValue + 1}
        case "RESET":
            return {...state, currentValue: state.startValue}
        case "SET":
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
export const setAC = (): SetAT => {
    return {type: 'SET'}
}