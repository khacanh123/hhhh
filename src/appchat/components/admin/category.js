import { message, Modal, notification, Skeleton } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LayoutComponent from './layout/Layout';

const CategoryPage = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryImg, setCategoryImg] = useState('');
  const [listCate, setListCate] = useState([]);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [idCate, setIdCate] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (id) => {
    setIdCate(id)
    setIsModalVisible(true);
  };
  
  const handleOk = async () => {
    let url = 'https://api-libhuha.herokuapp.com/categories/'+idCate;
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
  const handleChange = (e) => {
    if(e.target.name === 'cate'){
      setCategoryName(e.target.value)
    }else{
      setCategoryImg(e.target.value);
    }
  }
  useEffect(()=>{
    getData();
  },[])
  const getData = async () => {
    setLoading(true);
    const url = `https://api-libhuha.herokuapp.com/categories/`;
    const response = await axios.get(url);
    await response.status === 200 ? setListCate(response.data) : setListCate([]);
    setLoading(false);
  }
  const submitData = async () => {
    
    let data = {
      name: categoryName,
      image: categoryImg
    }
    let url = 'https://api-libhuha.herokuapp.com/categories';
        try {
            const res = await axios.post(
                url,
                data
            );
            message.success('Thêm dữ liệu thành công');
            getData();
        } catch (ex) {
            //  errorr
            message.error('có lỗi xảy ra, thêm dữ liệu thất bại');
        }
  }
  const saveData = async () => {
    let data = {
      name: categoryName,
      image: categoryImg
    }
    let url = 'https://api-libhuha.herokuapp.com/categories/'+idCate;
        try {
            const res = await axios.put(
                url,
                data
            );
            message.success('Sửa dữ liệu thành công');
            getData();
        } catch (ex) {
            //  errorr
            message.error('có lỗi xảy ra, sửa dữ liệu thất bại');
        }
  }
  const editCategory = (cate, img, id) => {
    setEdit(true);
    setCategoryName(cate);
    setCategoryImg(img);
    setIdCate(id);
  }
    return(
        <>
        <LayoutComponent>

        
            <div className="row">
            <div className="col-md-6">
  {/* general form elements */}
  <div className="card card-primary">
    <div className="card-header">
      {edit ? <h3 className="card-title">Sửa danh mục</h3>: <h3 className="card-title">Thêm danh mục</h3> }
      
    </div>
    {/* /.card-header */}
    {/* form start */}
    <form role="form">
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Tên danh mục</label>
          <input type="text" className="form-control" id="exampleInputEmail1" name="cate" onChange={handleChange} defaultValue={categoryName} placeholder="danh mục" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Image/icon</label>
          <input type="text" className="form-control" id="exampleInputPassword1" name="image" onChange={handleChange} defaultValue={categoryImg} placeholder="image" />
        </div>
        
      </div>
      {/* /.card-body */}
      <div className="card-footer">
        {edit ? <button type="button" className="btn btn-primary" onClick={saveData}>Lưu lại</button> : <button type="button" className="btn btn-primary" onClick={submitData}>Thêm mới</button>}
      </div>
    </form>
  </div>
  </div>
  <div className="col-md-6">
  <div className="card">
      <div className="card-header">
        <h3 className="card-title">Danh mục sách</h3>
        <div className="card-tools">
          <div className="input-group input-group-sm" style={{width: '150px'}}>
            <input type="text" name="table_search" className="form-control float-right" placeholder="Nhập tên danh mục" />
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
              <th>Tên danh mục</th>
              <th>Image/icon</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? <Skeleton active />: (
              listCate ? listCate.map((key,index) =>(
                <tr id={index}>
              <td>{key.name}</td>
              <td>
                  <img src={key.image} style={{width:80, height:80}}  />
              </td>
              <td> 
                <NavLink to='#' onClick={()=>editCategory(key.name, key.image, key._id)}><i className="fas fa-edit" /></NavLink>
                <NavLink to='#' onClick={()=>showModal(key._id)}><i className="fas fa-trash" style={{marginLeft:5}} /></NavLink>
          </td>
            </tr>
              )) : null
            )}
            
          </tbody>
        </table>
      </div>
      {/* /.card-body */}
    </div>
  </div>

            </div>
            </LayoutComponent>
            <Modal title="Xóa sách" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <h3>Bạn có chắc chắn xóa danh mục này không?</h3>
      </Modal>
        </>
    )
}
export default CategoryPage;