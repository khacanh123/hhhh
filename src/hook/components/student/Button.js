import React from 'react';
import { Button } from 'antd';

const ButtonComponent = (props) => {
    return(
        <Button type="primary" onClick={props.click}>Thêm sinh viên</Button>
    )
}
export default ButtonComponent;