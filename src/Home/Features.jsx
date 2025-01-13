import React from "react";
import { Link } from "react-router-dom";

import Bike from "../assets/svg/bike.svg";
import Phone from "../assets/svg/phone.svg";
import Tips from "../assets/images/tips.png";

const Features = () => {
  return (
    <div className="flex flex-col gap-20 mt-20">
      <div className="w-2/5 text-center m-auto flex flex-col gap-5">
        <div className="font-bold text-6xl">
          Praktyczny Przewodnik dla Początkujących
        </div>
        <div className="text-gray-500">
          Darmowy e-book, który pomoże Ci przejść od pomysłu do działającego
          biznesu online. Odkryj kluczowe kroki, strategie i błędy, które warto
          unikać.
        </div>
      </div>
      <div className="flex gap-5 h-[650px] px-44">
        <div className="bg-yellow-100 flex-1 rounded-[50px] p-5 flex flex-col gap-5 justify-between">
          <img src={Bike} alt="bike" className="w-2/3 m-auto" />
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-semibold pl-5">
              Pierwsze kroki w biznesie online
            </div>
            <div className="w-4/5 pl-5">
              Poznaj fundamenty, które pozwolą Ci skutecznie rozpocząć
              działalność w internecie i budowanie marki.
            </div>
            <Link to="/oferta" className="font-semibold underline mx-auto">
              Dowiedz się więcej
            </Link>
          </div>
        </div>

        <div className="bg-orange-100 flex-1 rounded-[50px] p-5 flex flex-col gap-5 justify-between">
          <img src={Tips} alt="bike" className="w-full m-auto" />
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-semibold pl-5">
              Kluczowe strategie dla sukcesu
            </div>
            <div className="w-4/5 pl-5">
              Dowiedz się, jakie strategie marketingowe i sprzedażowe działają
              najlepiej w biznesie online, i jak je wykorzystać od samego
              początku.
            </div>
            <Link to="/oferta" className="font-semibold underline mx-auto">
              Dowiedz się więcej
            </Link>
          </div>
        </div>

        <div className="bg-red-100 flex-1 rounded-[50px] p-5 flex flex-col gap-5 justify-between">
          <img src={Phone} alt="bike" className="w-4/5 m-auto" />
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-semibold pl-5">
              Najczęstsze błędy i jak ich unikać
            </div>
            <div className="w-4/5 pl-5">
              Unikaj pułapek, które mogą opóźnić rozwój Twojego biznesu. Nasz
              e-book pomoże Ci zidentyfikować najczęstsze błędy i zapobiec ich
              wystąpieniu.
            </div>
            <Link to="/oferta" className="font-semibold underline mx-auto">
              Dowiedz się więcej
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
