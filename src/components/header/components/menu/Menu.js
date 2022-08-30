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
            <Link to={list.path} onClick={props.func}>
              {list.text}
            </Link>
          </li>
        ))}
        <li key="sign-in-button">
          <Link to="/login" onClick={props.func} className="sing-in">
            <p>
              Sign In <FaSignInAlt />
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
