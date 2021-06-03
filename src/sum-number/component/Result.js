import React from 'react';
import PropTypes from 'prop-types';

const Result = (props) => {
    return(
        <>
            <h2>{props.total}</h2>
        </>
    )
}
Result.propTypes = {
    total: PropTypes.number
}
export default Result;