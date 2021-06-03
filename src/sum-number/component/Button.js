import React from 'react';
import PropTypes from 'prop-types';
const Button = (props) => {
    return(
        <>
            <button 
                type={props.type} 
                onClick={props.click}
                >{props.children}</button>
        </>
    )
}
Button.propTypes = {
    type: PropTypes.string,
    click: PropTypes.func,
    children: PropTypes.string
}
Button.defaultProps = {
    type: 'button'
}

export default Button;