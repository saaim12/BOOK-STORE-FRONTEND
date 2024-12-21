import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./Header/Header";
import Shop from './Pages/Shop/Shop';
import Home from './Pages/Home/Home';
import Auth from './Pages/Auth/Auth'; 
import OrderScreen from './Pages/Order/Order';
import { UserProvider } from './Pages/useContext/Context';
import { CartProvider } from './Pages/useContext/cartContext';  // Ensure correct import path

function App() {
  return (
    <UserProvider> 
      <CartProvider>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/order" element={<OrderScreen />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
