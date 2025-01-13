import { createContext, useState } from "react";
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
  const [cartProducts, setCartProducts] = useState([]);

  const getProductQuantity = (productId) => {
    const quantity = cartProducts.find(
      (product) => product.id === productId
    )?.quantity;
    return quantity || 0;
  };

  const addOneToCart = (productId) => {
    const quantity = getProductQuantity(productId);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: productId,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
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
      setCartProducts(
        cartProducts.map((product) =>
          product.id === productId
            ? { ...product, quantity: quantity - 1 }
            : product
        )
      );
    }
  };

  const deleteFromCart = (productId) => {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== productId;
      })
    );
  };

  const getTotalCost = () => {
    let totalCost = 0;

    cartProducts.map((cartItem, index) => {
      const productData = getProductData(cartItem.id);
      totalCost += (productData.price * cartItem.quantity);
    });

    return totalCost;
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