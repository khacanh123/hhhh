import { Avatar, Card, Carousel, Col, Row, Typography } from 'antd';
import React,{useState} from 'react';
import { UserOutlined, BankOutlined, RiseOutlined, BarcodeOutlined, CreditCardFilled, DollarCircleFilled, LineChartOutlined } from '@ant-design/icons';
const {Text} = Typography;
const HomeComponent = (props) =>{
    return(
        <>
            <Row>
                <Col span={24}>
                    <div style={{textAlign: 'right'}}>
                        <p>
                          <Avatar size={25} icon={<UserOutlined />} />
                           <Text type="success" style={{fontSize: 20, fontWeight:'bold'}}> Hệ thống thông tin</Text>
                        </p>
                    </div>
                    <div style={{textAlign:'left'}}>
                        <h3 style={{fontSize:20}}>Số dư tài khoản: <Text type="danger">{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(props.money)}</Text></h3>
                    </div>
                <Carousel autoplay>
                    <div>
                        <img src="https://www.cachkiemtien.online/wp-content/uploads/2019/02/cong-tac-vien-finhay.jpg" style={{width:'100%', height:'200px'}} />
                    </div>
                    <div>
                        <img src="https://app.finhay.com.vn/images/artboard.jpg" style={{width:'100%', height:'200px'}} />
                    </div>
                    <div>
                        <img src="https://mailinh.vn/uploads/media/1/images/Crossmarketing/Finhay/avatarwebfh.jpg" style={{width:'100%', height:'200px'}} />
                    </div>
                </Carousel>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col span={8}>
                    <Card bordered={true} style={{border:'2px solid black', textAlign: 'center', width:'95%', marginLeft:5, height:140}}
                    onClick={()=>props.bank()}>
                        <p><BankOutlined style={{fontSize:40}}/></p>
                        <h4>Rút tiền về TK Ngân hàng</h4>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true} style={{border:'2px solid black', textAlign: 'center', width:'95%', height:140, marginLeft:5}}>
                        <p><RiseOutlined style={{fontSize:40}}/></p>
                        <h4>Biến động số dư tài khoản</h4>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true} style={{border:'2px solid black', textAlign: 'center', width:'95%', height:140, marginLeft:5}}>
                        <p><BarcodeOutlined style={{fontSize:40}}/></p>
                        <h4>Nạp tiền</h4>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col span={8}>
                    <Card bordered={true} style={{border:'2px solid black', textAlign: 'center', width:'95%', marginLeft:20, height:140, marginLeft:5}}
                    onClick={console.log('helloworld')}>
                        <p><CreditCardFilled style={{fontSize:40}}/></p>
                        <h4>Gửi tiết kiệm</h4>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true} style={{border:'2px solid black', textAlign: 'center', width:'95%', height:140, marginLeft:5}}>
                        <p><DollarCircleFilled style={{fontSize:40}}/></p>
                        <h4>Đầu tư kiếm lời</h4>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true} style={{border:'2px solid black', textAlign: 'center', width:'95%', height:140, marginLeft:5}}>
                        <p><LineChartOutlined style={{fontSize:40}}/></p>
                        <h4>Theo dõi tiền lãi</h4>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default HomeComponent;