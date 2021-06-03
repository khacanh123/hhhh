
import React from 'react';
import {Col, Row , Input} from 'antd';
const {Search} = Input;
const FilterStudent = (props) => {
    return(
        <Row style={{marginTop: '10px', marginBottom: '10px'}}>
        <Col span={24}>
        <Search
      placeholder="Nhap ma sv"
      allowClear
      enterButton="Search"
      size="large"
    //   onSearch={onSearch}
    />
        </Col>
      </Row>
    )
}
export default FilterStudent;