import * as types from './types';

export const getCurrentWeather = (city) => ({
  type: types.GET_CURRENT_WEATHER,
  city
});

export const startGetCurrentWeather = (loading) => ({
  type: types.LOADING_GET_CURRENT_WEATHER,
  loading
});

export const getCurrentWeatherSuccess = (weathers) => ({
  type: types.GET_CURRENT_WEATHER_SUCCESS,
  weathers
});

export const getCurrentWeatherFail = (error) => ({
  type: types.GET_CURRENT_WEATHER_FAIL,
  error
});