import React from "react";
import { nav } from "../../../../data/Data";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <div className="nav">
      <ul className={props.navList ? "small" : "flex"}>
        {nav.map((list, index) => (
          <li key={index}>
            <Link to={list.path}>{list.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
