import React from "react";
import img from "../../../assets/images/about.jpg";
import Hero from "../../../components/hero/Hero";
import RecentCard from "../../home/components/recent/RecentCard";

const Blog = () => {
  return (
    <>
      <section className="blog-out mb">
        <Hero name="Blog" title="Blog Grid - Our Blogs" cover={img} />
        <div className="container recent">
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
