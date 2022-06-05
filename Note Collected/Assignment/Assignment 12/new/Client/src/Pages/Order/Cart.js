import { MdCancel } from "react-icons/md";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useCart from "../../hooks/useCart";
import Loading from "../../components/Loading";
import useUserInfo from "../../hooks/useUserInfo";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [user, loading, error] = useAuthState(auth);
  const [cart, setCart] = useCart(user?.email);
  const [deleteItem, setDeleteItem] = useState("");
  const [userInfo, setUserInfo] = useState({});
  let subTotal = 0;
  cart.map((o) => {
    if (!o.isPaid) {
      subTotal = o.totalPrice + subTotal;
    }
  });
  const navigate = useNavigate();
  if (loading) {
    return <Loading />;
  }
  if (user) {
    fetch(`https://etools-server.herokuapp.com/userInfo/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }
  // console.log(userInfo);

  // for cancel order

  const handelDelete = () => {
    fetch(`https://etools-server.herokuapp.com/deleteFromCart/${deleteItem}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = cart.filter((odr) => odr._id !== deleteItem);
          setCart(remaining);
        }
      });
  };

  const handelCartForm = (e) => {
    e.preventDefault();
    const phone = e.target.tel.value;
    const address = e.target.address.value;
    const updatedUserInfo = { phone, address };
    if (user) {
      const email = user.email;
      // console.log(updatedUserInfo);

      // send user Info to database
      if (email !== null) {
        fetch(`https://etools-server.herokuapp.com/newUser/${email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedUserInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/payment");
            // toast.info("Updated Done!", { theme: "colored" });
            // e.target.reset();
          });
      }
    }
  };

  if (!cart.length) {
    return (
      <h1 className="text-center text-2xl text-secondary">
        Your cart is empty
      </h1>
    );
  }
  return (
    <div className="lg:px-20">
      <input type="checkbox" id="conform-delete" className="modal-toggle" />
      <label htmlFor="conform-delete" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">Are you sure want to delete?</h3>

          <div className="modal-action">
            <label
              htmlFor="conform-delete"
              className="btn btn-error float-right "
              onClick={handelDelete}
            >
              Yes
            </label>
            <label htmlFor="conform-delete" className="btn btn-success">
              No
            </label>
          </div>
        </label>
      </label>

      {cart.length === 0 ? (
        <h1 className="text-center text-2xl text-secondary">
          Your cart is empty
        </h1>
      ) : (
        <div className="flex  flex-col lg:flex-row w-full ">
          <table className="table w-full lg:w-2/3">
            <thead>
              <tr className="text-center">
                <th></th>
                <th>Name</th>
                <th>Photo</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((order, index) => {
                const {
                  _id,
                  productId,
                  myOrderQuantity,
                  totalPrice,
                  userEmail,
                  productName,
                  price,
                  minimumOrderQuantity,
                  availableQuantity,
                  description,
                  imgLink,
                  isPaid,
                } = order;
                return (
                  <tr key={order._id} className="">
                    <th>{index + 1}</th>
                    <th>{productName}</th>
                    <td>
                      <img
                        className=" w-20 lg:w-40 max-w-xl"
                        src={imgLink}
                        alt=""
                      />
                    </td>
                    <td>{myOrderQuantity}</td>
                    <td>$ {totalPrice}</td>
                    <td>
                      {isPaid ? (
                        <p>Paid</p>
                      ) : (
                        <label
                          htmlFor="conform-delete"
                          className="btn bg-transparent hero-overlay border-0 hover:bg-transparent btn-sm"
                          onClick={() => setDeleteItem(_id)}
                        >
                          <MdCancel
                            className=" hover:text-primary"
                            size={20}
                            color="red"
                          />
                        </label>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex flex-col w-full lg:1/3 p-20 justify-center">
            <form className="form-control" onSubmit={handelCartForm}>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  readOnly
                  disabled
                  className="input w-full "
                />
              </label>

              <label className="label">
                <span className="label-text">Your E-Mail</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={user?.email}
                  readOnly
                  disabled
                  className="input w-full rounded-xl"
                />
              </label>

              <label className="label">
                <span className="label-text">Your Phone</span>
              </label>
              <label className="input-group">
                <input
                  type="tel"
                  name="tel"
                  defaultValue={userInfo?.phone}
                  className="input  input-bordered w-full rounded-xl"
                  required
                />
              </label>

              <label className="label">
                <span className="label-text">Shipping Address</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                name="address"
                defaultValue={userInfo?.address}
                placeholder="Your Address"
                required
              ></textarea>
              <p className="text-center mt-5">SubTotal $ {subTotal}</p>
              <input
                className="btn btn-primary my-5"
                type="submit"
                value="Place Order"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
