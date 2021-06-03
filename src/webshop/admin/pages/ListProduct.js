import React, { useEffect, useState } from 'react';
import LayoutComponent from '../layout/Layout';
import firebase from '../../firebase';
import { NavLink } from 'react-router-dom';

const ListProduct = () => {
    const [todoList, setTodoList] = useState([]);
    useEffect(() => {
        const todoRef = firebase.database().ref('product');
        todoRef.on('value', (snapshot) => {
          const todos = snapshot.val();
          const todoList = [];
          for (let id in todos) {
            todoList.push({ id, ...todos[id] });
          }
          setTodoList(todoList);
          
        });
      }, []);
    return(
        <>
            <LayoutComponent>
                <div className="row" style={{backgroundColor:'#fff'}}>
                    <div className="col-sm-12">
                        <h2>Danh sách sản phẩm</h2>
                        <table className="table table-head-fixed text-nowrap">
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Giá sản phẩm</th>
              <th>Giá khuyến mãi</th>
              <th>Danh mục</th>
              <th>Trạng thái</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoList ? todoList.map((key, index)=>(
                <tr>
                    <td>{key.p_name}</td>
                    <td>{key.p_price}</td>
                    <td>{key.p_promotion}</td>
                    <td>{key.P_category}</td>
                    <td>{key.p_status === 'sale'? 'Đang giảm giá' : 'Hàng mới về'}</td>
                    <td>
                      <NavLink to={'/product/edit/'+key.id}><i className="fas fa-edit" /></NavLink>
                <NavLink to='#'><i className="fas fa-trash" style={{marginLeft:5}} /></NavLink>
                    </td>
                    
                </tr>
            )): null}
            
          </tbody>
        </table>
                    </div>
                </div>
            </LayoutComponent>
        </>
    )
}
export default ListProduct;