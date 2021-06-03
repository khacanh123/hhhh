import React from 'react';
import { Button, Input, Layout, Menu, Popover } from 'antd';
import {FormOutlined, FundOutlined, HomeOutlined} from '@ant-design/icons';
import './layout.css';
const { Header } = Layout;

const HeaderComponent = () => {
    return(
        <Header className="header" style={{position:'fixed', zIndex:10000, width:'100%'}}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <div style={{float:'left', width: '30%', display:'inline'}}>
                    <img src="https://s3-symbol-logo.tradingview.com/facebook--600.png" style={{width: 30, height: 30, borderRadius: 30}} />
                    <Input style={{width:'55%', height: 30, marginLeft:5}}/>
                </div>
                <div style={{float:'left', width: '40%', display:'inline'}}>
                    <Popover placement="bottom" content="Trang chủ"   >
                        <HomeOutlined size={30} className="header-layout"/>
                    </Popover>
                    <Popover placement="bottom" content="Tiến độ dự án"   >
                        <FundOutlined size={30} className="header-layout"/>
                    </Popover>
                    <Popover placement="bottom" content="Đánh giá"   >
                        <FormOutlined size={30} className="header-layout"/>
                    </Popover>
                </div>
            </Menu>
            
        </Header>
    )
}
export default HeaderComponent;