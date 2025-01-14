import React from "react";
import { ProductsArray } from "../ProductsArray";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  return (
    <div className="flex flex-col gap-20 md:gap-0 md:flex-row md:px-20 xl:px-44 mt-20">
      {ProductsArray.map((product, index) => (
        <ProductCard product={product} index={index} />
      ))}
    </div>
  );
};

export default Products;
