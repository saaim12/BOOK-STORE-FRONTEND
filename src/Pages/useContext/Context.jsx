// Context.js
import React, { createContext, useState, useContext } from 'react';

// Create a Context for the user
const UserContext = createContext();

// Create a Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Update user info
  const loginUser = (userData) => {
    setUser(userData); // Store user data in state

    // Store email and password in localStorage
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('email', userData.email); // Store email
    localStorage.setItem('password', userData.password);
    localStorage.setItem('_id',userData._id)
  };

  // Logout user
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};
