import React from "react";

import { Link } from "react-router-dom";

const ProductCard = ({ product, index }) => {
  return (
    <div
      key={index}
      className={`p-5 ${
        product.id === 2 ? "bg-neutral-100 text-neutral-950" : "bg-neutral-900"
      } rounded-3xl border-2 ${
        product.id === 2 ? "border-neutral-300" : "border-neutral-800"
      } flex-1 flex flex-col gap-5 text-start`}
    >
      <h2 className="font-medium text-2xl">
        Pakiet <span className="text-blue-500 font-bold">{product.name}</span>
      </h2>
      <p
        className={`${
          product.id === 2 ? "text-neutral-800" : "text-neutral-300"
        } text-md`}
      >
        {product.description}
      </p>
      <p className="font-bold text-4xl text-blue-500">{product.price} PLN</p>
      <Link
        className={`p-3 text-center text-lg font-medium rounded-2xl transition-all duration-300 ${
          product.id === 2
            ? "bg-neutral-800 hover:bg-neutral-900 text-neutral-100"
            : "bg-neutral-100 hover:bg-neutral-200 text-neutral-800"
        }`}
      >
        Zacznij działac!
      </Link>
      <div
        className={`flex flex-col gap-5 pt-5 border-t-2 ${
          product.id === 2 ? "border-neutral-200" : "border-neutral-800"
        }`}
      >
        <div>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
