import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";
import auth from "../firebase.init";
import useMyOrders from "../hooks/useMyOrders";

const MyOrders = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myOrders, setMyOrders] = useMyOrders(user?.email);
  if (loading || !myOrders.length) {
    return <Loading />;
  }
  return (
    <div>
      My Orders
      <div className="w-full bg-slate-500" >
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Photo</th>
              <th>Order Quantity</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order) => {
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
              //   console.log(user);
              return (
                <tr key={_id}>
                  <td>
                    <div className="flex items-center">
                      <div>
                        <div className="font-bold">{productName}</div>
                        <div className="text-sm opacity-50">
                         Total: $ {totalPrice} (Paid)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-20 h-20">
                        <img
                          src={imgLink}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    {myOrderQuantity}
                    <br />
                    <span className="badge badge-ghost badge-sm">{userEmail}</span>
                  </td>
                  <td>
                    <span className="badge badge-success badge-md">{isPaid && 'Paid'}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
