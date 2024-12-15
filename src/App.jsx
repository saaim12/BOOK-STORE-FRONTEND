// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./Header/Header";

import Shop from './Pages/Shop/Shop';
import Home from './Pages/Home/Home';
import Auth from './Pages/Auth/Auth'; // Import the Auth component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/auth" element={<Auth />} /> {/* Add route for Auth */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
