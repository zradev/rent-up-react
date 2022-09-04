import React from "react";
import img from "../../../assets/images/services.jpg";
import FeaturedCard from "../../home/components/featured/FeaturedCard";
import Hero from "../../../components/hero/Hero";

const Services = () => {
  return (
    <>
      <section className="services">
        <Hero name="Services" title="Services - All Services" cover={img} />
        <div className="featured container mb">
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Services;
