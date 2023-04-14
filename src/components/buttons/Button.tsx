import React, {MouseEvent} from 'react';
import s from './Button.module.css'

export type ButtonPropsType = {
    id: string
    name: string
    condition: string
    incrementCounter?: () => void
    resetCounter?: () => void
    set: () => void
}

export const Button = (props: ButtonPropsType) => {

    const finishButtonStyle = props.condition === 'active' ?
                            s.button :
                            s.button + ' ' + s.disable

    const ocClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name)
        if (event.currentTarget.name === 'INC') {
            if (props.incrementCounter) props.incrementCounter()
        }
        else if (event.currentTarget.name === 'RESET') {
            if (props.resetCounter) props.resetCounter()
        }
        else if (event.currentTarget.name === 'SET') {
            props.set()
        }
    }

    return <button className={finishButtonStyle}
                   id={props.id}
                   name={props.name}
                   onClick={props.condition === 'active' ? ocClickHandler : ()=>{}}>
                {props.name}
           </button>

}