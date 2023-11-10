import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';

import Store from './redux/Store';
import {Provider} from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />
    <ToastContainer />
  </Provider>
);


