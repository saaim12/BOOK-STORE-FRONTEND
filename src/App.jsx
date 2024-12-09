import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
