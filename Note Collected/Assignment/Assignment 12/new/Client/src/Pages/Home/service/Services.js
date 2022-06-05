import React from "react";
import { FiTruck, FiPackage } from "react-icons/fi";
import { Ri24HoursLine } from "react-icons/ri";
import { SiLogitech } from "react-icons/si";
import { FaWarehouse } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import "./services.css";
const Services = () => {
  return (
    <div className="container-fluid services-container-wrapper  my-5 ">
      <h3 className="services-tittle mb-5 text-center"> </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        <div className="col-md-4 col-sm-12 col-12">
          <div className="fancy-icon cards g-2 p-3">
            <div>
              <h1 className="fancy-icons">
                {" "}
                <FiTruck></FiTruck>{" "}
              </h1>
            </div>
            <div className="ms-lg-4">
              <h5 className="services-items">CARGO</h5>
              <p>
                We ensure the quality of products with diverse models for demand
                customers, which are imported from countries
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-12">
          <div className="fancy-icon cards g-2 p-3">
            <div>
              <h1 className="fancy-icons">
                {" "}
                <FiPackage></FiPackage>{" "}
              </h1>
            </div>
            <div className="ms-lg-4">
              <h5 className="services-items">PARKAGING AND STORAGE</h5>
              <p>
                We know almost of customers want to receive the products early
                so we try to provide destinations for customers
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-12">
          <div className="fancy-icon cards g-2 p-3">
            <div>
              <h1 className="fancy-icons ">
                {" "}
                <Ri24HoursLine></Ri24HoursLine>{" "}
              </h1>
            </div>
            <div className="ms-lg-4">
              <h5 className="services-items">DOOR-TO-DOOR-DELEVIRY</h5>
              <p>
                Transpress offers complete solutions for all of your business
                storage needs. Door-to-door delivery is not a problem
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-12">
          <div className="fancy-icon cards g-2 p-3">
            <div>
              <h1 className="fancy-icons">
                {" "}
                <SiLogitech></SiLogitech>{" "}
              </h1>
            </div>
            <div className="ms-lg-4">
              <h5 className="services-items">LOGISTICS</h5>
              <p>
                Logistics management involves identifying prospective
                distributors, and determining their effectiveness and
                accessibility.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-12">
          <div className="fancy-icon cards g-2 p-3">
            <div>
              <h1 className="fancy-icons">
                {" "}
                <FaWarehouse></FaWarehouse>{" "}
              </h1>
            </div>
            <div className="ms-lg-4">
              <h5 className="services-items">WAREHOUSING</h5>
              <p>
                You are worried about the day to receive the goods. No doubt, we
                build several convenient storage rooms to restrict the distance.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-12">
          <div className="fancy-icon cards g-2 p-3">
            <div>
              <h1 className="fancy-icons">
                {" "}
                <GiWorld></GiWorld>{" "}
              </h1>
            </div>
            <div className="ms-lg-4">
              <h5 className="services-items">WORLDWIDE TRANSPORT</h5>
              <p>
                Worldwide transport is available use by the general public,
                distinct from modes such as taxicab, carpooling, or hired buses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
