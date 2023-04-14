import React, {MouseEvent} from 'react';
import s from './Button.module.css'

export type ButtonPropsType = {
    id: string
    name: string
    condition: string
    incValue?: () => void
    resetValue?: () => void
    set: () => void
}

export const Button = (props: ButtonPropsType) => {

    const finishButtonStyle = props.condition === 'active' ?
                            s.button :
                            s.button + ' ' + s.disable

    const ocClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        if (event.currentTarget.name === 'INC') {
            if (props.incValue) props.incValue()
        }
        else if (event.currentTarget.name === 'RESET') {
            if (props.resetValue) props.resetValue()
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