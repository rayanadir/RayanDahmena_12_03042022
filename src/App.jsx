import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import LateralBar from './components/lateral-bar/LateralBar';
import { Routes , Route } from "react-router-dom";
import Dashboard from './views/dashboard/Dashboard';
import Home from './views/home/Home';

function App() {
  return (
    <>
      <Header />
      <main>
      <LateralBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/:id' element={<Dashboard />} />
      </Routes>
      </main>
    </>
    
  );
}

export default App;
