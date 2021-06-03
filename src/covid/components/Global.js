import { Card, Col, Row, Skeleton } from 'antd';
import React from 'react';
import MyContext from '../context/my-context';
const Global = () => {
    return (
        <MyContext.Consumer>
            {context => {
                if(context.Global === undefined){
                    return <Skeleton active />
                }
                return(
                    <Row>
            <Col span={8}>
                <Card title="Nhiem benh" bordered={true}>
                    <p>So ca moi nhiem: {context.Global.NewConfirmed}</p>
                    <p>Tong so ca nhiem: {context.Global.TotalConfirmed}</p>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Tử vong" bordered={true}>
                    <p>So ca moi chet: {context.Global.NewDeaths}</p>
                    <p>Tong so ca chet: {context.Global.TotalDeaths}</p>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Khoi benh" bordered={true}>
                    <p>So ca moi khoi: {context.Global.NewRecovered}</p>
                    <p>Tong so ca khoi: {context.Global.TotalRecovered}</p>
                </Card>
            </Col>
        </Row>
                )
            }}
        </MyContext.Consumer>
    )
}
export default Global;