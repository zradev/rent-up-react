import React from "react";
import { nav } from "../../../../data/Data";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

const Menu = (props) => {
  return (
    <div className="nav">
      <ul className={props.navList ? "small" : "flex"}>
        {nav.map((list, index) => (
          <li key={index}>
            <Link to={list.path}>{list.text}</Link>
          </li>
        ))}
        <li key="sign-in-button">
          <div className="btn1">
            <Link to="/login">
              Sign In <FaSignInAlt />
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
