import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter, Router } from 'react-router-dom';
import Rigister from './components/Rigister';
import Appbar from './components/Appbar';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/register" element={<Rigister />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
