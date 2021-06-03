import React from 'react'
import Button from './Button';
import Result from './Result';

class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
        this.incrementButton = this.incrementButton.bind(this);
        this.decrementButton = this.decrementButton.bind(this);
    }
    incrementButton = () =>{
        this.setState({count:this.state.count + 2}, ()=>{
            console.log('cap nhat state');
        })
    }
    decrementButton = () => {
        this.setState({count: this.state.count - 2}, ()=>{
            console.log('cap nhat state');
        })
    }
    
    render(){
        return(
            <>
                <Result count={this.state.count} />
                <Button type="button" click={this.incrementButton}>+</Button>
                <Button type="button" click={this.decrementButton}>-</Button>
            </>
        )
    }
}
export default Counter;