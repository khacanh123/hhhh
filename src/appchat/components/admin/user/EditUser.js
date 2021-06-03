import React from 'react';
import LayoutComponent from '../layout/Layout';

const AddUser = () => {
    return(
        <>
        <LayoutComponent>
        <div>
            <h2>Sửa thông tin nhân viên</h2>
  <div className="row">
    <div className="col-md-6">
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">Thông tin nhân viên</h3>
          <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
              <i className="fas fa-minus" /></button>
          </div>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="inputName">Mã nhân viên</label>
            <input type="text" id="inputName" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="inputClientCompany">Họ tên</label>
            <input type="text" id="inputClientCompany" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="inputProjectLeader">Ngày sinh</label>
            <input type="text" id="inputProjectLeader" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="inputProjectLeader">Vị trí công việc</label>
            <input type="text" id="inputProjectLeader" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="inputProjectLeader">Địa chỉ</label>
            <input type="text" id="inputProjectLeader" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="inputProjectLeader">Số điện thoại</label>
            <input type="text" id="inputProjectLeader" className="form-control" />
          </div>
        </div>
        {/* /.card-body */}
      </div>
      {/* /.card */}
    </div>
    <div className="col-md-6">
      <div className="card card-secondary">
        <div className="card-header">
          <h3 className="card-title">Tài khoản đăng nhập</h3>
          <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
              <i className="fas fa-minus" /></button>
          </div>
        </div>
        <div className="card-body">
        <div className="form-group">
            <label htmlFor="inputStatus">Level</label>
            <select className="form-control custom-select">
              <option selected disabled>Chọn </option>
              <option>Quản trị viên</option>
              <option>Nhân viên</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="inputSpentBudget">Tên đăng nhập</label>
            <input type="number" id="inputSpentBudget" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="inputEstimatedDuration">Mật khẩu</label>
            <input type="number" id="inputEstimatedDuration" className="form-control" />
          </div>
        </div>
        {/* /.card-body */}
      </div>
      {/* /.card */}
    </div>
  </div>
  <div className="row">
    <div className="col-12">
      <a href="#" className="btn btn-secondary">Hủy bỏ</a>
      <input type="submit" defaultValue="Thêm nhân viên" className="btn btn-success float-right" />
    </div>
  </div>
</div>

            </LayoutComponent>
        </>
    )
}
export default AddUser;