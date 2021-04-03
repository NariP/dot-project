import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import "leaflet/dist/leaflet.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from './modules';

const createStoreWidthMiddlware = applyMiddleware(
    reduxThunk
)(createStore);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={createStoreWidthMiddlware(
          // 리듀서를 생성 후 넣어준다
          rootReducer,
          // 개발자 도구를 사용하기 위한 설정
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
