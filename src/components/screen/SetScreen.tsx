import {v1} from "uuid";
import {Buttons} from "../buttons/Buttons";
import React from "react";
import {SetMenu} from "../setMenu/SetMenu";

type SetScreenType = {
    set: () => void
}

export const SetScreen = (props: SetScreenType) => {
    const buttons = [
        {id: v1(), name: 'SET', condition: 'active'}
    ]
    let buttonsForButton = [...buttons]

    const setCount = () => props.set()

    return <>
        <SetMenu/>
        <Buttons buttons={buttonsForButton}
                 set={setCount}/>
    </>
}