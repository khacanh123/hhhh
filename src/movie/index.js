import { Skeleton } from 'antd';
import React, {lazy,Suspense} from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";

const HomeComponent = lazy(() => import('./pages/Home'));
const UpComming = lazy(() => import('./pages/up-comming'));
const SearchComponent = lazy(() => import('./pages/search'));

const Movie = () => {
    return(
        <Router>
            <Suspense
                fallback={<Skeleton active />}
            >
                <Route exact path='/'>
                    <HomeComponent />
                </Route>
                <Route path='/home'>
                    <HomeComponent />
                </Route>
                <Route path='/up-comming'>
                    <UpComming />
                </Route>
                <Route path='/search'>
                    <SearchComponent />
                </Route>
            </Suspense>
        </Router>
    )
}
export default Movie;