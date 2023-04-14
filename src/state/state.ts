import React from 'react';
import {v1} from "uuid";

const state = {
    buttonsCounter: [
        {id: v1(), name: 'INC', condition: 'active'},
        {id: v1(), name: 'RESET', condition: 'active'},
        {id: v1(), name: 'SET', condition: 'active'}
    ],
    buttonsSet: [
        {id: v1(), name: 'SET', condition: 'active'}
    ],
    counter: {
        startValue: 0,
        finishValue: 5,
        currentValue: 0
    },
    set: {
        setMinValue: 0,
        setMaxValue: 5,
        errorMinValue: false,
        errorMaxValue: false
    },
    counterScreen: true
}