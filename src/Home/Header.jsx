import React from "react";
import { Link } from "react-router-dom";

import Image from "../assets/images/header.png";

const Header = () => {
  return (
    <h2 className="flex gap-5 px-5">
      <div className="flex flex-col gap-5 flex-1">
        <div className="font-bold text-9xl">
          Rozpocznij Swój Biznes Online Teraz!
        </div>
        <div className="text-gray-500 w-1/2">
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
        <img src={Image} alt="" className="mx-auto w-[90%]"  />
      </div>
    </h2>
  );
};

export default Header;
