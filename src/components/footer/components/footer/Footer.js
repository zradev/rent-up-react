import React from "react";
import FooterContact from "../footerContact/FooterContact";
import Navigation from "../navigation/Navigation";
import Subscription from "../subscription/Subscription";

const Footer = () => {
  return (
    <>
      <FooterContact />
      <footer>
        <div className="container">
          <Subscription />
          <Navigation />
        </div>
        <div className="legal">
          <span>2022 RentUP. Developed by Zlatomir Radev.</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
