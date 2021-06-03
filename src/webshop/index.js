import { Skeleton } from 'antd';
import React, {lazy,Suspense} from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
  } from "react-router-dom";
  import jwtDecode from 'jwt-decode';

const HomePage = lazy(()=>import('./user/pages/Home'));
const CategoryPage = lazy(()=>import('./user/pages/categories'));
const ProductDetail = lazy(()=>import('./user/pages/product-detail'));
const CartPage = lazy(()=>import('./user/pages/cart'));
const PaymentPage = lazy(()=>import('./user/pages/payment'));
const NotiOrder = lazy(()=>import('./user/pages/notipage'));
const RegisterPage = lazy(()=>import('./user/register'));
const LoginPage = lazy(()=>import('./login'));
const HomeAdmin = lazy(()=>import('./admin/pages/Home'));
const AddProduct = lazy(()=>import('./admin/pages/AddProduct'));
const ListProduct = lazy(()=>import('./admin/pages/ListProduct'));
const EditProduct = lazy(()=>import('./admin/pages/EditProduct'));
const OrderList = lazy(()=>import('./admin/pages/order-list'));

const HinShop = () => {
    let token = localStorage.getItem('token');
    let decode = token === null ? {} : jwtDecode(token);
    return(
        <Router>
            <Suspense
                fallback={<Skeleton active />}
            >
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route path='/admin'>
                    {token !== null && decode.level === 2 ? <HomeAdmin /> : <Redirect to='/' />}
                    
                </Route>
                <Route path='/add-product'>
                {token !== null && decode.level === 2 ? <AddProduct /> : <Redirect to='/' />}
                </Route>
                <Route path='/list-product'>
                {token !== null && decode.level === 2 ? <ListProduct /> : <Redirect to='/' />}
                </Route>
                <Route path='/order-list'>
                {token !== null && decode.level === 2 ? <OrderList /> : <Redirect to='/' />}
                </Route>
                <Route path='/product/edit/:id'>
                {token !== null && decode.level === 2 ? <EditProduct /> : <Redirect to='/' />}
                </Route>
                <Route path='/category/:id'>
                    <CategoryPage />
                </Route>
                <Route exact path='/product/detail/:id/:cate' render={()=><ProductDetail />} />
                <Route path='/login'>
                    {token === null ? <LoginPage /> : <Redirect to='/' />}
                </Route>
                <Route path='/register'>
                    {token === null ? <RegisterPage /> : <Redirect to='/' />}
                </Route>
                <Route path='/cart'>
                    {token === null ? <Redirect to='/login' />: <CartPage />}
                </Route>
                <Route path='/payment'>
                    {token === null ? <Redirect to='/login' />: <PaymentPage />}
                </Route>
                <Route path='/order-infor'>
                    {token === null ? <Redirect to='/login' /> : <NotiOrder />}
                </Route>
            </Suspense>
        </Router>
    )
}
export default HinShop;