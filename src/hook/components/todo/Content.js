import React, {useState, useEffect} from 'react';
import {
  Row,
  Col,
  Card,
  Skeleton,
  Button,
  Pagination
} from 'antd';
import { api } from './api';

const { Meta } = Card;
const ListUsers = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [users, setListUsers] = useState([]);
  const [previous, showPrevious] = useState(false);
  const [next, showNext] = useState(false);

  useEffect(() => {
    // viet ham de lay du lieu tu api ve
    const getData = async () => {
      setLoading(true); // bat dau call vao api get data
      const dataUsers = await api.getListDataUsers(page);
      if(dataUsers){
        // cap nhat lai data users
        setListUsers(dataUsers.data);
        // cap nhat totalItem
        setTotalItem(dataUsers.total);
        // cap nhat totalPage
        setTotalPage(dataUsers.total_pages);
        // cap nhat lai loading - khong loading nua
        setLoading(false);

        // bat dau xu ly phan trang
        // gioi han page
        if(page < 1){
          setPage(1);
        } else if(page > dataUsers.total_pages){
          setPage(dataUsers.total_pages);
        }

        // kiem tra hien thi nut previous
        if(page > 1){
          showPrevious(true);
        } else {
          showPrevious(false);
        }
        // kiem tra hien thi nut next
        if(page < dataUsers.total_pages){
          showNext(true);
        } else {
          showNext(false);
        }

      }
    }
    getData(); // goi ham call api ra su dung
  }, [page]); // am chi su dung giong nhu componentDidMount ben class component hoac nhu componentDidUpdate class component

  // viet ham chuyen trang
  const previousAndNextPage = (type) => {
    // type : biet duoc dang bam vao next hay previous
    if(type === 'previous'){
      // cap nhat giam state page xuong 1
      if(page > 1){
        setPage(page - 1);
      }
    } else if(type === 'next') {
      if(page < totalPage){
        setPage(page + 1);
      }
    }
  }

  const changePage = (pages) => {
    setPage(pages);
  }

  if(loading || users.length === 0){
    // chua co du lieu - dang loading
    return (<Skeleton active />);
  }

  return(
    <>
      <Row style={{marginTop:'20px', marginBottom: '20px'}}>
      {users.map((item, index) => (
        <Col span={8} key={index}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img alt={item.last_name} src={item.avatar} />}
          >
            <Meta title={item.first_name} description={item.email} />
          </Card>
        </Col>
      ))}
      </Row>
      <Row style={{marginTop: '20px', marginBottom: '60px', textAlign: 'center'}}>
        <Col span={12} offset={6}>
        {previous && (
          <Button
            type="primary"
            onClick={() => previousAndNextPage('previous')}
          >Previous</Button>
        )}

        {next && (
          <Button
            type="primary"
            style={{marginLeft: '10px'}}
            onClick={() => previousAndNextPage('next')}
          >Next</Button>
        )}
        </Col>
      </Row>

      <Row style={{marginTop: '20px', marginBottom: '60px', textAlign: 'center'}}>
        <Col span={24}>
          <Pagination
            current={page}
            pageSize={3}
            total={totalItem}
            onChange={(pages) => changePage(pages)}
          />
        </Col>
      </Row>
    </>
  );
}
export default React.memo(ListUsers);