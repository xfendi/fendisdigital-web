import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef?.current?.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  console.log(width, showMenu);

  return (
    <div className="flex justify-between items-center p-5 md:mx-[10%] 2xl:mx-[15%]">
      <Link className="font-semibold text-2xl" to="/">
        Fendis Digital
      </Link>
      <div
        className={`${
          width < 768
            ? "absolute pointer-events-none top-0 left-0 right-0 bottom-0 hidden opacity-0"
            : "opacity-100 flex"
        } ${
          width < 768 &&
          showMenu &&
          "opacity-100 bg-[rgba(0,0,0,0.8)] !pointer-events-auto"
        } transition-all duration-300`}
      >
        <ul
          className={`${
            width < 768 &&
            "!flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          } text-lg md:text-md font-medium hidden md:flex items-center gap-10`}
          ref={menuRef}
        >
          <li
            onClick={(e) => {
              setShowMenu(false);
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector("#about").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            <Link className="transition-all duration-300 hover:text-blue-500">O Mnie</Link>
          </li>
          <li
            onClick={(e) => {
              setShowMenu(false);
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector("#oferta").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            <Link className="transition-all duration-300 hover:text-blue-500">Oferta</Link>
          </li>
          <li
            onClick={(e) => {
              setShowMenu(false);
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector("#free").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            <Link className="transition-all duration-300 hover:text-blue-500">Darmowe Wprowadzenie</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
