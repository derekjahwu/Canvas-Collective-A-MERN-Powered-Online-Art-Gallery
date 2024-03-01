import './App.css';
import Gallery from './pages/Gallery.js';
import React from 'react'
import Index from './pages/Index.js';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {
  return (
        <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Index />} />
                <Route path="/" element={<Index />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </Router>
  );
}

export default App;
