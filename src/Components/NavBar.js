import React, { useContext, useState, useEffect, useRef } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

import { IoMenu } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

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
    <div className="flex justify-between items-center">
      <Link className="font-semibold text-2xl" to="/">
        Fendis Digital
      </Link>
      <div
        className={`${
          width < 768
            ? "absolute pointer-events-none top-0 left-0 right-0 bottom-0 opacity-0"
            : "opacity-100"
        } ${
          width < 768 &&
          showMenu &&
          "opacity-100 bg-[rgba(0,0,0,0.8)] !pointer-events-auto"
        } transition-all duration-300`}
      >
        <ul
          className={`${
            width < 768 &&
            "!flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !text-white"
          } text-black text-lg md:text-md font-medium hidden md:flex items-center gap-10 md:gap-5`}
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
            <Link>O Mnie</Link>
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
            <Link>Oferta</Link>
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
            <Link>Darmowy E-Book</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <Link
          className="relative text-xl text-black transition-all duration-300 hover:text-neutral-800"
          to="/cart"
        >
          <IoCartOutline className="text-3xl" />
          {productsCount > 0 && (
            <div className="absolute -bottom-2.5 -right-2.5 text-[11px] bg-red-500 w-5 h-5 flex justify-center items-center rounded-full text-white font-medium">
              <span>{productsCount}</span>
            </div>
          )}
        </Link>
        <IoMenu
          className="text-3xl md:hidden flex"
          onClick={() => setShowMenu(!showMenu)}
        />
        <Link
          className="md:flex hidden p-3 px-7 bg-black text-white rounded-full transition-all duration-300 hover:bg-neutral-800"
          to="/oferta"
        >
          Zobacz Ofertę
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
