import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <>
      <div className="hero">
        <div className="blended">
          <img src={props.cover} alt="hero" />
        </div>
        <span>{props.name}</span>
        <h1>{props.title}</h1>
      </div>
    </>
  );
};

export default Hero;
