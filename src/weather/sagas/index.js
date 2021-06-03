import { all, call } from 'redux-saga/effects';
import { watchCurrentWeatherSaga } from './weather-saga';

export default function* rootSaga(){
  yield all([
    call(watchCurrentWeatherSaga)
  ])
}