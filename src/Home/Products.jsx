import React from "react";
import { ProductsArray } from "../ProductsArray";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  return (
    <div className="flex px-44">
      {ProductsArray.map((product, index) => (
        <ProductCard product={product} index={index} />
      ))}
    </div>
  );
};

export default Products;
