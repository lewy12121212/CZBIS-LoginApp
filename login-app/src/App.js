import React from 'react'
import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import LoginPage from './components/LoginPage';
import { getToken } from './utils/session'
import RegistrationPage from './components/RegistrationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="" exac element={<LoginPage />} />
          <Route path="Registration" exac element={<RegistrationPage />} />
          <Route exact path="HomePage" element={getToken() ? <HomePage /> : <Navigate to='/' replace />}/>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
