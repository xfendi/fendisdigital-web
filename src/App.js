import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProvider from "./Context/CartContext";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import Landing from "./Pages/Landing";
import Success from "./Pages/Success";
import Cancel from "./Pages/Cancel";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="flex flex-col bg-neutral-950 !text-white">
          <NavBar />
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
