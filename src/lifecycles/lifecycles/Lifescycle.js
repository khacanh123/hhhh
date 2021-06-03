import React from 'react';

class Lifescycle extends React.Component {
    constructor() {
        super();
        this.state ={
            count: 20,
            color: 'red'
        }
    }
    static getDerivedStateFromProps(props, state){
        console.log(props,state);
        if(props.counter !== state.count ){
            return {count: props.counter};
        }
        return null;
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        // if(nextProps.counter !== nextState.count){
        //     return true;
        // }
        // return false;
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        const newColor = prevState.color !== prevProps.color ? prevProps.color : prevState.color;
        return newColor;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        document.getElementById('title').style.color = snapshot;
    }
    componentWillUnmount() {
        console.log('cwum dang chay');
    }
    

    render() {
        console.log('render of lifescycles');
        return (
            <>
               <h3>Number: {this.state.count} </h3>
               <p id="title" style={{color: this.state.color}}>getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM</p>
            </>
        );
    }
}

export default Lifescycle;