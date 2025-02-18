import React from "react";
import { ProductsArray } from "../ProductsArray";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        className="flex flex-col gap-10 text-center justify-center items-center px-5 py-[15%] md:py-[5%] md:px-[10%] 2xl:px-[15%]"
        id="oferta"
      >
        <div className="bg-blue-500 p-2 px-4 text-sm rounded-xl">Our Plans</div>
        <div className="text-5xl sm:text-7xl" style={{ lineHeight: 1.2 }}>
          Wybierz Swój Program
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          {ProductsArray.map((product, index) => (
            <ProductCard product={product} index={index} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
