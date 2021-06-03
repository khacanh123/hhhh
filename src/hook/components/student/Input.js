import { Input } from 'antd';
import React from 'react';

const InputComponent = (props) => {
    return(
        <Input placeholder={props.placeholder} name={props.name} onChange={props.change} defaultValue={props.value} style={{marginBottom:'5px'}}/>
    )
}

export default InputComponent;