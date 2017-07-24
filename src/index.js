// Webpack allows you to import CSS, html and image files directly into your Javascript file!

import "./index.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(
  <App/>,
  document.getElementById('main')
);
