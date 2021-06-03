import React, { useEffect, useState } from 'react';
import LayoutPage from '../layout/Layout';
import jwt_decode from 'jwt-decode';
import firebase from '../../firebase';
import { message } from 'antd';
const PaymentPage = () => {
    const [listCart, setListCart] = useState([]);
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');
    
    useEffect(() => {
        let cart = localStorage.getItem('myCart');
        cart = JSON.parse(cart);
        setListCart(cart);
    },[])
    let token = localStorage.getItem('token');
    const decode = jwt_decode(token);
    const submitCart = () => {
        let newOrder = firebase.database().ref('order');
        const d = new Date();
        let order = {
            order_id: d.getTime(),
            user: decode.id,
            product: JSON.stringify(listCart),
            fullname: name,
            telephone_user: telephone,
            address_user: address,
            status:'Chờ HinMart xác nhận đơn hàng'
        }
        newOrder.push(order);
        localStorage.removeItem('myCart');
        message.success('Đặt hàng thành công');
        window.location.href = '/notification'
        
    }
    let total = 0;
    return(
        <LayoutPage>
            <div style={{marginTop: 60}}>
                <h2>Trang đặt hàng</h2>
                <div className="callout callout-success">
                    <h5>Chi tiết đơn hàng</h5>
                    <table>
                    {listCart ? listCart.map((key, index) => {
              let money = key.price_product * key.quality;
              total = total + money;
             return (
        <tr>
          <td>
                <h6>{key.name_product}</h6></td>
          <td>
            <p>SL: {key.quality} </p>
          </td>
          <td><strong>Đơn giá: {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(key.price_product)}</strong></td>
          <td><strong>Tổng: {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(key.price_product * key.quality)}</strong></td>
        
        </tr>
        )
          }) 
        : null}
                    </table>
                <h4>Tổng tiền đơn hàng: {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(total)}</h4>
                </div>
                <div className="callout callout-success">
                    <h5>Thông tin vận chuyển</h5>
                    <p>Nhà vận chuyển: VNPOST</p>
                    <p>Phí vận chuyển: <b>30.000 đ</b></p>
                </div>
                <div className="callout callout-success">
                    <h5>Thanh toán</h5>
                    <p>Hình thức thanh toán: Thanh toán khi nhận hàng</p>
                    <p>Tổng thanh toán: tổng tiền đơn hàng + phí vận chuyển = <b>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(total + 30000)}</b></p>
                </div>
                <div className="callout callout-success">
                    <h5>Thông tin nhận hàng</h5>
                    <div className="form-group">
                        <label>Họ và tên</label>
                        <input type="text" placeholder="Nhập họ và tên người nhận hàng" onChange={(e)=>setName(e.target.value)} className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label>Số điện thoại</label>
                        <input type="text" placeholder="Nhập SĐT người nhận hàng" className="form-control" onChange={(e)=>setTelephone(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label>Địa chỉ nhận hàng</label>
                        <input type="text" placeholder="Nhập địa chỉ nhận hàng" className="form-control" onChange={(e)=>setAddress(e.target.value)} required/>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn-primary" onClick={submitCart}>Tiến hành đặt hàng</button>
            </div>
        </LayoutPage>
    )
}
export default PaymentPage;