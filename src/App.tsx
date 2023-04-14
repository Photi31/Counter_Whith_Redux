import React, {useState} from 'react';
import s from './App.module.css';
import {CounterScreen} from "./components/screen/CounterScreen";
import {SetScreen} from "./components/screen/SetScreen";



function App() {

    const [counterScreen, setCounterScreen] = useState(true)

    const set = () => {
        setCounterScreen(!counterScreen)
    }

    return (
        <div className={s.App}>
            {counterScreen ? <CounterScreen set={set}/> : <SetScreen set={set}/>}
        </div>
    );
}

export default App;
