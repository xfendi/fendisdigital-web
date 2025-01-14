import React from "react";
import { Link } from "react-router-dom";

import Image from "../assets/images/header.png";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="flex flex-col gap-10 flex-1">
        <div className="font-bold text-5xl md:text-7xl 2xl:text-9xl">
          Rozpocznij Swój Biznes Online Teraz!
        </div>
        <div className="text-gray-500 md:w-1/2 w-full">
          Skontaktuj się ze mną przez DM, a pomogę Ci zaplanować pierwsze kroki.
          Podzielę się sprawdzonymi wskazówkami, które pozwolą Ci zaoszczędzić
          czas i uniknąć błędów. Odbierz także darmowy e-book z praktycznymi
          poradami na start.
        </div>
        <Link
          className="p-3 px-7 w-max bg-black text-white rounded-full transition-all duration-300 hover:bg-neutral-800"
          to="/oferta"
        >
          Dowiedz się więcej
        </Link>
      </div>
      <div className="flex-1">
        <img src={Image} alt="" className="ml-auto w-[90%]"  />
      </div>
    </div>
  );
};

export default Header;
