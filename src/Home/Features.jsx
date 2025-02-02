import React from "react";

const Features = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col gap-10 text-center justify-center items-center px-5 py-[15%] md:py-[5%] md:px-[10%] 2xl:px-[15%]"
      id="features"
    >
      <div className="bg-blue-500 p-2 px-4 text-sm rounded-xl">
        Main Features
      </div>
      <div className="text-5xl sm:text-7xl" style={{ lineHeight: 1.2 }}>
        Główne funkcje programu
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="p-5 bg-neutral-900 rounded-3xl border-2 border-neutral-800 md:w-[55%] flex flex-col gap-5 text-start">
            <h1 className="font-medium text-xl">
              Pełny dostęp do wiedzy w jednym miejscu
            </h1>
            <p className="text-neutral-300 text-md">
              Kompleksowe ebooki i kursy obejmujące zarówno podstawy, jak i
              zaawansowane aspekty web developmentu. Wszystkie materiały są
              dostępne online, co pozwala uczyć się w dowolnym miejscu i czasie,
              w tempie dostosowanym do Twoich potrzeb.
            </p>
          </div>
          <div className="p-5 bg-neutral-900 rounded-3xl border-2 flex-1 border-neutral-800 flex flex-col gap-5 text-start">
            <h1 className="font-medium text-xl">
              Nauka przez praktyczne projekty
            </h1>
            <p className="text-neutral-300 text-md">
              Każdy kurs zawiera zadania i projekty, które umożliwiają
              praktyczne zastosowanie zdobytej wiedzy. Tworzenie stron i
              aplikacji pozwala budować portfolio, które wyróżni Cię na rynku
              pracy i pomoże zdobyć pierwszych klientów lub pracodawców.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="p-5 bg-neutral-900 rounded-3xl border-2 border-neutral-800 flex-1 flex flex-col gap-5 text-start">
            <h1 className="font-medium text-xl">
              Zawsze aktualna wiedza i technologie
            </h1>
            <p className="text-neutral-300 text-md">
              Treści są stale aktualizowane, aby uwzględniać najnowsze
              technologie, trendy i narzędzia wykorzystywane w branży. Dzięki
              temu masz pewność, że zdobywasz wiedzę, która jest zgodna z
              aktualnymi wymaganiami rynku pracy.
            </p>
          </div>
          <div className="p-5 bg-neutral-900 rounded-3xl border-2 md:w-[55%] border-neutral-800 flex flex-col gap-5 text-start">
            <h1 className="font-medium text-xl">
              Wsparcie i społeczność programistów
            </h1>
            <p className="text-neutral-300 text-md">
              Dołącz do społeczności pasjonatów web developmentu, wymieniaj się
              doświadczeniami i korzystaj z pomocy ekspertów. Uczestnictwo w
              aktywnej grupie pomaga w rozwiązywaniu problemów i zwiększa
              motywację do nauki.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
