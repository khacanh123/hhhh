import React from 'react';

const ResultComponent = (props) =>{
    return(
        <h1>{props.result}</h1>
    )
}
export default React.memo(ResultComponent);