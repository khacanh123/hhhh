import { message, Skeleton, Modal, notification } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LayoutComponent from './layout/Layout';

const ListBook = () =>{
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (id) => {
    localStorage.setItem('id',id);
    setIsModalVisible(true);
  };
  
  const handleOk = async () => {
    let id = localStorage.getItem('id');
    let url = 'https://api-libhuha.herokuapp.com/books/'+id;
        try {
            const res = await axios.delete(
                url
            );
            getData();
            notification.open({
              message: 'Xóa dữ liệu thành công',
              onClick: () => {
                console.log('Notification Clicked!');
              },
            });
        } catch (ex) {
          
            //  errorr
            
        }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const getData = async () => {
          setLoading(true);
          const url = `https://api-libhuha.herokuapp.com/books/`;
          const response = await axios.get(url);
          await response.status === 200 ? setData(response.data) : setData([]);
          setLoading(false);
        }
  useEffect(()=>{
    
    
  getData();
  },[])
    
    return(
        <>
        <LayoutComponent>

        
<div className="row">
  <div className="col-12">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Tất cả sách trong thư viện</h3>
        <div className="card-tools">
          <div className="input-group input-group-sm" style={{width: '150px'}}>
            <input type="text" name="table_search" className="form-control float-right" placeholder="Nhập tên sách" />
            <div className="input-group-append">
              <button type="submit" className="btn btn-default"><i className="fas fa-search" /></button>
            </div>
          </div>
        </div>
      </div>
      {/* /.card-header */}
      <div className="card-body table-responsive p-0" style={{height: '300px'}}>
        <table className="table table-head-fixed text-nowrap">
          <thead>
            <tr>
              <th>Mã sách</th>
              <th>Tên sách</th>
              <th>Tác giả</th>
              <th>Năm xuất bản</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? 
            <tr>
              <Skeleton active />
            </tr>
            :(
              <>
              
               { 
               data ? data.map((key,index)=>(
                 <tr>
              <td>{key.bookCode}</td>
              <td>{key.bookName}</td>
              <td>{key.author}</td>
              <td><span className="tag tag-success">{key.yearPublic}</span></td>
              <td> 
                <NavLink to={'/book/edit/'+key._id}><i className="fas fa-edit" /></NavLink>
                <NavLink to='#' onClick={()=>showModal(key._id)}><i className="fas fa-trash" style={{marginLeft:5}} /></NavLink>
          </td>
            </tr>
               )): null}
              </>
            )}
            
            
          </tbody>
        </table>
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
    <div className="text-center">
    <button type="button" className="btn btn-primary float-right" >
                            <i className="fas fa-download"></i> Xuất file pdf
                  </button>
    </div>
  </div>
</div>

</LayoutComponent>
<Modal title="Xóa sách" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <h3>Bạn có chắc chắn xóa thông tin sách này không?</h3>
      </Modal>
        </>
    )
}
export default ListBook;