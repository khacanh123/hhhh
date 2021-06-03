import React from 'react';
import LayoutComponent from '../layout/Layout';

const HomeAdmin = () => {
    return(
        <>
        <LayoutComponent>
            <div className="text-right">
                <h3>Xin chào: Admin</h3>
            </div>
            <hr/>
            <h2>Tổng quan</h2>
            <div className="row">
  <div className="col-lg-3 col-6">
    {/* small box */}
    <div className="small-box bg-info">
      <div className="inner">
        <h3>150</h3>
        <p>Đơn hàng mới</p>
      </div>
      <div className="icon">
        <i className="ion ion-bag" />
      </div>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small box */}
    <div className="small-box bg-success">
      <div className="inner">
        <h3>53<sup style={{fontSize: '20px'}}>%</sup></h3>
        <p>Doanh thu</p>
      </div>
      <div className="icon">
        <i className="ion ion-stats-bars" />
      </div>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small box */}
    <div className="small-box bg-warning">
      <div className="inner">
        <h3>44</h3>
        <p>Khách hàng</p>
      </div>
      <div className="icon">
        <i className="ion ion-person-add" />
      </div>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small box */}
    <div className="small-box bg-danger">
      <div className="inner">
        <h3>3500000</h3>
        <p>Lợi nhuận</p>
      </div>
      <div className="icon">
        <i className="ion ion-pie-graph" />
      </div>
    </div>
  </div>
  {/* ./col */}
</div>
        </LayoutComponent>
            

        </>
    )
}