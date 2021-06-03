import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import reportWebVitals from './reportWebVitals';
import HinShop from './webshop';
// import Project from './appchat';
// import Counter from './redux';
// import App from './chatting/App';
// import Index from './verifyOTP';
// import Movie from './movie';

ReactDOM.render(
  <React.StrictMode>
    <HinShop />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
