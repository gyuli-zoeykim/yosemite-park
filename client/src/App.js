import React from 'react';
import Header from './components/Header';
// import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="app-container">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
