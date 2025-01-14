import React from "react";
import { ProductsArray } from "../ProductsArray";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div className="flex flex-col gap-20 md:gap-0 md:flex-row md:px-20 xl:px-44 pt-20" id="oferta">
        {ProductsArray.map((product, index) => (
          <ProductCard product={product} index={index} />
        ))}
      </div>
      <Link to="/oferta" className="mx-auto font-medium underline mt-10">Zobacz Wszystkie Produkty</Link>
    </>
  );
};

export default Products;
