import React  from 'react';
import reduxStore from '../ReduxStore';
import { useSelector } from 'react-redux';
import {increment, decrement, reset} from '../Actions/CounterAction';

const Counter = () => {
    const counterData = useSelector(state => state.counterData);

    return (
        <div>
            <div><h2>{counterData}</h2></div>
            <div>
                <button onClick={() =>
                    reduxStore.dispatch(increment(counterData))}>
                    INCREMENT
                </button>
            </div>
            <div>
                <button onClick={() =>
                    reduxStore.dispatch(decrement(counterData))}>
                    DECREMENT
                </button>
            </div>
            <button onClick={() =>
                reduxStore.dispatch(reset())}>
                RESET
            </button>
        </div>
    );
}

export default Counter;