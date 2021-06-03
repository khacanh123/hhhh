import { Button, Col, List, notification, Progress,message, Result, Row, Typography } from 'antd';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import HomeComponent from './components/Home';
import LayoutPage from './components/Layout';
import LoginPage from './components/Login';
import VerifyOTP from './components/verify';
import MoneyToBankComponent from './components/Money';
import {api} from './getCode';
import HinComponent from './components/content/HinComponent';
import { BankOutlined, SmileOutlined } from '@ant-design/icons';
import VuComponent from './components/content/VuComponent';
import jwt from 'jsonwebtoken';
const KEY_JWT = '123456789';
const Index = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [verify, setVerify] = useState(true);
    const [otpLogin, setOtpLogin] = useState(0);
    const [HomePage, setHomePage] = useState(false);
    const [Bank, setBank] = useState(false);
    const [Hin, setHin] = useState(false);
    const [Vu, setVu] = useState(false);
    const [contentPpt, setContentPpt] = useState(true);
    const [test, settest] = useState(false);
    const [money,setMoney] = useState(3000000);
    const [typeVerify, setTypeVerify] = useState(0);
    const [MoneyToBank, setMoneyToBank] = useState(0);
    const [bill, setBill] = useState(false);
    const [prog, setProg] = useState(0);
    const [hideOrShow, setHideOrShow] = useState(true);
    const [end, setEnd] = useState(false);
    const [tele, setTele] = useState('');

    // check otp code
    const verifyLogin = (code, type) => {
        console.log(code);
        console.log(otpLogin);
        if(parseInt(code) !== parseInt(otpLogin)){
            // otp khong dung
            if(type === 0){
                notification.open({
                message: 'Mã OTP không đúng',
                description:
                  'Đăng nhập không thành công',
                onClick: () => {
                  console.log('Notification Clicked!');
                },
              });
              let errors = {
                "StatusCode": 300,
                "IsVerify": false,
                "IsSendOTP": true,
                "Description":'Ma OTP khong dung',

            };
            console.log(errors);
            setVerify(true);
            setIsLogin(false);
            }
            if(type === 2){
                notification.open({
                    message: 'Giao dịch không thành công',
                    description:
                      'Mã OTP không chính xác. FinHay đã hủy giao dịch này.',
                    onClick: () => {
                      console.log('Notification Clicked!');
                    },
                  });
                setVerify(true);
                setHomePage(true);
            }
            
        }else{
            // xu ly khi otp dung
            if(type === 0){
                setVerify(true);
                setHomePage(true);
                let success = {
                    "StatusCode":200,
                    "IsVerify": true,
                    "IsRedirectHomePage": true
                };
                console.log(success);
            }
            //
            if(type === 2){
                let mt = parseInt(MoneyToBank) * 0.03 + parseInt(MoneyToBank);
                let moneytotal = parseInt(money) - parseInt(mt);
                setMoney(moneytotal);
                setVerify(true);
                setBill(true);
                let success = {
                    "StatusCode":200,
                    "IsVerify": true,
                    "Result": "success"
                };
                console.log(success);
            }
            
        }
    }
    // set time life of otp code 15s
    const setTimeOtpLife = () => {
        setTimeout(function(){ 
            setOtpLogin(0);
            let warning = {
                "StatusCode": 302,
                "IsVerify": false,
                "IsSendOTP": true,
                "errors":'Ma xac thuc da het hieu luc',
            };
            console.log(warning);
        }, 25*1000);
    }
    // call api send api sms otp and save otp code to state
    const sendSmsOtp = async (telephone) => {
        let data = {};
        tele === '' ? data = {sdt: telephone} : data = {sdt: tele};
        axios.post('http://localhost:8000/send-otp', data)
            .then((result) => {
                setOtpLogin(result.data.random);
            })
        // call func set time life otp code
        setTimeOtpLife();
    } 
    // check login
    const chkLogin = (user,pass,telephone) => {
        if(user === 'finhay2000' && pass === 'htta'){
            // call function api send otp code
            setTele(telephone);
            sendSmsOtp(telephone);
            setIsLogin(true);
            setVerify(false);
            let token = jwt.sign(
                { exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: tele }, 
                KEY_JWT
              );
              let infor = {
                "IsVerify": false,
                "IsSendOTP": true,
                "OTPCode": token,
                "Counter": 'running',
                "Time": 30
            };
            console.log(infor);
        }else{
            notification.open({
                message: 'Đăng nhập không thành công',
                description:
                  'Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.',
                onClick: () => {
                  console.log('Notification Clicked!');
                },
              });
        }
    }
    const displayBank = () => {
        setHomePage(false);
        setBank(true);
    }
    const LetGo = () => {
        setContentPpt(false);
        setHin(true);
        let pre = prog + 5;
        setProg(pre);
    }
    const progessPpt = (point) =>{
        let pre = prog + point;
        setProg(pre);
    }
    const TestDemo = () => {
        let infor = {
            "IsLogin": false,
            "IsVerify": false,
            "IsSendOTP": false,
            "status": "ready"
        };
        console.log(infor);
        progessPpt(5);
        setHin(false);
        setIsLogin(false);
        settest(true);
        setProgress(false);
    }
    const MoneyCheck = (total) => {
        setVerify(false);
        setBank(false);
        sendSmsOtp(tele);// truyền sđt đc lưu trong state
        setTypeVerify(2);
        setMoneyToBank(total);
        let token = jwt.sign(
            { exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: tele }, 
            KEY_JWT
          );
        let infor = {
            "IsVerify": false,
            "IsSendOTP": true,
            "telephone": tele,
            "OTPCode": token,
            "Counter": 'running',
            "Time": 30
        };
        console.log(infor);

    }
    const setProgress = (value) => {
        setHideOrShow(value);
    }
    const setShowComponent = () => {
        setVu(true);
        setHideOrShow(true);
        setBill(false);

    }
    const setShowComponentOne = () => {
        setVu(true);
        setHideOrShow(true);
        setHin(false);
    }
    const setShowComponentTwo = () => {
        setVu(false);
        setHideOrShow(true);
        setHin(true);
    }
    const showEnd = () => {
        setVu(false);
        setEnd(true);
    }
    return(
        <>
        <LayoutPage check={test}>
            
            {!isLogin ? <LoginPage click={chkLogin}/> : null}
            {!verify ? <VerifyOTP click={verifyLogin} code={otpLogin} type={typeVerify} send={sendSmsOtp} /> : null}
            {HomePage ? <HomeComponent click={verifyLogin} money={money} bank={displayBank} /> : null}
            {Bank ? <MoneyToBankComponent money={parseInt(money)} otp={MoneyCheck} /> : null}
            {Hin ? <HinComponent test={TestDemo} progress={progessPpt} show={setShowComponentOne} /> : null}
            {contentPpt ? <MainContent go={LetGo} /> : null}
            {Vu ? <VuComponent end={showEnd} show={setShowComponentTwo}/>: null}
            {bill ? <BillMoney bank={MoneyToBank} money={money} show={setShowComponent} /> : null}
            {/* {hideOrShow ? <Progress percent={prog} /> : null } */}
            {end ? (
        <>
         <Result
            icon={<SmileOutlined />}
            title="Cảm ơn cô và các bạn đã theo dõi bài thuyết trình của nhóm!"
        />
        </>
    ) : null}
            <hr />
        </LayoutPage>
        </>
    )
}
const data = [
    'OTP là gì ?',
    'Ứng dụng của OTP',
    'Các hình thức xác thực OTP',
    'Cơ chế sử dụng mật khẩu OTP',
    'Mô hình tạo ra mật khẩu OTP',
    'Ưu, nhược điểm của OTP',
    'Kết luận',
];

