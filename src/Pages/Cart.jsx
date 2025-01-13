import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartProductCard from "../Components/CartProductCard";

const Cart = () => {
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <div>
      <h2 className="font-semibold text-xl p-5 bg-blue-200">Cart</h2>
      {productsCount > 0 ? (
        <>
          {cart.items.map((product, index) => (
            <CartProductCard id={product.id} index={index} />
          ))}
          <div className="bg-blue-200 p-5 flex items-center justify-between">
            <button className="p-2 px-5 bg-black text-white rounded-xl transition-all duration-300 hover:bg-neutral-700">
              Checkout
            </button>
            <p>
              Total:{" "}
              <span className="font-bold">
                {cart.getTotalCost().toFixed(2)}
              </span>{" "}
              PLN
            </p>
          </div>
        </>
      ) : (
        <p className="p-5">Your cart is empty :(</p>
      )}
    </div>
  );
};

export default Cart;
