import React, { useState } from 'react';
import './login.css';
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onChangeValue = (e) => {
        if(e.target.name === 'username'){
            setUsername(e.target.value);
        }else{
            setPassword(e.target.value);
        }
    }
    return(
        <div id="body">
            <div className="login-wrap">
  <div className="login-html">
    <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Đăng nhập</label>
    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab"></label>
    <div className="login-form">
      <div className="sign-in-htm">
        <div className="group">
          <label htmlFor="user" className="label">Tên đăng nhập</label>
          <input id="user" type="text" className="input" onChange={onChangeValue} />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">Mật khẩu</label>
          <input id="pass" type="password" className="input" data-type="password" onChange={onChangeValue} />
        </div>
        <div className="group">
          <input type="button" className="button" defaultValue="Đăng nhập" />
        </div>
      </div>
      <div className="sign-up-htm">
        <div className="group">
          <label htmlFor="user" className="label">Username</label>
          <input id="user" type="text" className="input" />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">Password</label>
          <input id="pass" type="password" className="input" data-type="password" />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">Repeat Password</label>
          <input id="pass" type="password" className="input" data-type="password" />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">Email Address</label>
          <input id="pass" type="text" className="input" />
        </div>
        <div className="group">
          <input type="submit" className="button" defaultValue="Sign Up" />
        </div>
        <div className="hr" />
        <div className="foot-lnk">
          <label htmlFor="tab-1">Already Member?
          </label></div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}
export default LoginPage;