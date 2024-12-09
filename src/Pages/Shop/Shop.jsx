import React from 'react';
import './Shop.css';

import MainSection from './components/MainSection';
import Bestsellers from './components/Bestsellers';
import Footer from './components/Footer';

function Shop() {
  return (
    <div className='main'>
  
      <MainSection />
      <Bestsellers />
      <Footer />
    </div>
  );
}

export default Shop;
