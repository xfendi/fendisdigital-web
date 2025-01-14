import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { IoMenu } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <div className="flex justify-between items-center">
      <Link className="font-semibold text-2xl" to="/">
        Fendis Digital
      </Link>
      <ul className="hidden md:flex items-center gap-5">
        <li>
          <Link className="text-md font-medium text-black transition-all duration-300 hover:text-neutral-800" to="/about">
            O Mnie
          </Link>
        </li>
        <li>
          <Link className="text-md font-medium text-black transition-all duration-300 hover:text-neutral-800" to="/oferta">
            Oferta
          </Link>
        </li>
        <li>
          <Link className="text-md font-medium text-black transition-all duration-300 hover:text-neutral-800" to="/free">
            Darmowy E-Book
          </Link>
        </li>
      </ul>
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
        <IoMenu className="text-3xl" />
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
