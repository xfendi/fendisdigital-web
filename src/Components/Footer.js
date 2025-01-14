import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";

import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-5 md:flex-row justify-between md:pr-32 mt-20">
        <div className="flex flex-col gap-5">
          <div className="font-bold text-5xl sm:text-7xl">Fendis Digital</div>
          <div className="text-gray-500 md:w-1/3 md:text-lg">
            Pomogę ci zaplanować pierwsze kroki oraz podzielę się sprawdzonymi
            wskazówkami, które pozwolą Ci zaoszczędzić czas i uniknąć błędów.
            Odbierz także darmowy e-book z praktycznymi poradami na start.
          </div>
        </div>
        <div className="flex gap-16 md:gap-32 font-medium">
          <ul className="flex flex-col gap-5 w-max">
            <li>
              <a href="/">O mnie</a>
            </li>
            <li>
              <a href="/">Oferta</a>
            </li>
            <li>
              <a href="/">Darmowy E-Book</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-5 w-max">
            <li>
              <a href="/">Regulamin</a>
            </li>
            <li>
              <a href="/">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between relative font-medium">
        <div>
          © 2025 Fendis Digital.{" "}
          <a
            href="https://yolocode.p/"
            className="text-black hover:underline transiotion-all duration-300 hover:text-blue-500"
          >
            Yolo Solutions
          </a>{" "}
          All rights reserved.
        </div>
        <div className="hidden md:flex gap-5 items-center md:absolute md:left-1/2 md:-translate-x-1/2">
          <a href="">
            <InstagramIcon />
          </a>
          <a href="">
            <FaTiktok />
          </a>
        </div>
        <div className="hidden md:flex gap-5 items-center">
          <a href="/privacy-policy">PRIVACY POLICY</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
