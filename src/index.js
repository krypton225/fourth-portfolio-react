import React from 'react';
import ReactDOM from 'react-dom/client';

import 'react-lazy-load-image-component/src/effects/blur.css';

import './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('main'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);