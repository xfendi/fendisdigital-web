import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const ProductCard = ({ product, index }) => {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  console.log(cart.items);

  return (
    <div key={index} className="text-center flex flex-col gap-5 flex-1">
      {product.id === 1 && (
        <div className="bg-blue-500 w-max px-3 p-1 rounded-full absolute text-white font-semibold text-[13px]">
          BESTSELLER
        </div>
      )}
      {product.id === 2 && (
        <div className="bg-pink-500 w-max px-3 p-1 rounded-full absolute text-white font-semibold text-[13px]">
          PROMOCJA
        </div>
      )}
      {product.id === 3 && (
        <div className="bg-black w-max px-3 p-1 rounded-full absolute text-white font-semibold text-[13px]">
          PAKIET
        </div>
      )}
      {product.image && (
        <img src={product.image} alt={product.name} className="w-full" />
      )}
      <h2 className="font-semibold text-2xl md:w-4/5 mx-auto">{product.name}</h2>
      <div className="flex flex-col gap-1 mx-auto">
      <p className="font-bold text-xl text-blue-500">{product.price} PLN</p>
      <p className="font-semibold mt-auto text-sm text-gray-500">{product.price} PLN</p>
      </div>
      {productQuantity > 0 ? (
        <div className="flex gap-5 m-auto">
          <button
            className="w-8 h-8 bg-red-500 text-white rounded-lg transition-all duration-300 hover:bg-red-600"
            onClick={() => cart.removeOneFromCart(product.id)}
          >
            -
          </button>
          <span className="font-bold">{productQuantity}</span>
          <button
            className="w-8 h-8 bg-green-500 text-white rounded-lg transition-all duration-300 hover:bg-green-600"
            onClick={() => cart.addOneToCart(product.id)}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="w-max mx-auto p-3 px-7 bg-black text-white rounded-full transition-all duration-300 hover:bg-neutral-700"
          onClick={() => cart.addOneToCart(product.id)}
        >
          Zakup
        </button>
      )}
    </div>
  );
};

export default ProductCard;
