import './App.css';
import Gallery from './pages/Gallery.js';
import React from 'react'
import Index from './pages/Index.js';
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
