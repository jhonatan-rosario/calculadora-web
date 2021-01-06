import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import Calculator from './app';
import { Header } from './components';
import reportWebVitals from './reportWebVitals';
import './style/index.css';

ReactDOM.render(
  <StrictMode>
    <Header />
    <div className="main-container">
        <Calculator />
    </div>
  </StrictMode>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
