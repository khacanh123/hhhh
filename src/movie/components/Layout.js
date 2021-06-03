import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from './Header';
import FooterComponent from './Footer';
const { Content } = Layout;

const LayoutComponent = (props) => {
    return(
        <Layout className="layout">
            <HeaderComponent />
            <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
                {props.children}
            </div>
            </Content>
            <FooterComponent />
        </Layout>
    )
}
export default React.memo(LayoutComponent);