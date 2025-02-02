import React from "react";

import HTML from "../assets/images/HTML.png";

import FREE_PDF from "../assets/pdf/FREE.pdf";

const Free = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col gap-10 text-center justify-center items-center px-5 py-[15%] md:py-[5%] md:px-[10%] 2xl:px-[15%]"
      id="free"
    >
      <div className="bg-blue-500 p-2 px-4 text-sm rounded-xl">Free</div>
      <div className="text-5xl sm:text-7xl" style={{ lineHeight: 1.2 }}>
        Odbierz Darmowy E-Book{" "}
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <img src={HTML} alt="" className="flex-1 w-full md:w-[40%]" />
        <div className="flex flex-col justify-between gap-5 p-5 bg-neutral-900 rounded-3xl border-2 border-neutral-800 text-start">
          <div className="flex flex-col gap-5">
            <h1 className="font-medium text-xl">
              HTML, CSS, JavaScript i Zrozumienie Web Dev dla Początkujących{" "}
            </h1>
            <p className="text-neutral-300 text-md">
              Chcesz stworzyć własne strony internetowe, ale nie wiesz, od czego
              zacząć? Ten ebook to idealna propozycja dla Ciebie! W prosty
              sposób wprowadzi Cię w podstawy HTML, CSS i JavaScript – trzech
              kluczowych technologii używanych do tworzenia nowoczesnych stron
              WWW. Dowiesz się, jak zbudować strukturę strony za pomocą HTML,
              jak nadać jej styl i responsywność z pomocą CSS, a także jak dodać
              interaktywność za pomocą JavaScriptu. Ebook zawiera nie tylko
              teoretyczną wiedzę, ale także praktyczne projekty, które pomogą Ci
              w pełni zrozumieć te technologie i zastosować je w realnych
              projektach. Idealny dla osób, które zaczynają swoją przygodę z web
              developmentem i chcą szybko zdobyć solidne podstawy! 🚀
            </p>
          </div>
          <a
            href={FREE_PDF}
            className="p-5 px-10 text-lg font-medium w-max rounded-3xl transition-all duration-300 bg-blue-500 hover:bg-blue-600"
          >
            Uzyskaj Dostęp!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Free;
