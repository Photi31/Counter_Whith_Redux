import React, {useState} from 'react';
import s from './App.module.css';
import {CounterScreen} from "./components/screen/CounterScreen";
import {SetScreen} from "./components/screen/SetScreen";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    CounterStateType,
    incrementAC,
    resetAC,
    setMaxValueAC,
    setMinValueAC,
    setNewValuesAC
} from "./state/counter-reducer";



function App() {

    const [counterScreen, setCounterScreen] = useState(true)
    const state = useSelector<AppRootStateType, CounterStateType>(state => state.counter)
    const dispatch = useDispatch()

    const set = () => {
        if (state.startValue !== state.setMinValue
            || state.finishValue !== state.setMaxValue) {
            console.log('dispatch set new values')
            dispatch(setNewValuesAC())
        }
        dispatch(setNewValuesAC())
        setCounterScreen(!counterScreen)
    }
    const changeValue = (value: number, id: string) => {
        if (id === 'minValue') {
            dispatch(setMinValueAC(value))
        } else if (id === 'maxValue') {
            dispatch(setMaxValueAC(value))
        }
    }

    const incValue = () => {
        dispatch(incrementAC())
    }
    const resetValue = () => {
       dispatch(resetAC())
    }

    return (
        <div className={s.App}>
            {counterScreen
                ? <CounterScreen set={set}
                                 currentValue={state.currentValue}
                                 startValue={state.startValue}
                                 finishValue={state.finishValue}
                                 incValue={incValue}
                                 resetValue={resetValue}

                />
                : <SetScreen minValue={state.setMinValue}
                             maxValue={state.setMaxValue}
                             set={set}
                             changeValue={changeValue}/>}
        </div>
    );
}

export default App;
