import {  Layout, Row, Col, List, Skeleton, Progress } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
const {Content} = Layout;
const ListUserComponent = (props) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(()=>{
        setLoading(true);
        const getData = async () => {
            const url = `https://api-libhuha.herokuapp.com/progress`;
            const response = await axios.get(url);
            await response.status === 200 ? setData(response.data) : setData([]);
            setLoading(false);
          }
        getData();
    },[]);
    if(loading || data.length === 0){
        return(
            <Skeleton active />
        )
    }
    return(
        <Content>
            <h1 style={{textAlign: 'center'}}>Tiến trình làm project: Quản lý thư viện</h1>
                        <Row>
                            
                            <Col span={12} offset={6}>
                            <List
            bordered
            dataSource={data}
            renderItem={(item)=>(
                <div style={{display:'inline'}}>
                    <h5 style={{fontSize: 20}}>{item.position}.    {item.date} - {item.name}</h5>
                </div>
            )}
        />
                            </Col>
                        </Row>
                    </Content>
    )
}
export default ListUserComponent;