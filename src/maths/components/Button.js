import React from 'react';
import PropTypes from 'prop-types';
class ButtonComponent extends React.Component{
    render(){
        return(
            <>
                <button onClick={this.props.clickButton} type={this.props.type}>{this.props.children}</button>
            </>
        )
    }
}
export default ButtonComponent;
// kiem tra gia tri props
ButtonComponent.propTypes = {
    clickButton: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
}
// gan gia tri mac dinh - tu tao ra props
ButtonComponent.defaultProps ={
    type:"button"
}
