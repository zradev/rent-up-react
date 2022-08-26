import React from "react";

const Hero = (props) => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <span>{props.name}</span>
          <h1>{props.title}</h1>
        </div>
        <img src={props.cover} alt="" />
      </div>
    </>
  );
};

export default Hero;
