import './App.css';
import React from 'react';
import { StrictMode } from "react";
import { Route, Routes, BrowserRouter, Router } from 'react-router-dom';
import Rigister from './components/Rigister';
import Appbar from './components/Appbar';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <StrictMode>
        <BrowserRouter>
        <Appbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Rigister />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </div>
  );
}

export default App;
