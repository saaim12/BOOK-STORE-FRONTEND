import React from 'react'
import "./Home.css";
import PIC from "./10631816.jpg";
import PIC2 from "./9ff1023a-a120-445a-91f4-f513843e80a4.png";

export const Home = () => {
  return (
    <>
    <div className="container">
      <div className="left-side">
      <header className="navbar">
          <div className="logo">
            <h1 className='font'>BOOK STORE</h1>
          </div>
          <nav className="nav">
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>About us</li>
              
            </ul>
          </nav>
        </header>
        <div className="hero">
          <h2 className='font'>What Book Are You Looking For</h2>
          <img src={PIC2} alt="book" />
          <p>Not Sure What to read Next? Explore Our Catalog of public Domain Books With Our Editors</p>
          <button>Explore now</button>
        </div>
        <div className="community">
          <h3>OUR COMMUNITY</h3>
          <div className="people">
            <img src="person1.png" alt="person1" />
            <img src="person2.png" alt="person2" />
            <img src="person3.png" alt="person3" />
          </div>
          <p>40K+ Book lovers joined</p>
        </div>
      </div>
      <div className="right-side">
        <img className='half_page' src={PIC} alt="Book" />
        
      </div>
    </div>
    </>
  )
}
