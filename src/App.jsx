import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';  
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  return (
    <div className="App">
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
