import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <h1 className="font">BOOK STORE</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;