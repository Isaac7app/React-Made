import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Hello from './Hello';
import reportWebVitals from './reportWebVitals';
import 'tachyons'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Hello />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
