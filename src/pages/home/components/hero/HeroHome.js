import React from "react";
import "./HeroHome.css";
import { FaSearch } from "react-icons/fa";
import Heading from "../../../../components/heading/Heading";

const Hero = () => {
  return (
    <>
      <section className="hero-home">
        <div className="container">
          <Heading
            title="Serach Your Next Home"
            subtitle="Find new & featured property located in your city."
          />
          <form action="" className="flex">
            <div className="box">
              <span>City/Street</span>
              <input
                type="text"
                placeholder="Location"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Location")}
              />
            </div>
            <div className="box">
              <span>Property type</span>
              <input
                type="text"
                placeholder="Property type"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Property type")}
              />
            </div>
            <div className="box">
              <span>Price Range</span>
              <input
                type="text"
                placeholder="Price Range"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Price Range")}
              />
            </div>
            <div className="box">
              <h4>Advanced Filter</h4>
              <button className="btn">
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
