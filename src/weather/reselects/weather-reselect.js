import { createSelector } from 'reselect';
import { isEmptyObject } from '../helpers/common';

const weatherSelector = state => state.currentWeather;
// lay ra toan bo state tu reducer tra ve;

export const loadingSelector = createSelector(
  weatherSelector,
  item => item.loading
);
export const getDataWeather = createSelector(
  weatherSelector,
  item => {
    if(!isEmptyObject(item.weather)){
      return {
        temp: item.weather.main.temp,
        description: item.weather.weather[0].description,
        main: item.weather.weather[0].main,
        icon: item.weather.weather[0].icon,
        temp_max: item.weather.main.temp_max,
        temp_min: item.weather.main.temp_min,
        wind: item.weather.wind.speed,
        humidity: item.weather.main.humidity,
        sunrise: item.weather.sys.sunrise,
        sunset: item.weather.sys.sunset,
        name: item.weather.name,
        country: item.weather.sys.country
      }
    }
    return {}
  }

)