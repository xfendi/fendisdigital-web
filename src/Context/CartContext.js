import { createContext, useState, useEffect } from "react";
import { getProductData } from "../ProductsArray";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

function CartProvider({ children }) {
  // Pobieranie koszyka z localStorage podczas pierwszego renderu
  const [cartProducts, setCartProducts] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Zapisz koszyk do localStorage za każdym razem, gdy się zmieni
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const getProductQuantity = (productId) => {
    const quantity = cartProducts.find(
      (product) => product.id === productId
    )?.quantity;
    return quantity || 0;
  };

  const addOneToCart = (productId) => {
    const quantity = getProductQuantity(productId);

    if (quantity === 0) {
      setCartProducts((prev) => [
        ...prev,
        {
          id: productId,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts((prev) =>
        prev.map((product) =>
          product.id === productId
            ? { ...product, quantity: quantity + 1 }
            : product
        )
      );
    }
  };

  const removeOneFromCart = (productId) => {
    const quantity = getProductQuantity(productId);

    if (quantity === 1) {
      deleteFromCart(productId);
    } else {
      setCartProducts((prev) =>
        prev.map((product) =>
          product.id === productId
            ? { ...product, quantity: quantity - 1 }
            : product
        )
      );
    }
  };

  const deleteFromCart = (productId) => {
    setCartProducts((prev) =>
      prev.filter((product) => product.id !== productId)
    );
  };

  const getTotalCost = () => {
    return cartProducts.reduce((totalCost, cartItem) => {
      const productData = getProductData(cartItem.id);
      return totalCost + productData.price * cartItem.quantity;
    }, 0);
  };

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
