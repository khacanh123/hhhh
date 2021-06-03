import React, { useEffect, useState } from 'react';
import LayoutComponent from '../layout/Layout';
import firebase from '../../firebase';
import { Modal } from 'antd';
const OrderList = () => {
    let total = 0;
    const [todoList, setTodoList] = useState([]);
    const [idOrder, setIdOrder] = useState('');
    const [status, setStatus] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = (id, stt) => {
      setIsModalVisible(true);
      setIdOrder(id);
      setStatus(stt);
    };
  
    const handleOk = () => {
        let data = {
            status: status
        }
      let update = firebase.database().ref('order/'+idOrder);
      update.update(data);
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    useEffect(() => {
        const todoRef = firebase.database().ref('order');
        todoRef.on('value', (snapshot) => {
          const todos = snapshot.val();
          const data = [];
          for (let id in todos) {
            data.push({ id, ...todos[id] });
          }
          setTodoList(data);
          
        });
      },[])
    return (
        <LayoutComponent>
            <div style={{backgroundColor:'#fff'}}>
            <h2>Danh sách đơn hàng</h2>
            <table class="table">
    <thead>
      <tr>
        <th>ID USER</th>
        <th>Trạng thái</th>
        <th>Chi tiết đơn hàng</th>
        <th>Thông tin nhận hàng</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {todoList ? todoList.map((key, index) => {
              let product = JSON.parse(key.product);
             return (
        <tr>
            <td>
            <p>{key.user} </p>
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
          <td>
              Họ và tên: {key.fullname}. SĐT: {key.telephone_user}. Địa chỉ: {key.address_user}
          </td>
          <td>
              <button className="btn btn-primary" onClick={()=>showModal(key.id, key.status)}>Cập nhật </button>
              <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
        )
          }) 
        : null}
    </tbody>
  </table>
  </div>
  <Modal title="Cập nhật trạng thái đơn hàng" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <label>Trạng thái</label>
          <input className="form-control" defaultValue={status} onChange={(e)=>setStatus(e.target.value)} />
      </Modal>
      
        </LayoutComponent>
    )
}
export default OrderList;