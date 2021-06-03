import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const HeaderComponent = () => {
    return(
        <Header>
            <h2 style={{color:'white', textAlign:'center'}}>todo app</h2>
        </Header>
    )
}
export default HeaderComponent;