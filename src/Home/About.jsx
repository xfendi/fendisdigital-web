import React from "react";

import Avatar from "../assets/images/avatar.png";

const About = () => {
  return (
    <div
      className="flex flex-col gap-10 text-center justify-center items-center px-5 pb-[15%] md:pb-[5%] md:px-[10%] 2xl:px-[15%]"
      id="about"
    >
      <div className="text-5xl sm:text-7xl" style={{ lineHeight: 1.2 }}>
        Kim jestem i dlaczego warto mi zaufać?
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <img src={Avatar} alt="" className="w-full md:w-[40%] rounded-3xl" />
        <h1 className="text-lg text-start flex-1 p-5 bg-neutral-900 rounded-3xl border-2 border-neutral-800">
          Cześć, jestem Michał. Od kilku lat pasjonuję się tworzeniem stron
          internetowych i aplikacji, szczególnie w technologii <b>React.js</b>.
          <br /> <br />
          Znam wyzwania, z jakimi mierzą się osoby rozpoczynające swoją przygodę
          z programowaniem i biznesem, bo sam przeszedłem tę drogę od pierwszych
          porażek, przez kolejne próby, aż do <b>osiągnięcia sukcesów</b>,
          którymi dziś mogę się podzielić.
          <br /> <br />
          Kiedy zaczynałem, czułem się zagubiony podobnie jak wielu z Was.
          Oglądałem filmy na YouTube, kupowałem kursy i szukałem{" "}
          <b>„idealnej metody”</b> na zarabianie w internecie. Doświadczyłem
          rozczarowań, takich jak kursy, które okazywały się stratą pieniędzy,
          czy projekty, które nie przynosiły rezultatów. Jednak każde z tych
          doświadczeń nauczyło mnie czegoś ważnego dlatego teraz postanowiłem
          dzielić się wiedzą z innymi czego skutkiem tez jest stworzenie
          platformy Fendis Digital.
        </h1>
      </div>
    </div>
  );
};

export default About;
