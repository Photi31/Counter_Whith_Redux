import React, {ChangeEvent, useState} from 'react';
import s from './SetMenu.module.css'

type SetMenuType = {
    minValue: number
    maxValue: number
    changeSettingValue: (value: number, id: string) => void
}

export const SetMenu = (props: SetMenuType) => {

    const [errorMinValue, setErrorMinValue] = useState(false)
    const [errorMaxValue, setErrorMaxValue] = useState(false)

    const maxValueStyle = s.max + ' ' + (errorMaxValue ? s.error : '')
    const minValueStyle = s.min + ' ' + (errorMinValue ? s.error : '')

    if ((props.maxValue < 1 || props.maxValue <= props.minValue)
        && !errorMaxValue) {
        setErrorMaxValue(true)
    } else if (props.maxValue > 0
        && props.maxValue > props.minValue
        && errorMaxValue) {
        setErrorMaxValue(false)
    }
    if ((props.minValue < 0 || props.minValue >= props.maxValue)
        && !errorMinValue) {
        setErrorMinValue(true)
    } else if (props.minValue >= 0
        && props.minValue < props.maxValue
        && errorMinValue) {
        setErrorMinValue(false)
    }

    const OnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.name)
        props.changeSettingValue(+e.currentTarget.value, e.currentTarget.id)
    }

    return <div className={s.set}>
        <div className={maxValueStyle}>
            <h5>max value</h5>
            <input type={'number'}
                   id={'maxValue'}
                   value={props.maxValue}
                   onChange={OnChangeHandler}
            />
        </div>
        <div className={minValueStyle}>
            <h5>min value</h5>
            <input type={'number'}
                   id={'minValue'}
                   value={props.minValue}
                   onChange={OnChangeHandler}
            />
        </div>
    </div>
}