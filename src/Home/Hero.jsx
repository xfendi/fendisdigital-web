import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [email, setEmail] = useState();

  return (
    <div
      className="flex flex-col gap-10 text-center justify-center items-center px-5 py-[15%] md:py-[5%] md:px-[10%] 2xl:px-[15%]"
      id="newsletter"
    >
      <div className="bg-blue-500 p-2 px-4 text-sm rounded-xl">Start</div>
      <div className="text-5xl sm:text-7xl" style={{ lineHeight: 1.2 }}>
        Rozpocznij naukę web dev i zacznij zarabiac!{" "}
      </div>
      <form className="flex flex-col sm:flex-row gap-5 items-center mx-auto w-full justify-center">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full md:w-96 h-12 px-5 text-white rounded-2xl bg-neutral-900 border-2 border-neutral-800"
          required
        />
        <Link
          to={`/register?email=${email}`}
          className="text-[15px] flex items-center justify-center font-medium w-full md:w-28 h-12 rounded-2xl transition-all duration-300 bg-blue-500 hover:bg-blue-600"
        >
          Kontynuuj
        </Link>
      </form>
    </div>
  );
};

export default Hero;