const MainContent = (props) => {
    return(
        <div style={{marginTop:3,lineHeight:'15px'}}>
        <h2 style={{textAlign:'center'}}>Hệ thống xác thực bằng mật khẩu OTP</h2>
        <div style={{textAlign: 'center'}}>
            <h3>Học phần: An toàn hệ thống thông tin</h3>
            <h3>Nguyễn Khắc Anh</h3>
            <h3>Nguyễn Long Vũ</h3>
        </div>
        <List
      header={<div>Nội dung chính</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>*</Typography.Text> {item}
        </List.Item>
      )}
      
    />
    <Button type="primary" onClick={()=>props.go()}>Let's Go</Button>
    </div>
    )
}
const BillMoney = (props) => {
    return(
        <>
            <Row>              
                <Col span={24}>
                    <div style={{textAlign: 'center'}}>
                        <p><SmileOutlined style={{fontSize:'90px', color:'darkgreen'}} /></p>
                        <h3>Giao dịch thành công</h3>
                        <p>Quý khách đã rút {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(props.bank)} đồng từ FinHay thành công</p>
                        <p>Số dư hiện tại: {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(props.money)}</p>
                        <h4>Cảm ơn bạn đã tin tưởng và sử dụng FinHay</h4>
                        <Button><BankOutlined /> Về trang chủ</Button>
                        <hr/>
                        <Button type="primary" onClick={()=>props.show()}>Nội dung tiếp theo</Button>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default React.memo(Index);