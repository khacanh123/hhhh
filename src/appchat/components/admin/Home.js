import React from 'react';
import LayoutComponent from './layout/Layout';

const HomePage = () => {
    return (
        <LayoutComponent>
            {/* Small boxes (Stat box) */}
            <div className="row">
                <div className="col-lg-6 col-6">
                    {/* TO DO List */}
<div className="card">
  <div className="card-header">
    <h3 className="card-title">
      <i className="ion ion-clipboard mr-1" />
      Sách mới
    </h3>
  </div>
  {/* /.card-header */}
  <div className="card-body">
    <ul className="todo-list" data-widget="todo-list">
      <li>
        {/* drag handle */}
        <span className="handle">
          <i className="fas fa-ellipsis-v" />
          <i className="fas fa-ellipsis-v" />
        </span>
        {/* checkbox */}
        <div className="icheck-primary d-inline ml-2">
          <input type="checkbox" defaultValue name="todo1" id="todoCheck1" />
          <label htmlFor="todoCheck1" />
        </div>
        {/* todo text */}
        <span className="text">Tôi thấy hoa vàng trên cỏ xanh</span>
        {/* Emphasis label */}
        {/* <small className="badge badge-danger"><i className="far fa-clock" /> 2 mins</small> */}
        {/* General tools such as edit or delete*/}
        <div className="tools">
          <i className="fas fa-edit" />
          <i className="fas fa-trash-o" />
        </div>
      </li>
      
    </ul>
  </div>
  {/* /.card-body */}
  <div className="card-footer clearfix">
    <button type="button" className="btn btn-info float-right"><i className="fas fa-plus" /> Thêm sách</button>
  </div>
</div>

                </div>
            </div>
            {/* /.row */}
             <h5 className="mb-2">Thống kê</h5>
            <div className="row">
           
  <div className="col-md-3 col-sm-6 col-12">
    <div className="info-box">
      <span className="info-box-icon bg-info"><i className="far fa-envelope" /></span>
      <div className="info-box-content">
        <span className="info-box-text">Bạn đọc</span>
        <span className="info-box-number">310</span>
      </div>
      {/* /.info-box-content */}
    </div>
    {/* /.info-box */}
  </div>
  {/* /.col */}
  <div className="col-md-3 col-sm-6 col-12">
    <div className="info-box">
      <span className="info-box-icon bg-success"><i className="far fa-flag" /></span>
      <div className="info-box-content">
        <span className="info-box-text">Sách</span>
        <span className="info-box-number">410</span>
      </div>
      {/* /.info-box-content */}
    </div>
    {/* /.info-box */}
  </div>
  {/* /.col */}
  <div className="col-md-3 col-sm-6 col-12">
    <div className="info-box">
      <span className="info-box-icon bg-warning"><i className="far fa-copy" /></span>
      <div className="info-box-content">
        <span className="info-box-text">Lượt mượn sách</span>
        <span className="info-box-number">648</span>
      </div>
      {/* /.info-box-content */}
    </div>
    {/* /.info-box */}
  </div>
  {/* /.col */}
  <div className="col-md-3 col-sm-6 col-12">
    <div className="info-box">
      <span className="info-box-icon bg-danger"><i className="far fa-star" /></span>
      <div className="info-box-content">
        <span className="info-box-text">Sách chưa trả</span>
        <span className="info-box-number">139</span>
      </div>
      {/* /.info-box-content */}
    </div>
    {/* /.info-box */}
  </div>
  {/* /.col */}
</div>

        </LayoutComponent>
    )
}
export default HomePage;