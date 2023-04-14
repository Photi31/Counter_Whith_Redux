import {v1} from "uuid";
import {Buttons} from "../buttons/Buttons";
import React from "react";
import {SetMenu} from "../setMenu/SetMenu";

type SetScreenType = {
    minValue: number
    maxValue: number
    set: () => void
    changeValue: (value: number, id: string) => void
}

export const SetScreen = (props: SetScreenType) => {
    const buttons = [
        {id: v1(), name: 'SET', condition: 'active'}
    ]
    let buttonsForButton = [...buttons]

    if (props.minValue < 0
        || props.maxValue < 1
        || props.maxValue < props.minValue
        || props.maxValue === props.minValue) {
        buttonsForButton[0].condition = 'disable'
    }

    return <>
        <SetMenu minValue={props.minValue}
                 maxValue={props.maxValue}
                 changeValue={props.changeValue}
        />
        <Buttons buttons={buttonsForButton}
                 set={props.set}
        />
    </>
}