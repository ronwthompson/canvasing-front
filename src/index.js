import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App.tsx';
import Error from './pages/Error.tsx';
import Login from './pages/Login.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} errorElement={<Error />} />
        <Route path="/signup" element={<div />} />
        <Route path="/login" element={<Login />} />
        <Route path="/takeNotes" element={<div />} />
        <Route path="/viewNotes" element={<div />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
