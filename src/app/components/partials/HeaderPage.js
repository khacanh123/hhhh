import React from 'react';
import './style.css';
class HeaderPage extends React.Component {
    render(){
        return(
            <>
                <header style={{backgroundColor: this.props.background}}>
                    <h1 className="titleHeader">{this.props.title}</h1>
                </header>
            </>
        )
    }
}
export default HeaderPage;