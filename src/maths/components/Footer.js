import React from 'react';
class FooterComponent extends React.Component{
    render(){
        return(
            <>
                <footer style={{backgroundColor: this.props.footerStyle}}>
                    <h2>This is footer</h2>
                </footer>
            </>
        )
    }
}
export default FooterComponent;