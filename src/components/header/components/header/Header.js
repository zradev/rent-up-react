import React, { useState } from "react";
import logo from "../../../../assets/images/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Menu from "../menu/Menu";
import "../../Header.css";

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
            <img src={logo} alt="logo" />
          </div>
          <Menu navList={navList} func={handleClickAway} />
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
