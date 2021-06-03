import React from 'react';
import {Input, Button, Row, Col, Carousel, Space, Typography} from 'antd';
import LayoutComponent from './partials/Layout';
const {Search} = Input;
const {Title, Paragraph} = Typography;
const HomePage = () => {
    return(
        <LayoutComponent>
         <Row>
                <Col span={24}>
                <Carousel autoplay>
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/libhuha-73130.appspot.com/o/images%2F4d63fee3-9a61-419e-8ddb-3e9c405627d6.jpg?alt=media&token=155c311b-24c0-4df2-88d6-01a6a2305751" style={{width:'100%', height:'400px'}} />
                    </div>
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/libhuha-73130.appspot.com/o/images%2F4e56562b-5bfd-4420-a393-e1e27fe4f798.jpg?alt=media&token=9aa896e1-b809-4763-be9c-46a4a9bbfa84" style={{width:'100%', height:'400px'}} />
                    </div>
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/libhuha-73130.appspot.com/o/images%2Fccc7c223-31d2-41b0-b0b4-a1cc80611d04.jpg?alt=media&token=a4efafb6-5e13-446e-ad83-ffdcc1af40c6" style={{width:'100%', height:'400px'}} />
                    </div>
                </Carousel>
                </Col>
            </Row>
  <header className="row tm-welcome-section">
    <h2 className="col-12 text-center tm-section-title">Tìm kiếm sách trong thư viện</h2>
    <Search
      placeholder="Nhập tên sách cần tìm ..."
      allowClear
      enterButton="Tìm kiếm"
      size="large"
      // onSearch={onSearch
    />
  </header>
  <div style={{textAlign:'center', marginBottom:50}}>
    <h3 style={{fontSize:20}}>Danh mục Sách/Tài liệu</h3>
    <Space align="center">
        <Button type="default">Sách giáo trình</Button>
      <Button type="default">Sách văn học</Button>
      <Button type="default">Sách lập trình</Button>
      <Button type="default">Sách luật</Button>
    </Space>
    
  </div>
  <div className="tm-section tm-container-inner">
  <div className="row">
    <div className="col-md-6">
      <figure className="tm-description-figure">
        <img src="https://firebasestorage.googleapis.com/v0/b/libhuha-73130.appspot.com/o/images%2F4d63fee3-9a61-419e-8ddb-3e9c405627d6.jpg?alt=media&token=155c311b-24c0-4df2-88d6-01a6a2305751" alt="Image" style={{width: '100%'}} className="img-fluid" />
      </figure>
    </div>
    <div className="col-md-6">
      <div className="tm-description-box"> 
        <h4 className="tm-gallery-title">Giới thiệu</h4>
        <p className="tm-mb-45" style={{fontSize:18}}>Trung tâm Thông tin Thư viện là đơn vị chức năng thuộc Trường Đại học Nội vụ Hà Nội có chức năng thu thập, bảo quản, quản lý, cung cấp, phổ biến thông tin, tư liệu khoa học và hỗ trợ khai thác nguồn thông tin cho công chức, viên chức, người lao động và người học phục vụ công tác giảng dạy, học tập và nghiên cứu khoa học của Trường.</p>
      </div>
    </div>
  </div>
</div>

  <div className="tm-container-inner-2 tm-map-section">
  <div className="row">
    <div className="col-12">
    <h2 className="col-12 text-center tm-section-title">Thông tin liên hệ</h2>
    <p style={{fontSize:20}}>Địa chỉ: Toà nhà H, Trường Đại học Nội vụ Hà Nội, số 36 đường Xuân La, phường Xuân La, quận Tây Hồ, Hà Nội.</p>
    <p style={{fontSize:20}}>Điện thoại: (024).37532864, máy lẻ 111</p>
    <p style={{fontSize:20}}>Email: thuviennoivu@gmail.com</p>
      <div className="tm-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.128503410564!2d105.80263141482102!3d21.0675291918297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aadd7aba82b9%3A0xb25d2d1d18bec069!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBO4buZaSBW4bulIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1621677969114!5m2!1svi!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" />

      </div>
    </div>
  </div>
</div>

        </LayoutComponent>
    )
}
export default HomePage;