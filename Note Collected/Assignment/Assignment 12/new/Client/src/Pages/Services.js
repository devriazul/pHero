import React from "react";
import Loading from "../components/Loading";
import Product from "../components/Product";
import useProducts from "../hooks/useProducts";

const Services = () => {
  const [products, setProducts] = useProducts();
  if(products.length === 0){
    return <Loading/>
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-20 gap-x-4 gap-y-10 place-items-center my-20">
        {
          products.map(product=>{
            return <Product key={product._id} product={product}/>
          })
        }
      </div>
    </div>
  );
};

export default Services;
