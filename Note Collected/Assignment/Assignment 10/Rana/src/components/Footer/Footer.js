import React from "react";
import "./Footer.css";
const date = new Date();
const Footer = () => {
  return (
    <div className="position-relative">
      <footer className="bg-dark text-white py-3 pt-4 ">
        <p className="text-center">
          © {date.getFullYear()} - E-tutor. Develop by - {""}
          <a
            href="https://github.com/swdrana"
            className=" text-decoration-none"
            target="_blank"
          >
            swdRana
          </a>
          , All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
