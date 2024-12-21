import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useUser } from "../Pages/useContext/Context";
const Header = () => {
 
  const { user } = useUser(); // Access user from the context


  console.log(`Welcome,${user ? user.name : 'Guest'}`)
  return (
    <header className="navbar">
      <div className="logo">
        <h1 className="font">BOOK STORE</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/order">Order</Link></li>
          <li><Link to="/auth">Login/Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;