import React from "react";
import {toast} from 'react-toastify'
const AddProduct = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const price = Number.parseFloat(e.target.price.value);
    const minimumOrderQuantity = Number.parseInt(
      e.target.minimumOrderQuantity.value
    );
    const availableQuantity = Number.parseInt(e.target.availableQuantity.value);
    const description = e.target.description.value;
    const imgLink = e.target.imgLink.value;
    const item = {
      productName,
      price,
      minimumOrderQuantity,
      availableQuantity,
      description,
      imgLink,
    };
    console.log(item);

    // send data to the server
    fetch("https://etools-server.herokuapp.com/add", {
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
          e.target.reset();
      });
  };
  return (
    <div className="py-20 h-full rounded-xl">
      <h1 className="text-center text-2xl mb-5">Add A Product</h1>
      <form
        onSubmit={handelSubmit}
        className="flex flex-col gap-4  items-center"
      >
        <input
          type="text"
          name="productName"
          className="input w-full max-w-xs"
          placeholder="Product Name"
        />
        <input
          type="number"
          name="price"
          className="input w-full max-w-xs"
          placeholder="Price"
        />
        <input
          type="text"
          name="description"
          className="input w-full max-w-xs"
          placeholder="Description"
        />
        <input
          type="number"
          name="minimumOrderQuantity"
          className="input w-full max-w-xs"
          placeholder="Minimum Order"
        />
        <input
          type="number"
          name="availableQuantity"
          className="input w-full max-w-xs"
          placeholder="Available Quantity"
        />
        <input
          type="text"
          name="imgLink"
          className="input w-full max-w-xs"
          placeholder="Image Link"
        />
        <input
          type="submit"
          name=""
          className="input w-full max-w-xs btn btn-primary"
        />
      </form>
    </div>
  );
};

export default AddProduct;
