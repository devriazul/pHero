import React, { useState } from "react";
import Loading from "../../components/Loading";
import useProducts from "../../hooks/useProducts";

const ManageProducts = () => {
  const [products, setProducts] = useProducts();
  const [deleteItem, setDeleteItem] = useState("");
  if (!products.length) {
    <Loading />;
  }
  return (
    <div>
      <div className="">
        <input type="checkbox" id="conform-delete" className="modal-toggle" />
        <label htmlFor="conform-delete" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-lg font-bold">Are you sure want to delete?</h3>

            <div className="modal-action">
              <label
                htmlFor="conform-delete"
                className="btn btn-error float-right "
                onClick={() => {
                  fetch(
                    `https://etools-server.herokuapp.com/deleteProduct/${deleteItem}`,
                    {
                      method: "DELETE",
                    }
                  )
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.deletedCount > 0) {
                        const remaining = products.filter(
                          (product) => product._id !== deleteItem
                        );
                        setProducts(remaining);
                      }
                    });
                }}
              >
                Yes
              </label>
              <label htmlFor="conform-delete" className="btn btn-success">
                No
              </label>
            </div>
          </label>
        </label>

        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Photo</th>
              <th>Price</th>
              <th>Min Order Quantity</th>
              <th>Available Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              const {
                _id,
                productName,
                price,
                minimumOrderQuantity,
                availableQuantity,
                description,
                imgLink,
              } = product;
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{productName}</td>
                  <td>
                    <img src={imgLink} alt="" className="w-20" />
                  </td>
                  <td>$ {price}</td>
                  <td>{minimumOrderQuantity}</td>
                  <td>{availableQuantity}</td>
                  <td>
                    <label
                      htmlFor="conform-delete"
                      className="btn modal-button"
                      onClick={() => setDeleteItem(_id)}
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            {/* <tr>
              <th></th> 
              <th>Name</th> 
              <th>Job</th> 
              <th>company</th> 
              <th>location</th> 
              <th>Last Login</th> 
              <th>Favorite Color</th>
            </tr> */}
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
