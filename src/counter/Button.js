import React from 'react';

const Button = (props) => {
    // props dai dien cho bien dai dien cho cac thuoc tinh truyen vao cac component
    // trong nay khong ton tai phuong thuc render
    return(
        <>
            <button 
                onClick={props.click}
                type={props.type}
            >{props.children}</button>
        </>
    )
}
export default Button;