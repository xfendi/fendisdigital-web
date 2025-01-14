import React, { useState } from "react";

import Security from "../assets/svg/security.svg";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
  };

  return (
    <div className="flex flex-col gap-20 mt-20">
      <div className="md:w-3/5 text-center m-auto flex flex-col gap-5">
        <img src={Security} alt="" className="mx-auto w-36" />
        <div className="font-bold text-5xl sm:text-7xl">
          Pozostań na bierząco z wszystkimi nowościami!
        </div>
        <div className="text-gray-500 md:w-2/3 mx-auto">
          Zapisz sie do newslettera aby otrzymywać powiadomoenia o nowych
          produktach lub specjalnych promocjach.
        </div>
      </div>
      <form className="flex flex-col sm:flex-row gap-5 items-center mx-auto w-full justify-center" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 px-6 border w-full md:w-96 text-black rounded-full"
          required
        />
        <button
          type="submit"
          className="p-3 px-7 w-full sm:w-max bg-black text-white rounded-full transition-all duration-300 hover:bg-neutral-800"
        >
          Subskrybuj
        </button>
      </form>
    </div>
  );
};

export default Hero;
