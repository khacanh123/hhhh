import { message } from 'antd';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import firebase from '../firebase';
const RegisterPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('');

    const history = useHistory();
    const ResgisterSubmit = () => {
        if(fullName === '' || email === '' || password === ''){
            return message.error('Vui lòng nhập đầy đủ thông tin');
        }
        if(password.length < 6){
            return message.error('Mật khẩu từ 6 kí tự trở lên.');
        }
        if(password !== rePassword){
            return message.error('Mật khẩu không trùng nhau.');
        }
        let user = {
            fullname: fullName,
            email_add: email,
            pass: password,
            level: 0
        }
        const User = firebase.database().ref('users');
        User.push(user);
        message.success('Đăng ký tài khoản thành công');
        history.push('/login');
    }
    return(
        <div className="register-page" style={{minHeight:586.391}}>
              <div className="register-box">
  <div className="register-logo">
    <NavLink to='/'><b>HinMart</b></NavLink>
  </div>
  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">Đăng ký tài khoản</p>
      <form action="../../index.html" method="post">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Họ tên" onChange={(e)=>setFullName(e.target.value)} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Mật khẩu" onChange={(e)=>setPassword(e.target.value)}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Nhập lại mật khẩu" onChange={(e)=>setRePassword(e.target.value)}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <div className="icheck-primary">
              <input type="checkbox" id="agreeTerms" name="terms" checked defaultValue="agree" />
              <label htmlFor="agreeTerms">
                Tôi đồng ý với <a href="#">điều khoản của HinMart</a>
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-5">
            <button type="button" onClick={ResgisterSubmit} className="btn btn-primary btn-block">Đăng ký </button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <NavLink to='/login' className="text-center">Đã có tài khoản</NavLink>
    </div>
    {/* /.form-box */}
  </div>{/* /.card */}
</div>
        </div>
    )
}
export default RegisterPage;