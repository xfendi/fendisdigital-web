import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";

import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="flex flex-row justify-between m-5 p-5 md:mx-[10%] 2xl:mx-[15%] bg-neutral-900 rounded-3xl border-2 border-neutral-800"
      id="footer"
    >
      <div>
        © 2025 Fendis Digital.{" "}
        <a
          href="https://yolocode.p/"
          className="hover:underline transiotion-all duration-300 hover:text-blue-500"
        >
          Yolo Solutions
        </a>{" "}
        All rights reserved.
      </div>
      <div className="hidden md:flex gap-5 items-center">
        <a href="" className="transition-all duration-300 hover:text-blue-500">
          <InstagramIcon />
        </a>
        <a href="" className="transition-all duration-300 hover:text-blue-500">
          <FaTiktok />
        </a>
      </div>
    </div>
  );
};

export default Footer;
