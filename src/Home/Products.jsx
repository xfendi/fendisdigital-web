import React from "react";
import { ProductsArray } from "../ProductsArray";

const Products = () => {
  return (
    <div className="flex gap-5 p-5">
      {ProductsArray.map((product, index) => (
        <div
          key={index}
          className="border rounded-3xl p-5 text-center flex flex-col gap-5"
        >
          <div className="">
            <h2 className="font-semibold text-xl">{product.name}</h2>
            <p>{product.price} PLN</p>
          </div>
          <button className="p-2 px-5 bg-black text-white rounded-xl transition-all duration-300 hover:bg-neutral-700">
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
