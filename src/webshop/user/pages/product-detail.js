import { Button, InputNumber, message, Rate, Skeleton, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import LayoutPage from '../layout/Layout';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
 
import firebase from '../../firebase';
import ProductComponent from '../layout/product';
const {Text} = Typography;
const ProductDetail = () => {
    const [detail, setDetail] = useState([]);
    const [productList, setProductList] = useState([]);
    const [order, setOrder] = useState(1);
    const [loading, setLoading] = useState(false);
    const params = useParams();

    useEffect(()=>{
        
          getDetail(params.id);
          getListProduct(params.cate);
    },[])
    const getDetail = async (id) => {
        setLoading(true);
        const todoRef2 = await firebase.database().ref('product').child(id);
      todoRef2.on('value', (snapshot) => {
          const todos = snapshot.val();
          setDetail(todos);
         
        });
      }
      const getListProduct = async (cate) => {
        const todoRef = await firebase.database().ref('product').orderByChild("P_category").equalTo(cate);
        todoRef.on('value', (snapshot) => {
         const todos = snapshot.val();
         const todoList = [];
         for (let id in todos) {
             if(id !== params.id){
                 todoList.push({ id, ...todos[id] });
             }
         }
         setProductList(todoList);
         setLoading(false);
       });
      }
    const history = useHistory();
    const loadingDefault  = (id, cate) => {
        getDetail(id);
        getListProduct(cate);
        
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        return history.push('/product/detail/'+id+'/'+cate);
    }
    const AddToCart = () => {
        let token = localStorage.getItem('token');
        if(token === null || token === undefined){
            message.error('Vui lòng đăng nhập trước nhé.');
            history.push('/login');
        }else{
            let MyCard = localStorage.getItem('myCart');
            let price = 0;
            price = parseInt(detail.p_promotion) === 0 ?  detail.p_price : detail.p_promotion; // detail.p_promotion: giá bán khuyến mại
            let product = {
                    id_product: params.id,
                    name_product: detail.p_name,
                    price_product: price,
                    quality: order,
                }
                console.log(product);
            if(MyCard === null){
                // chưa có sp nào trong giỏ hàng
                const cartArr = [];
                
                cartArr.push(product);
                localStorage.setItem('myCart', JSON.stringify(cartArr));
                
                
            }else{
                // đã có ít nhất một sp trong giỏ hàng
                MyCard = JSON.parse(MyCard);
                let check = true;
                MyCard.map((key, index)=>{ 
                    if(key.id_product === params.id){ // nếu sp đã có trong giỏ thì + thêm số lượng mà user chọn
                        console.log(key.quality + order);
                        MyCard[index].quality = key.quality + order
                        check = false;
                    }
                })
                localStorage.setItem('myCart', JSON.stringify(MyCard));
                if(check){
                    MyCard.push(product);
                    localStorage.setItem('myCart', JSON.stringify(MyCard));
                }
                 alert('Thêm sản phẩm vào giỏ hàng thành công');
                 document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        return window.location.href= '/product/detail/'+params.id+'/'+params.cate;
            }
        }
    }
    return(
        <LayoutPage>
            {loading ? <Skeleton active/> : (
                <>
            <div style={{marginTop:60}}></div>
            <div className="row" style={{marginTop:20, backgroundColor:'#fff'}}>
                <div className="col-sm-6">
                    <img src={detail.p_img} style={{width: '100%', height: '100%'}} />
                </div>

                <div className="col-sm-6">
                    <h5>{detail.p_name}</h5>
                    <Rate disabled defaultValue={4} />
                    {parseInt(detail.p_promotion) === 0 ? 
                        <p>
                            <Text></Text>
                            <Text style={{fontSize: 20, marginLeft: 20, color:'red'}}>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(detail.p_price)}</Text>
                        </p> :
                        <p>
                        <Text delete>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(detail.p_price)}</Text>
                        <Text style={{fontSize: 20, marginLeft: 20, color:'red'}}>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(detail.p_promotion)}</Text>
                    </p>
                    }
                    <div style={{marginTop:20}}>
                        <div className="form-group">
                            <label>chọn số lượng</label><br/>
                            <InputNumber min={1} max={detail.p_quality} defaultValue={order} onChange={(value)=>setOrder(value)} />
                        </div>
                        <p>{detail.p_quality} sản phẩm có sẵn</p>
                    </div>
                    <Button type='default' onClick={AddToCart}>Thêm vào giỏ hàng</Button>
                </div>
            </div>
            <div className="row" style={{marginTop:20, backgroundColor:'#fff'}}>
                <div className="col-sm-12">
                <div className="callout callout-success">
                    <h5>Mô tả về sản phẩm</h5>
                  </div>
                    <div>
                        {ReactHtmlParser(detail.p_description)}
                    </div>
                </div>
            </div>
            <div className="callout callout-success">
                    <h5>Sản phẩm cùng danh mục</h5>
                  </div>
            <div className="row" style={{marginTop:20, backgroundColor:'#fff'}}>
                
                    {productList ? productList.map((key,index)=>(
                    <div className="col-sm-3" >
                    <ProductComponent data={key} product="sale" click={loadingDefault}/>
                    </div>
                                    )) :null}
                
                
            </div>
            </>
            )}
        </LayoutPage>
    )
}

export default ProductDetail;