import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { currentWeatherReducer } from './weather-reducer';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const configWeather = {
  key: 'weather',
  storage,
  whitelist: ['weather'] // luu nhung state can luu tu reducer vao localStorage
}

const rootReducer = combineReducers({
  currentWeather: persistReducer(configWeather, currentWeatherReducer)
});
export default rootReducer;