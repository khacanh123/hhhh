import { Card, Carousel, Col, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import LayoutPage from '../layout/Layout';
import firebase from '../../firebase';
import ProductComponent from '../layout/product';
import { NavLink, useHistory } from 'react-router-dom';
const { Text } = Typography;

const HomePage = () => {
    const contentStyle = {
        height: '160px',
        width:'100%'
      };
      const [todoList, setTodoList] = useState([]);
    useEffect(() => {
        const todoRef = firebase.database().ref('product').orderByChild('p_status').equalTo('sale');
        todoRef.on('value', (snapshot) => {
          const todos = snapshot.val();
          const data = [];
          for (let id in todos) {
            data.push({ id, ...todos[id] });
          }
          setTodoList(data);
          
        });
      },[])
      const history = useHistory();
      const loadingDefault  = (id, cate) => {
       return history.push('/product/detail/'+id+'/'+cate)
    }
    return (
        <>
            <LayoutPage>
                <div style={{marginTop:60}}>
                    <div className="row">
                        <div className="col-sm-8">
                        <Carousel autoplay={true}>
    <div>
        <img src="https://cf.shopee.vn/file/48ffcebef47a53e15d61e83a474205f2_xxhdpi" style={contentStyle}/>
      </div>
    <div>
        <img src="https://cf.shopee.vn/file/2c7baf8be98f7115cfdd4d1add290007_xxhdpi" style={contentStyle}/>
      </div>
    <div>
        <img src="https://cf.shopee.vn/file/ea5a34746cb0677b353b026de0dddeb2_xxhdpi" style={contentStyle}/>
      </div>
    </Carousel>
                        </div>
                        <div className="col-sm-4" style={{display: 'block'}}>
                            <img src="https://cf.shopee.vn/file/2f5d89f0478d1cb9a422e76a3b373ee2_xhdpi" style={{width: '100%', height:'36%', marginBottom:5}} />
                            <img src="https://cf.shopee.vn/file/188303a73a0f7936e289f8ef2693cef7_xhdpi" style={{width: '100%', height:'36%'}}  />
                        </div>
                    </div>
                    {/* category */}
                    <div style={{backgroundColor:"#fff", marginBottom:20}}>
                      <p style={{marginLeft: 5, fontSize:20}}>DANH MỤC</p>
                      <div className="row">
                        <div className="col-sm-2">
        <NavLink to={'/category/'+1}>
                          
                        <Card
                            hoverable
                            style={{ width: '100%' }}
                        >
                          <img src="https://martina.vn/wp-content/uploads/2020/04/web3-12.png" style={{width:'98%', height:'130px'}} />
                          <p style={{textAlign:'center',fontSize:20-5}}>Thời trang</p>
                        </Card>
                        </NavLink>
                        </div>
                        <div className="col-sm-2">
        <NavLink to={'/category/'+2}>
                        <Card
                            hoverable
                            style={{ width: '100%' }}
                        >
                          <img src="https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg" style={{width:'98%',height:'130px'}} />
                          <p style={{textAlign:'center',fontSize:20-5}}>Điện thoại di động</p>
                        </Card>
                        </NavLink>
                        </div>
                        <div className="col-sm-2">
        <NavLink to={'/category/'+3}>
                        <Card
                            hoverable
                            style={{ width: '100%' }}
                        >
                          <img src="https://www.uplevo.com/blog/wp-content/uploads/2019/07/kinh-doanh-cua-hang-phu-kien-dien-thoai.jpg" style={{width:'98%',height:'130px'}} />
                          <p style={{textAlign:'center',fontSize:20-5}}>Phụ kiện ĐT</p>
                        </Card>
                        </NavLink>
                        </div>
                        <div className="col-sm-2">
        <NavLink to={'/category/'+4}>
                        <Card
                            hoverable
                            style={{ width: '100%' }}
                        >
                          <img src="https://ezitrans.com/wp-content/uploads/2018/12/dich-vu-van-chuyen-bim-sua-tu-nhat-ve-viet-nam.jpg" style={{width:'98%',height:'130px'}} />
                          <p style={{textAlign:'center',fontSize:20-5}}>Bỉm & Sữa</p>
                        </Card>
                        </NavLink>
                        </div>
                        <div className="col-sm-2">
        <NavLink to={'/category/'+5}>
                        <Card
                            hoverable
                            style={{ width: '100%' }}
                        >
                          <img src="https://baikiemtra.com/uploads/news/2019_11/noi-com-dien.jpg" style={{width:'98%',height:'130px'}} />
                          <p style={{textAlign:'center',fontSize:20-5}}>Đồ dùng gia đình</p>
                        </Card>
                        </NavLink>
                        </div>
                        <div className="col-sm-2">
        <NavLink to={'/category/'+6}>

                        <Card
                            hoverable
                            style={{ width: '100%' }}
                        >
                          <img src="https://scontent.subi.vn/cmsmedia/Bo-do-choi-cau-ca-cho-be-la-loai-do-choi-vo-cung-quen--thuoc-voi-cac-em-nho-0f3ae43934cc9d5ab86837e5b9fad60a.jpg" style={{width:'98%',height:'130px'}} />
                          <p style={{textAlign:'center',fontSize:20-5}}>Đồ chơi trẻ em</p>
                        </Card>
                        </NavLink>
                        </div>
                      </div>
                    </div>
                  <div style={{marginTop: 20}}>
                  <div className="callout callout-success">
                    <h5>Sản phẩm đang sale</h5>
                  </div>
                  <div className="row">
                      {todoList ? todoList.map((key,index)=>(
      
                        <div className="col-sm-3">
                        <ProductComponent data={key} product="sale" click={loadingDefault} />
                        </div>
                      )): null}
                  </div>
                    
                  </div>
                </div>
            </LayoutPage>
        </>
    )
}
export default HomePage;