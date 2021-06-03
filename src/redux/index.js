import React, { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import ButtonComponent from './components/button';
import Result from './components/Result';
import store from './store';

const Counter = () => {
    
    
    const [value, setValue] = useState(0);
    return(
        <Provider store={store}>
<>
        <Result />
        <ButtonComponent name="increment">+</ButtonComponent>
        <ButtonComponent name="decrement">-</ButtonComponent>
        </>
        </Provider>
        
    )
}
export default Counter;