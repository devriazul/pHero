import React from "react";

const Top10 = () => {
  return (
    <div className="py-20">
      <h1 className="text-center font-extrabold text-4xl mb-5">
        Top 10 Products
      </h1>
      <p className="text-center mb-10">Scroll (Left || Right) to see more...</p>
      <div className="carousel rounded-box product-carousel">
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/jrR1KhS/image.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/z8TK53Y/image.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/kGc0jxk/image.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/fGMnHSW/image.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/gMfYg05/image.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/47hzcCx/image.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/V9q5zbH/image.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/y87729w/image.png"
            className="h-80"
            alt="Burger"
          />
        </div>
      </div>
    </div>
  );
};

export default Top10;
