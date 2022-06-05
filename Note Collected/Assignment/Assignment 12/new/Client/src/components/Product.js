import React from "react";
import { useNavigate } from "react-router-dom";
import Purchase from "../Pages/Order/Purchase";

const Product = ({ product }) => {
  const {_id, productName, price, minimumOrderQuantity, availableQuantity, description, imgLink, } = product;
  const navigate=useNavigate();
  const goPurchase = ()=>{
    navigate(`/purchase/${_id}`);
  }
  return (
    <div>
      <div className="card card-compact w-80 h-[550px] bg-base-200 shadow-xl">
        <figure>
          <img
            src={imgLink}
            alt={productName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <p>{description?.length>200?description.slice(0,200):description}</p>
          <div className="flex justify-evenly text-center ">
            <div className=" w-1/3 ">
              <p className=" text-secondary">
                Minimum
                <span className=" text-red-600 font-extrabold text-xl block">
                  {minimumOrderQuantity}
                </span>
                Quantity
              </p>
            </div>
            <div className=" w-1/3">
              <p className=" text-secondary">
                Available<span className=" text-lime-600 font-extrabold text-xl block">{availableQuantity}</span>Items
              </p>
            </div>
            <div className=" w-1/3">
              <p className=" text-secondary">
                Price
                <span className=" text-blue-600 font-extrabold text-xl block">${price}</span>Per Item
              </p>
            </div>
          </div>
          <div className="card-actions justify-center my-4">
            <button className="btn btn-primary" onClick={goPurchase}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
