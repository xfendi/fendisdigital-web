import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { getProductData } from "../ProductsArray";

const CartProductCard = ({ id, index }) => {
  const product = getProductData(id);

  console.log(id, product);

  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(id);

  console.log(cart.items);

  return (
    <div
      key={index}
      className="border-b p-5 text-center flex justify-between items-center gap-5"
    >
      <h2 className="font-semibold text-xl">{product.name}</h2>
      {productQuantity > 0 ? (
        <div className="flex items-center gap-5">
          <p>
            <span className="font-bold">
              {(productQuantity * product.price).toFixed(2)}
            </span>{" "}
            PLN
          </p>
          <div className="flex gap-5 items-center">
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
        </div>
      ) : (
        <button
          className="p-2 px-5 bg-black text-white rounded-xl transition-all duration-300 hover:bg-neutral-700"
          onClick={() => cart.addOneToCart(product.id)}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default CartProductCard;
