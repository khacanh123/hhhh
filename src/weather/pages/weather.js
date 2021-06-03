import React from 'react';
import SearchWeather from '../components/search';
import ResultWeather from '../components/result';

const AppWeather = () => {
  return (
    <>
      <SearchWeather/>
      <ResultWeather/>
    </>
  )
}
export default React.memo(AppWeather);