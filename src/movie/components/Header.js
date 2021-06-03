import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';

const { Header } = Layout;
const HeaderComponent = () => {
    const location = useLocation();
    return(
        <>
            <Header>
            <NavLink to='/home'>
                <div className="logo" />
            </NavLink>           
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={location.pathname}>
                <Menu.Item key="/home">
                    <NavLink to='/home'>Trang chu</NavLink>
                </Menu.Item>
                <Menu.Item key="/up-comming">
                    <NavLink to='/up-comming'>phim sap cong chieu</NavLink>
                </Menu.Item>
                <Menu.Item key="/search">
                    <NavLink to='/search'>Tim kiem</NavLink>
                </Menu.Item>
            </Menu>
            </Header>
        </>
    )
}
export default React.memo(HeaderComponent);