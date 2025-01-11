import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProvider from "./Context/CartContext";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import Landing from "./Pages/Landing";
import Success from "./Pages/Success";
import Cancel from "./Pages/Cancel";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
