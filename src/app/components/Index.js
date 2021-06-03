import React from 'react';
import FooterPage from './partials/FooterPage';
import HeaderPage from './partials/HeaderPage';
import NavBarPage from './partials/NavBarPage';

class IndexPage extends React.Component {
    render(){
        return(
            <>
                <HeaderPage 
                    background="yellow"
                    title="Hello Reactjs"
                />
                <NavBarPage />
                {this.props.children}
                <FooterPage />
            </>
        )
    }
}
export default IndexPage;