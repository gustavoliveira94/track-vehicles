import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { store } from 'core/store';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { makeServer } from './core/server';

import 'react-toastify/dist/ReactToastify.css';

import 'leaflet/dist/leaflet.css';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
