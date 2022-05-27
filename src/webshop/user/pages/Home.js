import { Card, Carousel, Col, Modal, Row, Typography } from 'antd';
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
      const [isModalVisible, setIsModalVisible] = useState(true);

     
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
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
                    <div className="row">
                        <div className="col-sm-12">
                            <img src="https://cf.shopee.vn/file/0ed0d80b26a4a8dc8f8652679f37604d" style={{width:'100%', paddingTop: 5, paddingBottom:5}}/>
                        </div>
                    </div>
                    <div style={{backgroundColor:"#fff", marginBottom:20}}>
                      <p style={{marginLeft: 5, fontSize:20, fontWeight:'bold'}}>DANH MỤC SẢN PHẨM</p>
                      <div className="row" style={{padding: 10}}>
                        <div className="col-sm-4">
        <NavLink to={'/category/'+1}>
                          
                        <Card
                            hoverable
                            style={{ width: '100%', textAlign:'center' }}
                        >
                          <img src='https://vn-live-01.slatic.net/p/b651e6678a751d5b39f0ba6dbd5c0c02.jpg' style={{width:'80%', height: 230}} />
                          <p style={{textAlign:'center',fontSize:20-5, fontWeight:'bold', paddingTop: 5}}>Thời trang nữ</p>
                        </Card>
                        </NavLink>
                        </div>
                       <div className="col-sm-4">
        <NavLink to={'/category/'+2}>
                          
                        <Card
                            hoverable
                            style={{ width: '100%', textAlign:'center' }}
                        >
                          <img src="https://vn-live-03.slatic.net/p/24ab3d7df144f2a818764aa8f5fc3b59.jpg" style={{width:'80%', height: 230}} />
                          <p style={{textAlign:'center',fontSize:20-5, fontWeight:'bold', paddingTop: 5}}>Thời trang nam</p>
                        </Card>
                        </NavLink>
                        </div>
                        <div className="col-sm-4">
        <NavLink to={'/category/'+3}>
                          
                        <Card
                            hoverable
                            style={{ width: '100%', textAlign:'center' }}
                        >
                          <img src="https://familylove.vn/image/cache/catalog/FamilyloveKids/O1CN01Y80JTo1n5S38U8XCx_!!2090155038-550x550h.jpg.webp" style={{width:'80%', height: 230}} />
                          <p style={{textAlign:'center',fontSize:20-5, fontWeight:'bold', paddingTop: 5}}>Thời trang trẻ em</p>
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