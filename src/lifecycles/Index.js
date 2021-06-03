import React from 'react';
import Lifescycle from './lifecycles/Lifescycle';

class Index extends React.Component{
    constructor() {
        super();
        this.state = {
            num: 0,
            hide: true,
        }
        console.log('constructor of index component');

    }
    onClickButton = () => {
        this.setState({...this.state, num: this.state.num + 2})
    }
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps of index component');
        return null;
    }
    componentDidMount() {
        console.log('cdm of index component');
    }
    hideOrShow = () => {
        this.setState({...this.state, hide: !this.state.hide})
    }
    render(){
        console.log('render of index component');
        return(
            <>
                <h2>This is app index</h2>
                <br />
                <button onClick={this.onClickButton}>click me</button>
                {this.state.hide ? 
                <Lifescycle color="yellow" counter={this.state.num} /> : null}
                <button onClick={this.hideOrShow}>Hide/show</button>
            </>
        )
    }
    
}
export default Index;