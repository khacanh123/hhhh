import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const FooterComponent  = () => {
  return (
    <Footer>
      <div className="my-footer">
        <p className="text-footer">Copyright &copy; Học Reactjs </p>
      </div>
    </Footer>
  )
}
export default FooterComponent;