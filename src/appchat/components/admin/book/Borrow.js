import React from 'react';
import LayoutComponent from '../layout/Layout';
import { Select } from 'antd';

const { Option } = Select;
const BorrowBook = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
    return(
        <>
        <LayoutComponent>

        
            <div className="row">
            <div className="col-md-6">
  {/* general form elements */}
  <div className="card card-primary">
    <div className="card-header">
      <h3 className="card-title">Cho bạn đọc mượn sách</h3>
    </div>
    {/* /.card-header */}
    {/* form start */}
    <form role="form">
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Mã phiếu mượn</label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="danh mục" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Ngày mượn</label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="danh mục" />
        </div>

        <div className="form-group">
          <label>Bạn đọc</label>
        <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Nhập tên bạn đọc"
      onChange={handleChange}
    >
      <>
      <Option value="097765">Trịnh tuấn Anh</Option>
      <Option value="097765">Lê thanh bình</Option>
      <Option value="097765">Nguyễn khắc Anh</Option>
      </>
    </Select>
  
</div>
<div className="form-group">
          <label>Sách mượn</label>
        <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Nhập tên sách "
      onChange={handleChange}
    >
      <>
      <Option value="097765">Toán cao cấp</Option>
      <Option value="097765">Lê thanh bình</Option>
      <Option value="097765">Nguyễn khắc Anh</Option>
      </>
    </Select>
  
</div>



        
      </div>
      {/* /.card-body */}
      <div className="card-footer">
        <button type="submit" className="btn btn-primary">Thêm mới</button>
      </div>
    </form>
  </div>
  </div>
  <div className="col-md-6">
  <div className="card">
      <div className="card-header">
        <h3 className="card-title">Bạn đọc mượn sách</h3>
        <div className="card-tools">
          <div className="input-group input-group-sm" style={{width: '150px'}}>
            <input type="text" name="table_search" className="form-control float-right" placeholder="Nhập mã phiếu mượn" />
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
              <th>Mã phiếu</th>
              <th>Bạn đọc</th>
              <th>Sách mượn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>183</td>
              <td>Trịnh Tuấn Anh</td>
              <td>Sách văn học</td>
            </tr>
            
          </tbody>
        </table>
      </div>
      {/* /.card-body */}
    </div>
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
export default BorrowBook;