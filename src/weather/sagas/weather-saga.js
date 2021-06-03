import { put, call, take, fork, cancel } from 'redux-saga/effects';
import * as actions from '../actions/index';
import { GET_CURRENT_WEATHER, GET_CURRENT_WEATHER_FAIL } from '../actions/types';
import * as api from '../services/api';
import * as helpers from '../helpers/common';

function* currentWeatherSaga(city) {
  try {
    yield put(actions.startGetCurrentWeather(true));
    const weather = yield call(api.getCurrentWeather, city);
    if(!helpers.isEmptyObject(weather)){
      if(weather.cod === 200){
        yield put(actions.getCurrentWeatherSuccess(weather));
      } else {
        yield put(actions.getCurrentWeatherFail({
          code: 500,
          message: 'Not found data'
        }))
      }
    } else {
      yield put(actions.getCurrentWeatherFail({
        code: 500,
        message: 'Not found data'
      }));
    }
  } catch (err) {
    //console.log(err);
    yield put(actions.getCurrentWeatherFail(err));
  }
}

export function* watchCurrentWeatherSaga() {
  //yield takeLatest(GET_CURRENT_WEATHER, currentWeatherSaga);
  while (true) {
    const { city } = yield take(GET_CURRENT_WEATHER)
    const weather = yield fork(currentWeatherSaga, city);
    yield take(GET_CURRENT_WEATHER_FAIL);
    yield cancel(weather);
  }
}