// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import 'bootstrap/dist/css/bootstrap.css';
import EventHeader from './components/header/EventHeader';
import './index.sass'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <EventHeader />
    <App />
    
  </React.StrictMode>
);


