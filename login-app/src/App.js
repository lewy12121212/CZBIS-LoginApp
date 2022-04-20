import React from 'react'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import HomePage from './components/HomePage';
import Page404 from './components/Page404';
import Login from './components/Login';
import Unautorize from './components/Unautorize';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/Login" element={<Login />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Page404" element={<Page404 />} />
          <Route path="/Unautorize" element={<Unautorize />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
