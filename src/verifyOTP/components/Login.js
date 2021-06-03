import { Button, Input, Modal } from 'antd';
import React,{useState} from 'react';

const LoginPage = (props) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [telephone, setTelephone] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(true);
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    const onChangValue = (e) => {
        if(e.target.name === 'username'){
            setUser(e.target.value);
        }
        if(e.target.name === 'password'){
            setPass(e.target.value);
        }
        if(e.target.name === 'sdt'){
            setTelephone(e.target.value)
        }
    }
    return (
        <>
            <div style={{textAlign: 'center'}}>
                <h1>Đăng nhập FinHay</h1>
                <Input name="username" placeholder="Tên đăng nhập" onChange={onChangValue} style={{marginBottom: '5px'}}/>
                <Input name="password" type="password" placeholder="Mật khẩu đăng nhập" onChange={onChangValue} style={{marginBottom: '5px'}}/>
                <Button type="primary" onClick={()=>props.click(user,pass,telephone)}>Đăng nhập</Button>
            </div>
            <Modal title="Demo về otp" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <h4>Nhập số điện thoại nhận mã OTP</h4>
        <Input name="sdt" onChange={onChangValue} />
      </Modal>
        </>
    )
}
export default React.memo(LoginPage);