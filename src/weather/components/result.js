import React from 'react';
import { Row, Col, Skeleton } from 'antd';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as reselect from '../reselects/weather-reselect';
import { isEmptyObject } from '../helpers/common';


const ResultWeather = () => {
  //const isLoading = useSelector(state => state.currentWeather.loading);
  //const dataWeather = useSelector(state => state.currentWeather.weather);
  const { isLoading, dataWeather } = useSelector(createStructuredSelector({
    isLoading: reselect.loadingSelector,
    dataWeather: reselect.getDataWeather
  }));
  if(isLoading){
    return (
      <Row>
        <Col span={24}>
          <Skeleton active />
        </Col>
      </Row>
    )
  }
  return (
    <>
    {!isEmptyObject(dataWeather) ? (
      <Row>
        <Col span={18} offset={3}>
          <Row>
            <Col span={24}>
              <h1>{dataWeather.name}, {dataWeather.country}</h1>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <img alt={dataWeather.temp} width={100} height={100} src={`http://openweathermap.org/img/w/${dataWeather.icon}.png`} />
              <span>{dataWeather.temp}</span>
              <p>{dataWeather.description}</p>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={8}>
                  <h3>{dataWeather.temp_max}</h3>
                  <p>Height</p>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <h3>{dataWeather.temp_min}</h3>
                  <p>Low</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    ) : null }
    </>
  )
}
export default React.memo(ResultWeather);