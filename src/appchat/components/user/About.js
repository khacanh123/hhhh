import React from 'react';
import LayoutComponent from './partials/Layout';

const AboutPage = () => {
    return(
        <LayoutComponent>
             <main>
  <header className="row tm-welcome-section">
    <h2 className="col-12 text-center tm-section-title">Thông tin về thư viện</h2>
  </header>
  <div className="tm-container-inner tm-persons">
    <div className="row">
      <article className="col-lg-6">
        <figure className="tm-person">
          <img src="img/about-01.jpg" alt="Image" className="img-fluid tm-person-img" />
          <figcaption className="tm-person-description">
            <h4 className="tm-person-name">Jennifer Soft</h4>
            <p className="tm-person-title">Founder and CEO</p>
            <p className="tm-person-about">Vivamus cursus leo nec sem feugiat sagittis.
              Duis ut feugiat odio, sit amet accumsan
              odio.</p>
            <div>
              <a href="https://fb.com" className="tm-social-link"><i className="fab fa-facebook tm-social-icon" /></a>
              <a href="https://twitter.com" className="tm-social-link"><i className="fab fa-twitter tm-social-icon" /></a>
              <a href="https://instagram.com" className="tm-social-link"><i className="fab fa-instagram tm-social-icon" /></a>
            </div>
          </figcaption>
        </figure>
      </article>
      <article className="col-lg-6">
        <figure className="tm-person">
          <img src="img/about-02.jpg" alt="Image" className="img-fluid tm-person-img" />
          <figcaption className="tm-person-description">
            <h4 className="tm-person-name">Daisy Walker</h4>
            <p className="tm-person-title">Executive Chef</p>
            <p className="tm-person-about">Praesent non vulputate elit. Orci varius
              natoque et magnis dis parturient, nascetur ridiculus mus.</p>
            <div>
              <a href="https://fb.com" className="tm-social-link"><i className="fab fa-facebook tm-social-icon" /></a>
              <a href="https://twitter.com" className="tm-social-link"><i className="fab fa-twitter tm-social-icon" /></a>
            </div>
          </figcaption>
        </figure>
      </article>
      <article className="col-lg-6">
        <figure className="tm-person">
          <img src="img/about-03.jpg" alt="Image" className="img-fluid tm-person-img" />
          <figcaption className="tm-person-description">
            <h4 className="tm-person-name">Florence Nelson</h4>
            <p className="tm-person-title">Kitchen Manager</p>
            <p className="tm-person-about">Aenean sapien sem, ultricies sed vulputate
              et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.</p>
            <div>
              <a href="https://fb.com" className="tm-social-link"><i className="fab fa-facebook tm-social-icon" /></a>
              <a href="https://instagram.com" className="tm-social-link"><i className="fab fa-instagram tm-social-icon" /></a>
            </div>
          </figcaption>
        </figure>
      </article>
      <article className="col-lg-6">
        <figure className="tm-person">
          <img src="img/about-04.jpg" alt="Image" className="img-fluid tm-person-img" />
          <figcaption className="tm-person-description">
            <h4 className="tm-person-name">Valentina Martin</h4>
            <p className="tm-person-title">Culinary Director</p>
            <p className="tm-person-about">Praesent non vulputate elit. Orci varius
              natoque penatibus et magnis montes, nascetur ridiculus mus.</p>
            <div>
              <a href="https://fb.com" className="tm-social-link"><i className="fab fa-facebook tm-social-icon" /></a>
              <a href="https://twitter.com" className="tm-social-link"><i className="fab fa-twitter tm-social-icon" /></a>
              <a href="https://instagram.com" className="tm-social-link"><i className="fab fa-instagram tm-social-icon" /></a>
              <a href="https://youtube.com" className="tm-social-link"><i className="fab fa-youtube tm-social-icon" /></a>
            </div>
          </figcaption>
        </figure>
      </article>
    </div>
  </div>
  <div className="tm-container-inner tm-history">
    <div className="row">
      <div className="col-12">
        <div className="tm-history-inner">
          <img src="img/about-06.jpg" alt="Image" className="img-fluid tm-history-img" />
          <div className="tm-history-text"> 
            <h4 className="tm-history-title"></h4>
            <p className="tm-mb-p">Trung tâm Thông tin Thư viện là đơn vị chức năng thuộc Trường Đại học Nội vụ Hà Nội có chức năng thu thập, bảo quản, quản lý, cung cấp, phổ biến thông tin, tư liệu khoa học và hỗ trợ khai thác nguồn thông tin cho công chức, viên chức, người lao động và người học phục vụ công tác giảng dạy, học tập và nghiên cứu khoa học của Trường.</p>
          </div>
        </div>	
      </div>
    </div>
  </div>
</main>
  
        </LayoutComponent>
     
    )
}
export default AboutPage;