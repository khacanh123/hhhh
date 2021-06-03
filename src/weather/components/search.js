import React, { useState, useEffect } from 'react';
import { Row, Col, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentWeather } from '../actions/index';
import { getDataWeather } from '../reselects/weather-reselect';
import { createStructuredSelector } from 'reselect';

const { Search } = Input;

const SearchWeather = () => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState('');
  const { nameCity } = useSelector(createStructuredSelector({
    nameCity: getDataWeather
  }));

  const changeCityName = (e) => {
    const city = e.target.value;
    setCityName(city);
  }

  const searchDataWeather = (name) => {
    dispatch(getCurrentWeather(name));
  }

  useEffect(() => {
    if(cityName === ''){
      setCityName(nameCity.name);
    } else {
      setCityName(cityName);
    }
  }, []);

  return (
    <Row style={{marginTop: '20px', marginBottom: '20px'}}>
      <Col span={12} offset={6}>
        <Search
          placeholder="Enter city name, please"
          onSearch={ val => searchDataWeather(val) }
          enterButton
          onChange={changeCityName}
          value={cityName}
        />
      </Col>
    </Row>
  )
}
export default React.memo(SearchWeather);