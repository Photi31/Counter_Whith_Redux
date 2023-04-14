import React from 'react';
import {counterReducer, CounterStateType, incrementAC, resetAC, setAC} from "./counter-reducer";

let startState: CounterStateType

beforeEach(() => {
    startState = {
        startValue: 0,
        finishValue: 5,
        setMinValue: 3,
        setMaxValue: 8,
        currentValue: 3,
        error: null
    }
})

test('correct value should be increased by 1 ', () => {

    const endState = counterReducer(startState, incrementAC())

    expect(endState).toEqual({
        startValue: 0,
        finishValue: 5,
        setMinValue: 3,
        setMaxValue: 8,
        currentValue: 4,
        error: null
    })
})

test('correct value should be reset to 0 ', () => {

    const endState = counterReducer(startState, resetAC())

    expect(endState).toEqual({
        startValue: 0,
        finishValue: 5,
        setMinValue: 3,
        setMaxValue: 8,
        currentValue: 0,
        error: null
    })
})

test('\'start, finish and correct value should be set based on the setMin and setMax value ', () => {

    const endState = counterReducer(startState, setAC())

    expect(endState).toEqual({
        startValue: 3,
        finishValue: 8,
        setMinValue: 3,
        setMaxValue: 8,
        currentValue: 3,
        error: null
    })
})