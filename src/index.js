// Webpack allows you to import CSS, html and image files directly into your Javascript file!

import "./index.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
//ReactDom.render takes, the React component and location element of where to mount it
ReactDOM.render(
  <App/>,
  document.getElementById('main')
);
