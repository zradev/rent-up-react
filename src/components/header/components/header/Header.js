import React, { useState } from "react";
import logo from "../../../../assets/images/logo.png";
import { FaSignInAlt, FaTimes, FaBars } from "react-icons/fa";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Menu from "../menu/Menu";

const Header = () => {
  const [navList, setNavList] = useState(false);

  const handleClickAway = () => {
    setNavList(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src={logo} alt="wtf" />
          </div>
          <Menu navList={navList} />
          <div className="button flex">
            <h4>
              <span>2</span> My List
            </h4>
            <button className="btn1">
              Sign In <FaSignInAlt />
            </button>
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>
    </ClickAwayListener>
  );
};

export default Header;
