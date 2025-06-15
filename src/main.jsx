import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import WelcomeScreen from './welcomeScreen.jsx';
import Login from './login.jsx';
import Home from './home.jsx';

import AppLayoutWithNavbar from './AppLayoutWithNavbar.jsx';
import AppLayoutBasic from './AppLayoutBasic.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Halaman tanpa navbar */}
        <Route
          path="/"
          element={
            <AppLayoutBasic>
              <WelcomeScreen />
            </AppLayoutBasic>
          }
        />
        <Route
          path="/login"
          element={
            <AppLayoutBasic>
              <Login />
            </AppLayoutBasic>
          }
        />

        {/* Halaman dengan navbar */}
        <Route
          path="/home"
          element={
            <AppLayoutWithNavbar>
              <Home />
            </AppLayoutWithNavbar>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
