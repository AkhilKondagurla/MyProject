import './App.css';
import React from 'react';
import { StrictMode } from "react";
import { Route, Routes, BrowserRouter, Router } from 'react-router-dom';
import Rigister from './components/Rigister';
import Login from './components/Login';
import Home from './components/Home';
import Dewali from './components/Dewali';
import ViewDetails from './components/ViewDetails';
import Grids from './components/Grids';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <StrictMode>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Rigister />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dewali" element={<Dewali />} />
            <Route path="/viewdetails" element={< ViewDetails/>} />
            <Route path="/grids" element={< Grids/>} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </div>
  );
}






export default App;


