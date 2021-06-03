import React  from 'react';
import PropTypes from 'prop-types';
const Input = (props) => {
    return(
        <>
            <input defaultValue={props.value} name={props.name} onChange={props.change} />
        </>
    )
}
Input.propTypes = {
    value: PropTypes.number,
    name: PropTypes.string,
    change: PropTypes.func
}
export default Input;