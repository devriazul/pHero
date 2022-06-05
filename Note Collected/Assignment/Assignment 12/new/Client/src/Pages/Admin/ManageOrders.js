import React from "react";
import Loading from "./../../components/Loading";
import { toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import useOrders from "../../hooks/useOrders";

// CALL IT ONCE IN YOUR APP
injectStyle();
const ManageOrders = () => {
  const [orders, setOrders] = useOrders();
  if (!orders.length) {
    return <Loading />;
  }
  const orderShifted = (id) => {
    // for delete a order
    console.log(id);
    fetch(`https://etools-server.herokuapp.com/deleteFromOrders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id);
          toast.success("Order Shifted!", { theme: "colored" });
          setOrders(remaining);
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Name</th>
              <th>Photo</th>
              <th>Order By</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th>{order.productName}</th>
                  <td>
                    <img src={order.imgLink} className="w-20" alt="" />
                  </td>
                  <td>{order.userEmail}</td>
                  <td>{order.myOrderQuantity}</td>
                  <td>
                    {order.isPaid === true ? (
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => orderShifted(order._id)}
                      >
                        Shift
                      </button>
                    ) : (
                      "Unpaid"
                    )}
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

export default ManageOrders;
