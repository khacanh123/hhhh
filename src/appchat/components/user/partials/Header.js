import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;
const HeaderComponent = () => {
    return(
        <Header style={{textAlign: 'center', marginBottom: 20}}>
            <div >
                <h2 style={{color:'white'}}>Trung tâm Thông tin - Thư viện</h2>
            </div>
            
        </Header>
    )
}
export default HeaderComponent;