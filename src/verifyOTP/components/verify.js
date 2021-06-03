import { Button, Col, Row } from 'antd';
import React, {useState} from 'react';
import ReactCodeInput from 'react-verification-code-input';
const VerifyOTP = (props) =>{
  const [code, setCode] = useState(0);
    const  handleChange = vals => {
        if (vals.length >= 6) {
          setCode(vals);
        } else if (vals.length === 0) {
          console.log('empty, ', vals);
        }
      };
    return(
          <Row jutify="center">
            <Col span={24}>
              <div style={{textAlign:'center'}}>
                <h2>{props.type === 0 ? 'Xác thực đăng nhập': 'Xác thực giao dịch'}</h2>
                
                <h4>Nhập mã xác thực OTP</h4>
              
            <div style={{marginTop:'8px', marginBottom:'8px', paddingLeft: '145px', textAlign:'center'}}>
            <ReactCodeInput
                onChange={handleChange}
            />
          </div>
            <p>Vui lòng kiểm tra tin nhắn để lấy mã OTP của bạn.</p>
            {props.code === 0 ? (
              <p>Mã xác thực của bạn đã hết hiệu lực, lấy mã khác nhấn vào <button onClick={props.send}>đây</button></p>
            ): (
              <Button type="primary" onClick={()=>props.click(code,props.type)}>Xác thực</Button>
            )}
            
          </div>
            </Col>
          </Row>
    )
}
export default VerifyOTP;