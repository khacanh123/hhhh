import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import LayoutPage from '../layout/Layout';

const CartPage = () => {
    const [listCart, setListCart] = useState([]);

    useEffect(() => {
        let cart = localStorage.getItem('myCart');
        cart = JSON.parse(cart);
        setListCart(cart);
    },[])
    const deleteCart = (id) => {
      const filterById = listCart.filter((cart) => cart.id_product !== id);
      setListCart(filterById);
      localStorage.setItem('myCart', JSON.stringify(filterById));
    }
    let total = 0;
    const history = useHistory();
    return(
        <LayoutPage>
            <div className="row" style={{marginTop:60, backgroundColor:'#fff'}}>
  <div className="col-sm-12 col-md-10 col-md-offset-1">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Tên sản phẩm</th>
          <th className="text-center">SL</th>
          <th className="text-center">Giá</th>
          <th className="text-center">Tổng tiền</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
          {listCart ? listCart.map((key, index) => {
              let money = key.price_product * key.quality;
              total = total + money;
             return (
        <tr>
          <td className="col-sm-8 col-md-6">
            <div className="media">
              <a className="thumbnail pull-left" href="#"> <img className="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" style={{width: '72px', height: '72px'}} /> </a>
              <div className="media-body">
                <h6 className="media-heading" style={{marginLeft: 20}}><a href="#">{key.name_product}</a></h6>
              </div>
            </div></td>
          <td className="col-sm-1 col-md-1" style={{textAlign: 'center'}}>
            <p>{key.quality} </p>
          </td>
          <td className="col-sm-1 col-md-1 text-center"><strong>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(key.price_product)}</strong></td>
          <td className="col-sm-1 col-md-1 text-center"><strong>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(key.price_product * key.quality)}</strong></td>
          <td className="col-sm-1 col-md-1">
            <button type="button" className="btn btn-danger" onClick={()=>deleteCart(key.id_product)}>
              <span className="glyphicon glyphicon-remove" /> Xóa
            </button></td>
        </tr>
        )
          }) 
        : null}
        {
          listCart.length === 0 ? null : 
          <>
        
       
        <tr>
          <td> &nbsp; </td>
          <td> &nbsp; </td>
          <td> &nbsp; </td>
          <td><h5>Tổng cộng</h5></td>
          <td className="text-right"><h5><strong>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(total + 30000)}</strong></h5></td>
        </tr>
        <tr>
          <td> &nbsp; </td>
          <td colSpan={2}>
            <button type="button" className="btn btn-default" onClick={()=>history.push('/')}>Tiếp tục mua
            </button></td>
          <td colSpan={2}>
            <button type="button" className="btn btn-success" onClick={() => history.push('/payment')}>
              Đặt hàng<span className="glyphicon glyphicon-play" />
            </button></td>
        </tr>
        </>
        }
      </tbody>
    </table>
  </div>
</div>

        </LayoutPage>
    )
}
export default CartPage;