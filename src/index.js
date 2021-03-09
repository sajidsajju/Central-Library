import React from 'react';
import { render } from 'react-dom';
import App from './App';

window.React = React;

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
