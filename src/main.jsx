import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ⬇️ Styles
import './index.css';

// ⬇️ Layouts
import AppLayoutBasic from './AppLayoutBasic.jsx';
import AppLayoutWithNavbar from './AppLayoutWithNavbar.jsx';

// ⬇️ Pages
import WelcomeScreen from './welcomeScreen.jsx';
import Login from './login.jsx';
import Home from './home.jsx';
import Settings from './settings.jsx';
import Test from './test.jsx';
import Teststress from './test-stress.jsx';
import Psikiater from './psikiater.jsx';
import Psikolog from './psikolog.jsx';
import Profile from './profile.jsx';

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
        <Route
          path="/settings"
          element={
            <AppLayoutWithNavbar>
              <Settings />
            </AppLayoutWithNavbar>
          }
        />
        <Route
          path="/test"
          element={
            <AppLayoutWithNavbar>
              <Test />
            </AppLayoutWithNavbar>
          }
        />
          <Route
          path="/test-stress"
          element={
            <AppLayoutWithNavbar>
              <Teststress />
            </AppLayoutWithNavbar>
          }
        />
        <Route
  path="/psikiater"
  element={
    <AppLayoutWithNavbar>
      <Psikiater />
    </AppLayoutWithNavbar>
  }
/>
<Route
  path="/psikolog"
  element={
    <AppLayoutWithNavbar>
      <Psikolog />
    </AppLayoutWithNavbar>
  }
/>
<Route
  path="/profil"
  element={
    <AppLayoutWithNavbar>
      <Profile />
    </AppLayoutWithNavbar>
  }
/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
