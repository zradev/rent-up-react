import React from "react";
import { team } from "../../../../data/Data";
import "./Team.css";
import Heading from "../../../../components/heading/Heading";
import {
  FaCheckCircle,
  FaMapMarkedAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Team = () => {
  return (
    <>
      <section className="team background">
        <div className="container">
          <Heading
            title="Our Featured Agents"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Ipsam amet mollitia sit quasi, veniam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam amet mollitia sit quasi, veniam nobis."
          />
          <div className="content mtop grid3">
            {team.map((val, index) => (
              <div className="box" key={index}>
                <button className="btn3">{val.list} Listings</button>
                <div className="details">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <FaCheckCircle className="icon" />
                  </div>
                  <FaMapMarkedAlt />
                  <label htmlFor="">{val.address}</label>
                  <h4>{val.name}</h4>
                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className="button flex">
                    <button>
                      <FaEnvelope />
                      Message
                    </button>
                    <button className="btn4">
                      <FaPhoneAlt />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
