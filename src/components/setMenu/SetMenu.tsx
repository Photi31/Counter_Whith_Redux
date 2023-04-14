import React, {ChangeEvent} from 'react';
import s from './SetMenu.module.css'

type SetMenuType = {

}

export const SetMenu = (props: SetMenuType) => {

    const OnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.name)
        // props.changeValue(e.currentTarget.value, e.currentTarget.id)
    }

    return <div className={s.set}>
        <div className={s.max}>
            <h5>max value</h5>
            <input type={'number'} id={'maxValue'} onChange={OnChangeHandler} value={0}/>
        </div>
        <div className={s.min}>
            <h5>min value</h5>
            <input type={'number'} id={'minValue'} onChange={OnChangeHandler} value={5}/>
        </div>
    </div>
}