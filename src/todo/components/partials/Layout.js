import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col } from 'antd';
import HeaderComponent from './Header';
import FooterComponent from './Footer';
const { Content } = Layout;

const LayoutPage = (props) => {
  return (
    <Layout>
      <HeaderComponent/>
      <Content>
          <Row>
              <Col span={12} offset={6}>
                  {props.children}
              </Col>
          </Row> 
      </Content>
      <FooterComponent/>
    </Layout>
  )
}
LayoutPage.propTypes = {
  children: PropTypes.node.isRequired
}
export default LayoutPage;