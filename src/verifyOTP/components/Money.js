import { BankOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Input, message, Row, Typography } from 'antd';
import React, {useState} from 'react';
const {Text} = Typography;

const MoneyToBankComponent = (props) => {
    const [moneyDcre,setMoneyDcre] = useState(0);
    const [fullname, setFullname] = useState('NGUYEN KHAC ANH');
    const [bankName, setBankName] = useState('AGRIBANK');
    const [numberOfBank, setNumberOfBank] = useState('2345678900965');

    const MoneySend = (e) => {
        setMoneyDcre(e.target.value);
    }
    const DisplayInfor = () => {
        if(moneyDcre.toString().length >= 6){
            const phi = moneyDcre*0.03;
            if(parseInt(moneyDcre)+ parseInt(phi) > props.money){
                return(
                    <h4>Tổng cộng tiền rút và phí vượt quá số dư tài khoản.</h4>
                )
            }else{
                let total = parseInt(moneyDcre)+ parseInt(phi);
                return(
                <>
                    <p>Số tiền rút: <span style={{color: 'red'}}>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(moneyDcre)}</span></p>
                    <p>Phí 0,3%: <span style={{color: 'red'}}>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(phi)}</span></p>
                    <p>Tổng cộng: <span style={{color: 'red'}}>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(total)}</span></p>
                </>
            )
            }
            
        }
    }
    const submitSend = (total) => {
        if(moneyDcre.toString().length < 6){
            message.error('Số tiền rút tối thiểu là 100.000 đồng');
        }else{
            const phi = moneyDcre*0.03;
            if(parseInt(moneyDcre)+ parseInt(phi) > props.money){
                message.error('Tổng cộng tiền rút và phí vượt quá số dư tài khoản')
            }else{
                // return otp check
            props.otp(total);
            }
            
        }
    }
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
                </Col>
                <Col span={24}>
                    <Button><BankOutlined /> Về trang chủ</Button>
                    <div style={{textAlign:'left'}}>
                        <h3 style={{fontSize:20}}>Số dư tài khoản: <Text type="danger">{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(props.money)}</Text></h3>
                    </div>
                    <h5>Lưu ý: Số tiền rút tối thiểu là 100.000 đồng</h5>
                    <Input onChange="" onChange={MoneySend} placeholder="Nhập số tiền rút"/><br/>
                    <Input onChange="" defaultValue={fullname} placeholder="Tên chủ tài khoản"/><br />
                    <Input onChange="" defaultValue={bankName} placeholder="Ngân hàng"/><br />
                    <Input onChange="" defaultValue={numberOfBank} placeholder="Số tài khoản"/> <br />

                    <p style={{textAlign:'center'}}>
                        {DisplayInfor()}
                        <Button type="primary" onClick={()=>submitSend(moneyDcre)}>Tạo lệnh rút tiền</Button>
                    </p>
                </Col>
            </Row>
        </>
    )
}
export default MoneyToBankComponent;