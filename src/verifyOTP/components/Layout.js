import React from 'react';
import { Layout, Row, Col } from 'antd';
import HeaderComponent from './Header';
const { Content } = Layout;

const LayoutPage = (props) => {
  return (
    <Layout>
      {props.check ? <HeaderComponent /> : null}
      <Content>
          <Row>
              <Col span={12} offset={6} style={{backgroundColor:'white'}}>
                  {props.children}
              </Col>
          </Row> 
      </Content>
    </Layout>
  )
}
export default LayoutPage;