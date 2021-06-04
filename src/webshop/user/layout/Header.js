import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { NavLink } from 'react-router-dom';
const HeaderComponent = () => {
  const [number, setNumber] = useState(0);
  const [listCart, setListCart] = useState([]);
  let username = {};
  let token = localStorage.getItem('token')
  if(token === null || token === undefined){
    username = {};
  }else{
    const decode = jwt_decode(token);
    // console.log(decode);
    username = decode;
  }
  useEffect(() => {
   
  if(token === null || token === undefined){
    setListCart([]);
  }else{
    const decode = jwt_decode(token);
    // console.log(decode);
    username = decode;
     let MyCart = localStorage.getItem('myCart');
    if(MyCart === null || MyCart === undefined){
      setNumber(0);
    }else{
      let total = 0;
      MyCart = JSON.parse(MyCart);
      MyCart.map((key, index) => {
          total ++;
      })
      setNumber(total);
      setListCart(MyCart);
  }
    }
  },[])
  
  const LogOut = () => {
    localStorage.removeItem('token');
    return window.location.href = '/';
  }
    return(
        <>
        <div style={{ position:'fixed', width:'100%', top:0, zIndex: 10000}}>
 <nav className="main-header navbar navbar-expand navbar-white navbar-light" style={{marginLeft:0}}>
  {/* Left navbar links */}
  <ul className="navbar-nav">
  <li className="nav-item">
  <NavLink className="nav-link" data-widget="pushmenu" to='/' style={{fontWeight:'bold'}} role="button">HinMart</NavLink>
</li>
    <li className="nav-item d-none d-sm-inline-block">
      <NavLink to='/order-infor' className="nav-link"><i className="fa fa-bell" /> Thông tin đơn hàng</NavLink>
    </li>
    
  </ul>
  {/* SEARCH FORM */}
  
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
      <form className="form-inline ml-3">
    <div className="input-group input-group-sm">
      <input className="form-control form-control-navbar" type="search" placeholder="Search" style={{width:200}} aria-label="Search" />
      <div className="input-group-append">
        <button className="btn btn-navbar" type="submit">
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
  </form>
    {/* Messages Dropdown Menu */}
    <li className="nav-item dropdown">
      <a className="nav-link" data-toggle="dropdown" href="#">
        <i className="fa fa-shopping-cart" />
        <span className="badge badge-danger navbar-badge">{number}</span>
      </a>
      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        {number  === 0 ? 
        <h3>Giỏ hàng trống</h3>:
        <>
        {listCart.map((key,index)=> (
          <a href="#" className="dropdown-item">
          {/* Message Start */}
          <div className="media">
            <div className="media-body">
              <p className="text-sm">{key.name_product} SL: {key.quality}</p>
            </div>
          </div>
          {/* Message End */}
        </a>
        ))}
        <div className="dropdown-divider" />
        
        <NavLink to='/cart' className="dropdown-item dropdown-footer">Xem trong giỏ hàng</NavLink>
        </>  
      }
        
      </div>
    </li>
   {token === null ? 
    <>
    <li className="nav-item d-none d-sm-inline-block">
      <NavLink to='/register' className="nav-link">Đăng ký</NavLink>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <NavLink to='/login' className="nav-link">Đăng nhập</NavLink>
    </li>
    </> :
    <>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="#" className="nav-link">xin chào, {username.data}</a>
    </li>
    {username.level === 2 ?
    <li className="nav-item d-none d-sm-inline-block">
    <NavLink to='/admin' className="nav-link">Trang quản trị  </NavLink>
  </li>: null
    }
    <li className="nav-item d-none d-sm-inline-block">
      <a href="#" onClick={LogOut} className="nav-link">Đăng xuất</a>
    </li>
    </>
  }

  </ul>
</nav>

        </div>
       
        </>
    )
}
export default HeaderComponent;