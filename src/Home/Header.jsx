import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col gap-10 items-center text-center h-screen py-[10%] m-auto px-5 md:px-[10%] 2xl:px-[15%]">
      <div
        className="text-5xl sm:text-7xl font-semibold"
        style={{ lineHeight: 1.2 }}
      >
        Twórz, Skaluj,{" "}
        <span className="text-blue-500">Zarabiaj – Twoja Biblioteka</span>{" "}
        Wiedzy Web & Biznes
      </div>
      <div className="text-gray-100 text-lg md:w-2/3">
        Skontaktuj się ze mną przez <b>DM</b>, a pomogę Ci zaplanować{" "}
        <b>pierwsze kroki</b>. Odbierz także <b>darmowy e-book</b> z
        praktycznymi poradami na start.
      </div>
      <div
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: document.querySelector("#free").offsetTop,
            behavior: "smooth",
          });
        }}
      >
        <Link className="p-5 px-10 text-lg font-medium w-max rounded-3xl transition-all duration-300 bg-blue-500 hover:bg-blue-600">
          Darmowe Wprowadzenie
        </Link>
      </div>
    </div>
  );
};

export default Header;
