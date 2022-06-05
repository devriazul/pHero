import React from "react";
import "./Home.css";
const BannerSec = () => {
  return (
    <div className="hero min-h-screen banner-bg">
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="px-16">
          <h1
            className="mb-5 text-5xl font-bold"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            NEED NEW TOOLS?
          </h1>
          <p className="mb-5">
            Electronics manufacturing software is a set of tools used by
            manufacturers to plan, execute, and report on the production of
            electronic goods. Common features include supply chain management,
            material supplier planning, recall management, and make/buy
            reporting, among others. By streamlining and automating routine
            processes, electronics manufacturing software helps manufacturers
            increase production while using fewer resources.
          </p>
          <button className="btn btn-primary">Explore Now!</button>
        </div>
      </div>
    </div>
  );
};

export default BannerSec;
