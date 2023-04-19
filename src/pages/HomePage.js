import React from "react";
import "./HomePage.css";
import Tablet from "../images/tablet.png";

const HomePage = () => {
  return (
    <div className="main">
      <div className="first">
        <h1>Best Products, Delivered To You</h1>
        <p>
        Choose your favorite product from our broad selection and enjoy them at home.
        </p>
      </div>
      <div className="second">
        <img src={Tablet} alt="tablet" />
      </div>
    </div>
  );
};

export default HomePage;
