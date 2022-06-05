import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useCart from "../../hooks/useCart";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [user] = useAuthState(auth);
  const [cart, setCart] = useCart(user?.email);
  const navigate = useNavigate();
  let subTotal = 0;
  cart.map((o) => {
    if (!o.isPaid) {
      subTotal = o.totalPrice + subTotal;
    }
  });
  let isPaid = false;
  const handelPayment = async (e) => {
    e.preventDefault();
    if (subTotal <= Number.parseFloat(e.target.inputMoney.value)) {
      isPaid = true;
    } else {
      alert("More money need!");
    }
    if (isPaid) {
      await ordered();
    }
  };
  const ordered = () => {
    const paidStatus = { isPaid: true };
    cart.map((order) => {
      fetch(`https://etools-server.herokuapp.com/single-cart/${order._id}`)
        .then((res) => res.json())
        .then((data) => console.log(data));

      // update paid status in cart
      fetch(
        `https://etools-server.herokuapp.com/updateCartStatus/${order._id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(paidStatus),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          //to get above updated paid data
          fetch(`https://etools-server.herokuapp.com/single-cart/${order._id}`)
            .then((res) => res.json())
            .then((gotedUpdatedCartData) => {
              console.log("gotedUpdatedCartData: ", gotedUpdatedCartData);

              // update: transfer paid order from cartsCollection to ordersCollections
              fetch(
                `https://etools-server.herokuapp.com/update-order/${order._id}`,
                {
                  method: "PUT",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(gotedUpdatedCartData),
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  // e.target.reset();

                  // delete from cart because already added to ordersCollection
                  fetch(
                    `https://etools-server.herokuapp.com/deleteFromCart/${order._id}`,
                    {
                      method: "DELETE",
                    }
                  )
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.deletedCount > 0) {
                        const remaining = cart.filter(
                          (odr) => odr._id !== order._id
                        );
                        setCart(remaining);
                        toast.success("Payment Success.", { theme: "colored" });
                        navigate("/dashboard/my-orders");
                      }
                    });
                });
            });
        });
    });
  };

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <p>You Need to Pay: $ {subTotal}</p>
      <form
        onSubmit={handelPayment}
        className="flex flex-col justify-center items-center gap-5 my-5"
      >
        <input
          type="number"
          className="input input-info"
          name="inputMoney"
          id=""
          placeholder="Type Payable Amount"
        />
        <input type="submit" value="Pay Now" className="btn btn-success" />
      </form>
    </div>
  );
};

export default Payment;
