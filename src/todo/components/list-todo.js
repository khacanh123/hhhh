import { Checkbox, Col, List, Row, Typography } from 'antd';
import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
const {Text} = Typography;

const ListTodo = (props) => {
 
    return(
        <Row style={{padding: '20px', border: '1px solid #ccc', backgroundColor: 'white'}}>
            <Col span={24}>
                <List
                    dataSource={props.listTodo}
                    renderItem={item => (
                        <>
                        {item.show && (
                            <List.Item>
                            <List.Item.Meta
                                avatar={<Checkbox
                                    onClick={() => props.finish(item.id)}
                                ></Checkbox>}
                                title={item.done ? <Text delete>{item.name}</Text>: <Text>{item.name}</Text>}
                            />
                            <div>
                                <DeleteOutlined 
                                    onClick={()=> props.delete(item.id)}
                                />
                            </div>
                        </List.Item>
                        )}
                        </>
                    )}
                />
            </Col>
        </Row>
    )
}
export default ListTodo;