import {Counter} from "../counter/Counter";
import {Buttons} from "../buttons/Buttons";
import React from "react";
import {v1} from "uuid";


type CounterScreenType = {
    currentValue: number
    startValue: number
    finishValue: number
    incValue: () => void
    resetValue: () => void
    set: () => void
}

export const CounterScreen = (props: CounterScreenType) => {
    const buttons = [
        {id: v1(), name: 'INC', condition: 'active'},
        {id: v1(), name: 'RESET', condition: 'active'},
        {id: v1(), name: 'SET', condition: 'active'}
    ]

    let buttonsForButton = [...buttons]

    if (props.currentValue === props.startValue) {
        buttonsForButton[1].condition = 'disable'
    } else {
        buttonsForButton[1].condition = 'active'
    }

    if (props.currentValue === props.finishValue) {
        buttonsForButton[0].condition = 'disable'
    } else {
        buttonsForButton[0].condition = 'active'
    }


    return <>
        <Counter currentValue={props.currentValue}
                 finishValue={props.finishValue}/>
        <Buttons buttons={buttonsForButton}
                 incValue={props.incValue}
                 resetValue={props.resetValue}
                 set={props.set}/>
    </>
}