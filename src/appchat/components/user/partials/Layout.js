import Layout from 'antd/lib/layout/layout';
import React from 'react';
import FooterComponent from './Footer';
import HeaderComponent from './Header';

const LayoutComponent = (props) => {
    return(
        <div className="container">
            <HeaderComponent />
            {props.children}
            <FooterComponent />
        </div>
    )
}
export default LayoutComponent;