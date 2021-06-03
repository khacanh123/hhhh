import React from 'react';
import {Col, Layout, Row} from 'antd';
import HeaderComponent from './partials/Header';
import FooterComponent from './partials/Footer';
const {Content} = Layout;
const LayoutComponent = (props) =>{
    return(
        <Layout>
            <HeaderComponent/>
            <Content>
                <Row>
                    <Col span={24} offset={6}>{props.children}</Col>
                </Row>
            </Content>
            <FooterComponent/>
        </Layout>
    )
}
export default LayoutComponent;