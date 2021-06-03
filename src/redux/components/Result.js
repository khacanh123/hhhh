import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../action/index';

const Result = () => {
    const check =  useSelector(state => state.counter);
    const dispatch = useDispatch();
console.log(check);
    
    const count = useSelector(state => state.counter.count);
    return(
        <>
        <h2>{count}</h2>
        <h3>{ check.checking ? 'số chẵn': 'số lẻ'}</h3>
        </>
    )
}
export default Result;