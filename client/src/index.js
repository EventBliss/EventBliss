import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import reportWebVitals from './reportWebVitals';
import Layaout from './pages/Layaout';
import HomePage from './pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layaout/>}>
          <Route path='/' element={<HomePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
