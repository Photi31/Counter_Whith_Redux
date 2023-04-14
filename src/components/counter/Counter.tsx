import React from 'react';
import s from './Counter.module.css'

type CounterPropsType = {
    currentValue: number
    finishValue: number
}

export const Counter = (props: CounterPropsType) => {

    const finishStyleCounter = props.currentValue !== props.finishValue ?
                                s.counter :
                                s.counter + ' ' + s.maxValue

    return (
        <div className={finishStyleCounter}>
            {props.currentValue}
        </div>
    )
}