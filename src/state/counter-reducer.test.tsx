import React from 'react';
import {
    counterReducer,
    CounterStateType,
    incrementAC,
    resetAC,
    setMaxValueAC,
    setMinValueAC,
    setNewValuesAC
} from "./counter-reducer";

let startState: CounterStateType

beforeEach(() => {
    startState = {
        startValue: 0,
        finishValue: 5,
        setMinValue: 3,
        setMaxValue: 8,
        currentValue: 3
    }
})

test('correct value should be increased by 1 ', () => {

    const endState = counterReducer(startState, incrementAC())

    expect(endState.currentValue).toEqual(4)
})

test('correct value should be reset to 0 ', () => {

    const endState = counterReducer(startState, resetAC())

    expect(endState.currentValue).toEqual(0)
})

test('start, finish and correct value should be set based on the setMin and setMax value ', () => {

    const endState = counterReducer(startState, setNewValuesAC())

    expect(endState).toEqual({
        startValue: 3,
        finishValue: 8,
        setMinValue: 3,
        setMaxValue: 8,
        currentValue: 3
    })
})

test('correct min value should be set to 1 ', () => {

    const endState = counterReducer(startState, setMinValueAC(1))

    expect(endState.setMinValue).toEqual(1)
})

test('correct max value should be set to 10 ', () => {

    const endState = counterReducer(startState, setMaxValueAC(10))

    expect(endState.setMaxValue).toEqual(10)
})