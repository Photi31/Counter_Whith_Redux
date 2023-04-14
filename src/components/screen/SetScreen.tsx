import {v1} from "uuid";
import {Buttons} from "../buttons/Buttons";
import React from "react";
import {SetMenu} from "../setMenu/SetMenu";

type SetScreenType = {
    minValue: number
    maxValue: number
    set: () => void
    changeSettingValue: (value: number, id: string) => void
}

export const SetScreen = (props: SetScreenType) => {
    const buttons = [
        {id: v1(), name: 'SET', condition: 'active'}
    ]

    if (props.minValue < 0
        || props.maxValue < 1
        || props.maxValue < props.minValue
        || props.maxValue === props.minValue) {
        buttons[0].condition = 'disable'
    }

    return <>
        <SetMenu minValue={props.minValue}
                 maxValue={props.maxValue}
                 changeSettingValue={props.changeSettingValue}
        />
        <Buttons buttons={buttons}
                 set={props.set}
        />
    </>
}