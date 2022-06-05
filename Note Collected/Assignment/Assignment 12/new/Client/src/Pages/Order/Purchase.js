import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://etools-server.herokuapp.com/singleProduct/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);
  const {
    productName,
    price,
    minimumOrderQuantity,
    availableQuantity,
    description,
    imgLink,
  } = product;
  const [myOrderQuantity, setMyOrderQuantity] = useState(0);
  let totalPrice =
    myOrderQuantity * price === 0
      ? minimumOrderQuantity * price
      : myOrderQuantity * price;
  const handelSubmit = async (e) => {
    e.preventDefault();
    await setMyOrderQuantity(minimumOrderQuantity);
    await setMyOrderQuantity(Number.parseInt(e.target.myOrderQuantity.value));

    if (loading) {
      return <h1>Loading...</h1>;
    }
    const userEmail = user.email;
    const item = {
      productId: `${id}`,
      myOrderQuantity: Number.parseInt(e.target.myOrderQuantity.value),
      totalPrice,
      userEmail,
      productName,
      price,
      minimumOrderQuantity,
      availableQuantity,
      description,
      imgLink,
    };
    // console.log(item);

    // send data to the server
    fetch("https://etools-server.herokuapp.com/add-to-cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Item Added!", { theme: "colored" });
      });
  };
  return (
    <form onSubmit={handelSubmit}>
      <div className="card lg:card-side bg-base-100 shadow-xl md:w-2/3 lg:w-1/2 mx-auto">
        <div className="flex flex-col justify-center items-center lg:w-1/3">
          <figure>
            <img className="" src={imgLink} alt={productName} />
          </figure>
          <p>$ {price}</p>
        </div>
        <div className="card-body lg:w-2/3">
          <h2 className="card-title">{productName}</h2>
          <p className="">{description}</p>
          <p className="font-bold">Available Quantity: {availableQuantity}</p>
          <p className="font-bold">
            Minimum Order Quantity: {minimumOrderQuantity}
          </p>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">You Need:</span>
            </label>
            <input
              type="number"
              name="myOrderQuantity"
              min={minimumOrderQuantity}
              max={availableQuantity}
              onChange={(e) => {
                setMyOrderQuantity(e.target.value);
              }}
              placeholder="Your Quantity"
              className="input input-bordered w-full"
              defaultValue={minimumOrderQuantity}
            />
          </div>

          <p className="font-bold">Total Price: $ {totalPrice}</p>

          <div className="card-actions justify-center">
            <input
              type="submit"
              value="Add To Card"
              className="btn btn-secondary"
            />
            <Link to="/cart" className="btn btn-primary">
              Go To Cart
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Purchase;
