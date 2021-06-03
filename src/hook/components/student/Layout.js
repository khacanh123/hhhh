import React from 'react';
import { Layout, Row, Col } from 'antd';
import HeaderComponent from './partials/Header';

const { Content } = Layout;
const LayoutComponent = (props) => {
    return(
        <Layout>
            <HeaderComponent />
            <Content>
                <Row>
                    <Col span={24}>{props.children}</Col>
                </Row>
            </Content>
        </Layout>
    )
    }
export default LayoutComponent;