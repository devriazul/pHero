import React from "react";
import Product from "../../components/Product";
import useProducts from "../../hooks/useProducts";
import Loading from './../../components/Loading'
const FeatureTools = () => {
  const [products, setProducts] = useProducts();
  if(!products.length){
    return <Loading/>
  }
  return (
    <div>
      <div className="py-16 bg-lime-100">
        <h1 className="text-4xl text-center">Latest 6 Items</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-20 gap-x-4 gap-y-10 place-items-center my-20">
        {
          products.length>=6 
          ? 
          products.slice(products.length-6,products.length).map(product=>{
            return <Product key={product._id} product={product}/>
          })
          :
          products.map(product=>{
            return <Product key={product._id} product={product}/>
          })
        }
        </div>
      </div>
    </div>
  );
};

export default FeatureTools;
