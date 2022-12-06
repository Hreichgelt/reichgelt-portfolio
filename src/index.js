// import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { HashRouter } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter base="/">
    <App />
    </HashRouter>
);