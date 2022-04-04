import React from "react";
import CartInfo from "../CartInfo/CartInfo";
import "./Cart.css";
const Cart = (props) => {
  const { insideCart } = props;
  return (
    <div className="cart">
      <h3>Selected Item: {insideCart.length}</h3>
      { insideCart.map((aCart) => <CartInfo key={aCart.id} aCart={aCart} ></CartInfo>)}
    </div>
  );
};

export default Cart;
