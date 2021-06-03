import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import LayoutPage from '../layout/Layout';
import firebase from '../../firebase';
const NotiOrder = () => {
    let total = 0;
    const [todoList, setTodoList] = useState([]);
    useEffect(() => {
        let token = localStorage.getItem('token');
        const decode = jwtDecode(token);
        const todoRef = firebase.database().ref('order').orderByChild('user').equalTo(decode.id);
        todoRef.on('value', (snapshot) => {
          const todos = snapshot.val();
          const data = [];
          for (let id in todos) {
            data.push({ id, ...todos[id] });
          }
          setTodoList(data);
          
        });
      },[])
    return(
        <LayoutPage>
            <div style={{marginTop:60}}>
            <div className="row">
  <div className="col-12">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Đơn hàng của tôi</h3>
        <div className="card-tools">
          
        </div>
      </div>
      {/* /.card-header */}
      <div className="card-body table-responsive p-0" style={{height: '300px'}}>
        <table className="table table-head-fixed text-nowrap">
          <thead>
            <tr className="text-center">
              <th>Mã đơn hàng</th>
              <th>Trạng thái</th>
              <th>Chi tiết đơn hàng</th>
              <th>Ghi chú</th>
            </tr>
          </thead>
          <tbody>

          {todoList ? todoList.map((key, index) => {
              let product = JSON.parse(key.product);
             return (
        <tr>
            <td>
            <p>{key.order_id} </p>
          </td>
          <td>
            <p>{key.status} </p>
          </td>
          <td>
              {product.map((value, i) => {
                  let money = value.price_product * value.quality;
                  total = total + money;
                  return(
                  <>
                  <p>{value.name_product} - {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(value.price_product )} SL: {value.quality} Tổng tiền: {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(value.price_product * value.quality)}</p>
                  </>
              )})
            }
            <p>Tổng tiền đơn hàng (bao gồm cả phí vận chuyển): <b>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(total + 30000)}</b></p>
          </td>
        </tr>
        )
          }) 
        : null}
          </tbody>
        </table>
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </div>
</div>


            </div>
        </LayoutPage>
    )
}
export default NotiOrder;