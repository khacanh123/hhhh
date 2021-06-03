
import React from 'react';
import FooterComponent from './Footer';
import HeaderComponent from './Header';
const LayoutPage = (props) => {
    return (
        <>
           <HeaderComponent /> 
           <div className="container-fluid" style={{backgroundColor:'#f7f5f0'}}>
               <div className="container">
                     {props.children}
               </div>
              
           </div>
           <FooterComponent />
        

        </>
    )
}
export default LayoutPage;