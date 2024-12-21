import React, { createContext, useContext, useState } from 'react';

// Create Cart Context
const CartContext = createContext();

// Create Cart Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  // Remove item from cart
  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter(item => item.book_id !== bookId));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
