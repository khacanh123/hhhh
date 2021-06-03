import React from 'react';
import { NavLink } from 'react-router-dom';

const AsideComponent = () => {
    return(
        <>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <NavLink to="/admin" className="brand-link">
    <span className="brand-text font-weight-light">Quản lý thư viện</span>
  </NavLink>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="info">
        <NavLink to="#" className="d-block">Nguyễn Khắc Anh</NavLink>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item has-treeview ">
          <NavLink to="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Bạn đọc
              <i className="right fas fa-angle-left" />
            </p>
          </NavLink>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <NavLink to="/reader/add" className="nav-link ">
                <i className="far fa-circle nav-icon" />
                <p>Thêm mới</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/reader/list" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Danh sách</p>
              </NavLink>
            </li>
          </ul>
        </li>
        
        <li className="nav-item has-treeview ">
          <NavLink to="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Sách/Tài liệu
              <i className="right fas fa-angle-left" />
            </p>
          </NavLink>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <NavLink to="/book/add" className="nav-link ">
                <i className="far fa-circle nav-icon" />
                <p>Thêm mới</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/book/list" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Danh sách</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Danh mục</p>
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item has-treeview ">
          <NavLink to="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Nhân viên
              <i className="right fas fa-angle-left" />
            </p>
          </NavLink>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <NavLink to="/user/add" className="nav-link ">
                <i className="far fa-circle nav-icon" />
                <p>Thêm mới</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/user/list" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Danh sách</p>
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item has-treeview ">
          <NavLink to="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Mượn/trả sách
              <i className="right fas fa-angle-left" />
            </p>
          </NavLink>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <NavLink to="/book/borrow" className="nav-link ">
                <i className="far fa-circle nav-icon" />
                <p>Mượn sách</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/book/return" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Trả sách</p>
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink to="pages/calendar.html" className="nav-link">
            <i className="nav-icon far fa-calendar-alt" />
            <p>
                Báo cáo
            </p>
          </NavLink>
        </li>
        {/* <li className="nav-header">EXAMPLES</li>
        
        <li className="nav-item">
          <a to="pages/gallery.html" className="nav-link">
            <i className="nav-icon far fa-image" />
            <p>
              Gallery
            </p>
          </NavLink>
        </li> */}
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

        </>
    )
}
export default AsideComponent;