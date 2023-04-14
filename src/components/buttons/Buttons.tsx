import React from 'react';
import s from './Buttons.module.css'
import {Button} from "./Button";

type ButtonsPropsType = {
    buttons: {id: string, name: string, condition: string}[]
    incValue?: () => void | undefined
    resetValue?: () => void | undefined
    set: () => void
}

export const Buttons = (props:ButtonsPropsType) => {

    return (
        <div className={s.buttons}>
            {props.buttons.map(btn => <Button key={btn.id}
                                              id={btn.id}
                                              name={btn.name}
                                              condition={btn.condition}
                                              incValue={props.incValue}
                                              resetValue={props.resetValue}
                                              set={props.set}
                />
            )}
        </div>
    )
}



