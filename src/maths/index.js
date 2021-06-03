import React from 'react';
import ButtonComponent from './components/Button';
import FooterComponent from './components/Footer';
import HeaderComponent from './components/Header';
class Maths extends React.Component{
    clickButton = () => {
        alert('hello')
    }
    render(){
        return(
            // react.fragment: bao dong cua jsx
            // component la vung giao dien tai su dung dc
            <React.Fragment>
                
                <HeaderComponent headerStyle="pink" />
                <ButtonComponent clickButton={this.clickButton}>Click me</ButtonComponent>
                <FooterComponent footerStyle="violet" />
            </React.Fragment>
        )
    }
}
export default Maths;