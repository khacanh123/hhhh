import React from 'react'
import LayoutComponent from './components/todo/Layout'
import ListUsers from './components/todo/Content';
const User = () =>{
    return(
        <LayoutComponent>
            <ListUsers />
        </LayoutComponent>
    )
}
export default User;