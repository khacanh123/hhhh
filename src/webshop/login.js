import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import firebase from './firebase';
  
import jwt from 'jsonwebtoken';
const KEY_JWT = '123456789';
const LoginPage = () => {
  const [listUser, setListUser] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(()=>{
    const getuser = async () => {
      const todoRef = await firebase.database().ref('users');
      todoRef.on('value', (snapshot) => {
       const todos = snapshot.val();
       const todoList = [];
       for (let id in todos) {
               todoList.push({ id, ...todos[id] });
       }
       setListUser(todoList);
     });
    }
    getuser();
  },[])

  const history = useHistory();
  const submitForm = () => {
    let check = true;
    if(email === '' || password === ''){
      return message.error('Vui lòng nhập đầy đủ thông tin');
    }
    listUser.map((key, index) => {
      if(key.email_add === email && key.pass === password){
        let token = null;
        token = jwt.sign(
          { exp: Math.floor(Date.now() / 1000) + (60 * 60),
          data: key.fullname, level: key.level, id: key.id  },
          KEY_JWT
        );
        localStorage.setItem('token', token);
        message.success('Đăng nhập thành công');
        check = false;
        return history.push('/');
      }
    })
    if(check){
      return message.error('Đăng nhập thất bại');
    }
  }
    return(
        <div className="login-page" style={{minHeight:512.391}}>
          <div className="login-box">
  <div className="login-logo">
    <NavLink to="/"><b>HinMart</b></NavLink>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <form action="../../index3.html" method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-5">
            <button type="button" onClick={submitForm} className="btn btn-primary btn-block">Đăng nhập</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <p className="mb-1">
        <a href="forgot-password.html">Quên mật khẩu</a>
      </p>
      <p className="mb-0">
        <NavLink to='/register' className="text-center">Đăng ký tài khoản</NavLink>
      </p>
    </div>
    {/* /.login-card-body */}
  </div>
</div>  
        </div>
        

    )
}
export default LoginPage;