import React,{useState} from 'react';
import ButtonComponent from './components/Button';
import ResultComponent from './components/Result';

const Index = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 2);
    }
    const decrement = () => {
        setCount(count - 2);
    }
    return(
        <>
            <ResultComponent value={count}/>
            <hr/>
            <ButtonComponent type="button" click={increment}>+</ButtonComponent>
            <ButtonComponent type="button" click={decrement}>-</ButtonComponent>
        </>
    )
}
export default Index;