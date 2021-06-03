
import React from 'react';
import { Button, Col, Row } from 'antd';
const FilterTodo = (props) => {
    return(
        <Row style={{marginTop: '10px', marginBottom: '10px'}}>
        <Col span={24}>
          <Button
            type="dashed"
            size="small"
            onClick={() => props.filter('all')}
          >All</Button>
          <Button 
            type="dashed"
            size="small"
            style={{marginLeft: '20px', marginRight: '20px'}}
            onClick={() => props.filter('unfinished')}
          >Unfinished</Button>
          <Button
            type="dashed"
            size="small"
            onClick={() => props.filter('finished')}
          >Finished</Button>
        </Col>
      </Row>
    )
}
export default FilterTodo;