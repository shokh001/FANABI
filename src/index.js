import React from 'react';
import ReactDOM from 'react-dom';
import Context from './context/context';
import './index.css';
import Root from './root'


ReactDOM.render(
  <React.StrictMode>
    <Context>
      <Root />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);

