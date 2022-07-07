import React from "react";
import "./About.css";
import Back from "../common/Back";
import img from "../images/about.jpg";
import Heading from "../common/Heading";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus
              eius adipisci, quasi voluptate nemo porro qui maxime,laborum est
              error assumenda,labore quod mollitia iusto aliquid utaperiam
              quidem cumque? Explicabo,sit voluptatem. Ut ullam quam fuga animi,
              iste explicabo cumque maxime autemquae repudiandae aut molestiae.
              At, officia tenetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus
              eius adipisci, quasi voluptate nemo porro qui maxime,laborum est
              error assumenda,labore quod mollitia iusto aliquid utaperiam
              quidem cumque?
            </p>
            <button className="btn2">More About Us</button>
          </div>
          <div className="right row">
            <img src="./immio.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
