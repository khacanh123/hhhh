import React from 'react';
import PropTypes from 'prop-types';
const Result = (props) =>{
    return(
        <>
            <h2>{props.count}</h2>
        </>
    )
}
Result.propTypes = {
    count: PropTypes.number
}
Result.defaultProps = {
    count: 0
}
export default Result;