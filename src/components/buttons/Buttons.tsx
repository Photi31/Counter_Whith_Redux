import React from 'react';
import s from './Buttons.module.css'
import {Button} from "./Button";

type ButtonsPropsType = {
    buttons: {id: string, name: string, condition: string}[]
    incrementCounter?: () => void | undefined
    resetCounter?: () => void | undefined
    set: () => void
}

export const Buttons = (props:ButtonsPropsType) => {

    return (
        <div className={s.buttons}>
            {props.buttons.map(btn => <Button id={btn.id}
                                              name={btn.name}
                                              condition={btn.condition}
                                              incrementCounter={props.incrementCounter}
                                              resetCounter={props.resetCounter}
                                              set={props.set}
                />
            )}
        </div>
    )
}



