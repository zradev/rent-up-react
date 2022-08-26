import React from "react";
import img from "../../../assets/images/pricing.jpg";
import PriceCard from "../../home/components/price/PriceCard";
import Hero from "../../../components/hero/Hero";

const Pricing = () => {
  return (
    <>
      <section className="pricing">
        <Hero
          name="30 days money back guarantee"
          title="No Extra Fees. Friendly Support"
          cover={img}
        />
        <div className="price container">
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Pricing;
