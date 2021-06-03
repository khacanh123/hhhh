import React from 'react';
import PropTypes from 'prop-types';
import { Input, Row, Col } from 'antd';

const { Search } = Input;

const AddTodo = (props) =>{
    return(
        <Row>
        <Col span={24}>
          <Search
            placeholder="todo name ..."
            enterButton="Add"
            size="large"
            onSearch={value => props.add(value)}
            onChange={props.change}
            value={props.value}
          />
        </Col>
      </Row>
    )
}
AddTodo.propTypes = {
  add: PropTypes.func,
}
export default AddTodo;