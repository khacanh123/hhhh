import React from 'react';
import Button from './component/Button';
import Input from './component/Input';
import Result from './component/Result';

class SumNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            one: 0,
            two: 0,
            total: 0
        }
        this.onChangeText = this.onChangeText.bind(this);
    }
    onChangeText = (e) => {
        let nameInput = e.target.name;
        let valueInput = e.target.value;
        if(nameInput == "number0"){
            this.setState({one: valueInput});
        }else if(nameInput == "number2"){
            this.setState({two: valueInput});
        }
    }
    sumTotal = () => {
        let num = this.state.one;
        let num2 = this.state.two;
        let sum = parseInt(num) + parseInt(num2);
        this.setState({total: sum});
    }
    
    render(){
        return(
            <>
            <Input value={0} name="number0" change={(e)=>this.onChangeText(e)}/>
            <br />
            <Input value={0} name="number2"  change={(e)=>this.onChangeText(e)}/>
            <Button click={this.sumTotal}>Tong</Button>
            <Result total={this.state.total}/>
            </>
        )
    }
}
export default SumNumber;