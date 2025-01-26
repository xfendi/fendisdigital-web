import React from "react";
import Header from "../Home/Header";
import Products from "../Home/Products";
import Features from "../Home/Features";
import About from "../Home/About";
import Hero from "../Home/Hero";
import Benefits from "../Home/Benefits";
import FAQSection from "../Home/FAQ";
import Free from "../Home/Free";

const Landing = () => {
  return (
    <>
      <Header />
      <About />
      <Features />
      <Products />
      <Benefits />
      <Free />
      <FAQSection />
      <Hero />
    </>
  );
};

export default Landing;
