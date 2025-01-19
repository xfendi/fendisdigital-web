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
        <div className="py-5 md:px-[15%] 2xl:px-[20%] flex flex-col gap-20 bg-neutral-950 !text-white">
          <NavBar />
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
