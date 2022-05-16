import React from 'react'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import LoginPage from './components/LoginPage';
import Unauthorize from './components/Unauthorize';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="" exac element={<LoginPage />} />
          <Route path="HomePage" element={<HomePage />} />
          <Route path="Unauthorize" element={<Unauthorize />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
