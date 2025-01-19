import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col gap-10 items-center text-center px-24 my-36">
      <div
        className="text-4xl sm:text-7xl font-semibold"
        style={{ lineHeight: 1.2 }}
      >
        Twórz, Skaluj,{" "}
        <span className="text-blue-500">Zarabiaj – Twoja Biblioteka</span>{" "}
        Wiedzy Web & Biznes
      </div>
      <div className="text-gray-200 w-full text-xl">
        Skontaktuj się ze mną przez DM, a pomogę Ci zaplanować pierwsze kroki.
        Podzielę się sprawdzonymi wskazówkami, które pozwolą Ci zaoszczędzić
        czas i uniknąć błędów. Odbierz także darmowy e-book z praktycznymi
        poradami na start.
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
        <Link className="p-3 px-7 text-lg font-medium w-max rounded-full transition-all duration-300 bg-blue-500 hover:bg-blue-600">
          Darmowe Wprowadzenie
        </Link>
      </div>
    </div>
  );
};

export default Header;
