import React from "react";
import "./Price.css";
import PriceCard from "./PriceCard";
import Heading from "./../../../../components/heading/Heading";

const Price = () => {
  return (
    <>
      <section className="price padding">
        <div className="container">
          <Heading
            title="Select Your Package"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Consequatur expedita ea, sint ut laborum alias!"
          />
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Price;
