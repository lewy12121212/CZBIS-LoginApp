import React from 'react'
import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import Page404 from './components/Page404';
import Login from './components/Login';
import Unautorize from './components/Unautorize';
import { getToken } from './utils/session'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="" exac element={<Login />} />
          <Route exact path="HomePage" element={getToken() ? <HomePage /> : <Navigate to='/' replace />}/>
          <Route path="Unautorize" element={<Unautorize />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
