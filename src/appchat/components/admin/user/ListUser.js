import React from 'react';
import { NavLink } from 'react-router-dom';
import LayoutComponent from '../layout/Layout';

const ListUser = () =>{
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
              <th>Mã nhân viên</th>
              <th>Họ tên</th>
              <th>Ngày sinh</th>
              <th>Vị trí công việc</th>
              <th>Địa chỉ</th>
              <th>Số điện thoại</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NV234</td>
              <td>Trịnh tuấn anh</td>
              <td>00000000</td>
              <td><span className="tag tag-success">Thư viện viên</span></td>
              <td><span className="tag tag-success">Lạng sơn</span></td>
              <td><span className="tag tag-success">05645564334</span></td>
              <td> 
                <NavLink to='/book/edit/5'><i className="fas fa-edit" /></NavLink>
                <NavLink to='#'><i className="fas fa-trash" style={{marginLeft:5}} /></NavLink>
          </td>
            </tr>
            
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
        </>
    )
}
export default ListUser;