import React from 'react';
import AsideComponent from './aside';
import FooterComponent from './footer';
const LayoutComponent = (props) => {
    return(
        <>
            <div className="hold-transition sidebar-mini layout-fixed">
                <div className="wrapper">
                    {/* <HeaderComponent /> */}
                    <AsideComponent />
                    <div className="content-wrapper">
                    <section className="content">
                        <div className="container-fluid">
                            {props.children}
                        </div>
                    </section>
                </div>
                </div>
                <FooterComponent />
            </div>

        </>
    )
}
export default LayoutComponent;