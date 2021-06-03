import React from 'react';

const InputComponent = (props) =>{
    return(
        <input name={props.name} type={props.type} onChange={props.change} defaultValue={props.value} />
    )
}
export default React.memo(InputComponent);