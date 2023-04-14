import {Counter} from "../counter/Counter";
import {Buttons} from "../buttons/Buttons";
import React, {useState} from "react";
import {v1} from "uuid";


type CounterScreenType = {
    set: () => void
}

export const CounterScreen = (props: CounterScreenType) => {
    let [counter, setCounter] = useState<number>(0)
    const buttons = [
        {id: v1(), name: 'INC', condition: 'active'},
        {id: v1(), name: 'RESET', condition: 'active'},
        {id: v1(), name: 'SET', condition: 'active'}
    ]

    let buttonsForButton = [...buttons]

    if (counter === 0) {
        buttonsForButton[1].condition = 'disable'
    } else {
        buttonsForButton[1].condition = 'active'
    }

    if (counter === 5) {
        buttonsForButton[0].condition = 'disable'
    } else {
        buttonsForButton[0].condition = 'active'
    }

    const incrementCounter = () => {
        if (counter < 5) {
            setCounter(++counter)
        }
    }

    const resetCounter = () => {
        setCounter(0)
    }

    const setCount = () => props.set()

    return <>
        <Counter counter={counter}/>
        <Buttons buttons={buttonsForButton}
                 incrementCounter={incrementCounter}
                 resetCounter={resetCounter}
                 set={setCount}/>
    </>
}