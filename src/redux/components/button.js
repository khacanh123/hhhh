import React from  'react';
import { useSelector } from 'react-redux';
import * as actions from '../action/index';
import store from '../store/index';
const ButtonComponent = (props) =>{
    const { dispatch} = store;
    const count = useSelector(state => state.counter.count);

    const clickButton = () => {
        if(props.name === 'increment'){
            dispatch(actions.increment(count))
        }else if(props.name === 'decrement'){
            dispatch(actions.decrement(count))
        }
    }
    return(
        <button onClick={clickButton}>{props.children}</button>
    )
}
export default ButtonComponent;