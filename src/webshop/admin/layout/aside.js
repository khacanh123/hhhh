import React from 'react';
import { NavLink } from 'react-router-dom';

const AsideComponent = () => {
    return(
        <>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <NavLink to="/admin" className="brand-link">
    <span className="brand-text font-weight-light">HinMart</span>
  </NavLink>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
         <li className="nav-item">
          <NavLink to="/admin" className="nav-link">
            <i className="nav-icon far fa-home" />
            <p>
              Trang chủ
            </p>
          </NavLink>
        </li>
        <li className="nav-item has-treeview ">
          <NavLink to="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Sản phẩm
              <i className="right fas fa-angle-left" />
            </p>
          </NavLink>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <NavLink to="/add-product" className="nav-link ">
                <i className="far fa-circle nav-icon" />
                <p>Thêm mới</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/list-product" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Danh sách</p>
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink to="/order-list" className="nav-link">
            <i className="nav-icon far fa-calendar-alt" />
            <p>
                Đơn hàng 
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