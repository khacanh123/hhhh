import * as types from '../actions/types';

const initialState = {
  loading: false,
  weather: {}, 
  error: null
}

export const currentWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_GET_CURRENT_WEATHER:
      return {
        ...state,
        loading: action.loading
      }
    case types.GET_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.weathers,
        error: null
      }
    case types.GET_CURRENT_WEATHER_FAIL:
      return {
        ...state,
        loading: false,
        weather: {},
        error: action.error
      }
    default:
      return state;
  }
}