import React, { useEffect } from 'react';
import LayoutComponent from '../layout/Layout';
import $ from 'jquery'
const ReturnBook = () => {
  useEffect(()=>{
    
  },[])
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
  <select className="select2" multiple="multiple" data-placeholder="Select a State" style={{width: '100%'}}>
    <option>Alabama</option>
    <option>Alaska</option>
    <option>California</option>
    <option>Delaware</option>
    <option>Tennessee</option>
    <option>Texas</option>
    <option>Washington</option>
  </select>
</div>
<div className="form-group">
  <label>Sách mượn</label>
  <select className="select2" multiple="multiple" data-placeholder="Select a State" style={{width: '100%'}}>
    <option>Alabama</option>
    <option>Alaska</option>
    <option>California</option>
    <option>Delaware</option>
    <option>Tennessee</option>
    <option>Texas</option>
    <option>Washington</option>
  </select>
</div>


        
      </div>
      {/* /.card-body */}
      <div className="card-footer">
        <button type="submit" className="btn btn-primary">Thêm mới</button>
      </div>
    </form>
  </div>
  </div>

            </div>
            </LayoutComponent>
        </>
    )
      
}
export default ReturnBook;