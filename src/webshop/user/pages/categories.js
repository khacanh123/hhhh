import { Carousel, Empty } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import LayoutPage from '../layout/Layout';
import firebase from '../../firebase';
import ProductComponent from '../layout/product';

const CategoryPage = () => { 
    const [todoList, setTodoList] = useState([]);
    const [productList, setProductList] = useState([]);
    const params = useParams();
    const contentStyle = {
        height: '160px',
        width:'100%'
      };
     
      useEffect(()=>{
       
        const getProduct = async () => {
            const todoRef = await firebase.database().ref('product').orderByChild('P_category').equalTo(params.id);
        todoRef.on('value', (snapshot) => {
          const todos = snapshot.val();
          const data = [];
          for (let id in todos) {
            data.push({ id, ...todos[id] });
          }
          setTodoList(data);
          
        });
        }
            getProduct();

      },[])
      const getCategoryName = (cate) => {
          let cateName = '';
          switch (cate) {
              case 1:
                  cateName = 'Thời trang nữ';
                  break;
              case 2:
                  cateName = 'Thời trang nam';
                  break;
              case 3: 
                  cateName = 'Thời trang trẻ em';
                  break;
          
              default:
                  cateName = ' ';
                  break;
          }
          return cateName;
      }
      const history = useHistory();
      const loadingDefault  = (id, cate) => {
        return history.push('/product/detail/'+id+'/'+cate)
     }
    return(
        <LayoutPage>
            <div className="row" style={{marginTop:60}}>
                <div className="col-sm-12">
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
            </div>
            <div style={{marginTop: 20}}>
                  <div className="callout callout-success">
                    <h5>Sản phẩm thuộc danh mục: {getCategoryName(parseInt(params.id))}</h5>
                  </div>
                  <div className="row">
                      {todoList ? todoList.map((key,index)=>(
                        <div className="col-sm-3">
                        <ProductComponent data={key} product="sale"  click={loadingDefault}/>
                        </div>
                      )): 
                      <div className="col-sm-12">
                          <Empty description="Danh mục chưa được thêm sản phẩm" image={Empty.PRESENTED_IMAGE_SIMPLE} />
                      </div>
                      }
                  </div>
                    
                  </div>
        </LayoutPage>

    )
}
export default CategoryPage;