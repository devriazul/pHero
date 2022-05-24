import React from "react";
import { Button } from "react-bootstrap";
import "./Checkout.css";
const Checkout = () => {
  const order = () => {
      alert('Successful! i will try to contact you soon. Thanyou!');
    // return <h1>  </h1>;
  };

  const selectedItem = JSON.parse(localStorage.getItem("selectedItem")); // default value null
  if (selectedItem) {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center container border rounded-3 my-4 p-2">
          <img src={selectedItem.img} className="w-25 rounded-3" alt="" />
          <div className="w-75 mx-5">
            <h3>Selected Item: {selectedItem.name}</h3>
            <p>Rating : {selectedItem.ratings}</p>
            <p>Description : {selectedItem.text}</p>
            <p>Price : {selectedItem.ratings}</p>
          </div>
        </div>
        <div className="container text-center border rounded-3 my-4 p-2">
          <h3>Your Address</h3>

          <div >
            <label htmlFor="name" className="me-3">Name: </label>
            <input type="text" name="name" id="" />
            <br /><br />
            <label htmlFor="mail" className="me-4">Email: </label>
            <input type="email" name="mail" id="" />
            <br />
            <br />
            <label className="me-3">Address: </label>
            <textarea name="" id="" cols="20" rows="6"></textarea>
            <br />
            <Button onClick={order}>Submit</Button>
          </div>
        </div>
      </>
    );
  }
  return;
};

export default Checkout;
