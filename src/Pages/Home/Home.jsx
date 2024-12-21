// src/Pages/Home/Home.js
import React from "react";
import "./Home.css";
import PIC from "./10631816.jpg";
import PIC2 from "./9ff1023a-a120-445a-91f4-f513843e80a4.png";
import person1 from "./person1.jpg";
import person2 from "./person2.jpg";
import person3 from "./person3.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();


  return (
    <div className="home">
      <div className="home__content">
        <div className="home__hero">
          <h2 className="home__title">What Book Are You Looking For?</h2>
          <img src={PIC2} alt="book" className="home__hero-image" />
          <p className="home__description">
            Not sure what to read next? Explore our catalog of public domain
            books curated by our editors.
          </p>
          <button className="home__button" onClick={()=>{navigate("/shop");}}>
            Explore Now
          </button>
        </div>
        <div className="home__community">
          <h3 className="home__community-title">OUR COMMUNITY</h3>
          <div className="home__community-images">
            <img src={person1} alt="person1" className="home__community-img" />
            <img src={person2} alt="person2" className="home__community-img" />
            <img src={person3} alt="person3" className="home__community-img" />
          </div>
          <p className="home__community-text">Join over 40K+ book lovers!</p>
        </div>
      </div>
      <div className="home__image-wrapper">
        <img className="home__full-image" src={PIC} alt="Book" />
      </div>
    </div>
  );
};

export default Home;
