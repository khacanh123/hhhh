import { Spin } from 'antd';
import React from 'react';
import './loading.css';
const LoadingComponent = () => {
    return(
        <div className="loading">
            <Spin />
        </div>
    )
}
export default React.memo(LoadingComponent);