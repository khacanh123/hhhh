import React, { useEffect, useState } from 'react';
import LayoutComponent from '../components/Layout';
import { getDataMovies } from '../service/api';
import LoadingComponent from '../components/Loading';
import { Card, Col, Pagination, Row } from 'antd';
const {Meta} = Card;
const HomePage = () => {
    const [loadingHomePage, setLoadingHomePage] = useState(false);
    const [listMovie, setListMovie] = useState([]);
    const [page, setPage] = useState(2);
    const [totalResult, setTotalResult] = useState(0);
    useEffect(() => {
        const getData = async () => {
            setLoadingHomePage(true);
            const data = await getDataMovies();
            if(data){
                setListMovie(data.results);
                setTotalResult(data.total_results);
                if(page < 1){
                    setPage(1);
                }else if(page > data.total_pages){
                    setPage(data.total_pages);
                }
                setLoadingHomePage(false);
            }
        }
        getData();
    },[page])
    if(loadingHomePage || listMovie.length === 0){
        return(
            <LayoutComponent>
                <LoadingComponent />
            </LayoutComponent>
        )
    }
    return(
        <LayoutComponent>
            <h1>this is home page</h1>
            <Row style={{marginTop:5}}>
                
                    {listMovie.map((item, index)=>(
                    <Col span={4}>
                        <Card hoverable
                        style={{width:200, marginRight:5, marginBottom:5}} 
                        cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
                        >
                          <Meta title={item.title} />
                        </Card>
                        </Col>
                    ))}
                
            </Row>
            <Row style={{textAlign: 'center', marginTop:5}}>
                <Col span={24}>
                    <Pagination
                        current={page}
                        pageSize={20}
                        total={totalResult}
                        onChange={(pages) => setPage(pages)}
                    />
                </Col>
            </Row>
        </LayoutComponent>
        
    )
}
export default React.memo(HomePage);