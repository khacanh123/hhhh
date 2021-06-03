
import React from 'react';
import { Col, Row, Skeleton, Table } from 'antd';
import MyContext from '../context/my-context';
const Countries = () => {
    const columns = [
        {
          title: "Quoc gia",
          dataIndex: 'Country',
          key: 'Country'
        },
        {
          title: "Ma QG",
          dataIndex: 'CountryCode',
          key: 'CountryCode'
        },
        {
          title: "Moi nhiem",
          dataIndex: 'NewConfirmed',
          key: 'NewConfirmed'
        },
        {
          title: "Tong nhiem",
          dataIndex: 'TotalConfirmed',
          key: 'TotalConfirmed'
        },
        {
          title: "Tu vong",
          dataIndex: 'NewDeaths',
          key: 'NewDeaths'
        },
        {
          title: "Tong TV",
          dataIndex: 'TotalDeaths',
          key: 'TotalDeaths'
        },
        {
          title: "Khoi benh",
          dataIndex: 'NewRecovered',
          key: 'NewRecovered'
        },
        {
          title: "Tong Khoi benh",
          dataIndex: 'TotalRecovered',
          key: 'TotalRecovered'
        }
      ];
      return(
          <MyContext.Consumer>
              {context => {
                  if(context.Countries === undefined){
                      return <Skeleton active/>
                  }
                  return(
                    <Row style={{marginTop: 20, marginBottom: 24}}>
                    <Col span={24}>
                      <Table 
                          dataSource={context.Countries}
                          columns={columns}
                      />
                    </Col>
                </Row>
                  )
              }}
          </MyContext.Consumer>
          
          
      )
}
export default Countries;