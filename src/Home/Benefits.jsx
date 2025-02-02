import React from "react";

const Benefits = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col gap-10 text-center justify-center items-center px-5 py-[15%] md:py-[5%] md:px-[10%] 2xl:px-[15%]"
      id="features"
    >
      <div className="bg-blue-500 p-2 px-4 text-sm rounded-xl">Benefits</div>
      <div className="text-5xl sm:text-7xl" style={{ lineHeight: 1.2 }}>
        Korzyści z dołączenia do programu
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="p-5 bg-neutral-900 rounded-3xl border-2 border-neutral-800 flex-1 flex flex-col gap-5 text-start">
          <h1 className="font-medium text-xl">
            Efektywna nauka oparta na praktyce
          </h1>
          <p className="text-neutral-300 text-md">
            Program skupia się na rzeczywistych zastosowaniach web developmentu,
            eliminując zbędną teorię i pozwalając skupić się na praktycznych
            aspektach tworzenia stron i aplikacji.
          </p>
        </div>
        <div className="p-5 bg-neutral-900 rounded-3xl border-2 border-neutral-800 flex-1 flex flex-col gap-5 text-start">
          <h1 className="font-medium text-xl">
            Możliwość budowania własnego portfolio
          </h1>
          <p className="text-neutral-300 text-md">
            Tworząc projekty w ramach kursów i zadań, stopniowo budujesz swoje
            portfolio, które może pomóc Ci w zdobyciu pierwszej pracy lub
            klientów jako freelancer.
          </p>
        </div>
        <div className="p-5 bg-neutral-900 rounded-3xl border-2 border-neutral-800 flex-1 flex flex-col gap-5 text-start">
          <h1 className="font-medium text-xl">
            Elastyczność i dostępność materiałów
          </h1>
          <p className="text-neutral-300 text-md">
            Możesz uczyć się w dowolnym momencie i dostosować harmonogram nauki
            do swoich możliwości. Brak sztywnych terminów pozwala na efektywną
            naukę, niezależnie od innych obowiązków.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
