import React from 'react';
class HeaderComponent extends React.Component{
    render(){
        return(
            <>
                <header style={{backgroundColor: this.props.headerStyle}}>
                    <h2>This is title</h2>
                </header>
            </>
        )
    }
}
export default HeaderComponent;