import React from "react";
import "./Home.css";
import PIC from "./10631816.jpg";
import PIC2 from "./9ff1023a-a120-445a-91f4-f513843e80a4.png";
import person1 from "./person1.jpg";
import person2 from "./person2.jpg";
import { useNavigate } from "react-router-dom";
import person3 from "./person3.jpg";


const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/shop");
  };
  return (
    <div className="home-container">
      <div className="home-left">
        <div className="home-hero">
          <h2 className="home-title">What Book Are You Looking For</h2>
          <img src={PIC2} alt="book" className="home-hero-image" />
          <p className="home-description">
            Not Sure What to read Next? Explore Our Catalog of Public Domain
            Books With Our Editors.
          </p>
          <button className="home-button" onClick={handleExploreClick}>Explore now</button>
        </div>
        <div className="home-community">
          <h3 className="home-community-title">OUR COMMUNITY</h3>
          <div className="home-community-images">
            <img src={person1} alt="person1" className="home-community-img" />
            <img src={person2} alt="person2" className="home-community-img" />
            <img src={person3} alt="person3" className="home-community-img" />
          </div>
          <p className="home-community-text">40K+ Book lovers joined</p>
        </div>
      </div>
      <div className="home-right">
        <img className="home-full-image" src={PIC} alt="Book" />
      </div>
    </div>
  );
};

export default Home;
