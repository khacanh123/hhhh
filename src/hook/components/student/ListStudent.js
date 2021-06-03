import { Table, Space, Button } from 'antd';
import React from 'react';
const {Column} = Table;

const ListStudent = (props) => {
    console.log(props.data);
    return(
        <Table dataSource={props.data}>
            <Column 
                title="MSSV"
                dataIndex="mssv"
                key="mssv"
            />
            <Column 
                title="Họ và tên"
                dataIndex="tensv"
                key="tensv"
            />
            <Column 
                title="Ngày sinh"
                dataIndex="ngsinh"
                key="ngsinh"
            />
            <Column 
                title="Khoa/Trung tâm"
                dataIndex="khoaql"
                key="khoaql"
            />
            <Column
                title="Action"
                key="action"
                render={() => (
                    <Space size="middle">
                        <Button type="default">Sửa</Button>
                        <Button type="default">Xóa</Button>
                    </Space>
                )}
            />
        </Table>
    )
}
  
export default ListStudent;