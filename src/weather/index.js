import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Spin } from 'antd';
import configStore from './store/index';
import AppWeather from './pages/weather';

const { store, persistor } = configStore();

const AppIndex = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Spin />}
        persistor={persistor}
      >
        <AppWeather />
      </PersistGate>
    </Provider>
  )
}
export default AppIndex;