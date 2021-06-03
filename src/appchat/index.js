import { Skeleton } from 'antd';
import React, {lazy,Suspense} from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import store from './store';

const IndexPage = lazy(()=>import('./components/ListUser'));
const AddPage = lazy(()=>import('./components/welcome'));
const HomePage = lazy(()=>import('./components/user/Home'));
const AboutPage = lazy(()=>import('./components/user/About'));
const FBPage = lazy(()=>import('./components/user/feedback'));
const CMTPage = lazy(()=>import('./components/user/Comment'));
const LoginPage = lazy(()=>import('./components/Login'));
const AdminHomePage = lazy(()=>import('./components/admin/Home'));
const AddBooKPage = lazy(()=>import('./components/admin/addBook'));
const ListBookPage = lazy(()=>import('./components/admin/ListBook'));
const BookEditPage = lazy(()=>import('./components/admin/bookEdit'));
const ListUserPage = lazy(()=>import('./components/admin/user/ListUser'));
const EditUserPage = lazy(()=>import('./components/admin/user/EditUser'));
const AddUserPage = lazy(()=>import('./components/admin/user/AddUser'));
const ListReaderPage = lazy(()=>import('./components/admin/reader/ListReader'));
const AddReaderPage = lazy(()=>import('./components/admin/reader/AddReader'));
const EditReaderPage = lazy(()=>import('./components/admin/reader/editReader'));
const BookBorrowPage = lazy(()=>import('./components/admin/book/Borrow'));
const BookReturnPage = lazy(()=>import('./components/admin/book/Return'));
const CategoryPage = lazy(()=>import('./components/admin/category'));
const Project = () => {
    return(
        <Provider store={store}>
            <Router>
            <Suspense
                fallback={<Skeleton active />}
            >
                <Route exact path='/'>
                  <HomePage />
                </Route>
                <Route path='/progress'>
                  <IndexPage />
                </Route>
                <Route path='/add-progress'>
                    <AddPage />
                </Route>
                <Route path='/about'>
                    <AboutPage />
                </Route>
                <Route path='/feedback-FE'>
                    <FBPage />
                </Route>
                <Route path='/comment-fb/:id'>
                    <CMTPage />
                </Route>
                <Route path='/login'>
                    <LoginPage />
                </Route>
                <Route path='/admin'>
                    <AdminHomePage />
                </Route>
                <Route path='/book/list'>
                    <ListBookPage />
                </Route>
                <Route path='/book/add'>
                    <AddBooKPage />
                </Route>
                <Route path='/book/edit/:id'>
                    <BookEditPage />
                </Route>
                <Route path='/user/list'>
                    <ListUserPage />
                </Route>
                <Route path='/user/add'>
                    <AddUserPage />
                </Route>
                <Route path='/user/edit/:id'>
                    <EditUserPage />
                </Route>
                <Route path='/reader/list'>
                    <ListReaderPage />
                </Route>
                <Route path='/reader/add'>
                    <AddReaderPage />
                </Route>
                <Route path='/reader/edit/:id'>
                    <EditReaderPage />
                </Route>
                <Route path='/book/borrow'>
                    <BookBorrowPage />
                </Route>
                <Route path='/book/return'>
                    <BookReturnPage />
                </Route>
                <Route path='/category'>
                    <CategoryPage />
                </Route>
            </Suspense>
        </Router>
        </Provider>
        
    )
}
export default Project;