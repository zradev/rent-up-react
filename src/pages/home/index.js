import React from "react";
import Hero from "./components/hero/Hero";
import Featured from "./components/featured/Featured";
import Recent from "./components/recent/Recent";
import Awards from "./components/awards/Awards";
import Location from "./components/location/Location";
import Team from "./components/team/Team";
import Price from "./components/price/Price";

const index = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
      <Price />
    </>
  );
};

export default index;
