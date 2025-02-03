import React from "react";
import { NavLink } from "react-router-dom"; // Używamy NavLink

import { useUser } from "../../Context/UserContext";

import FLogo from "../../assets/images/f-logo.png"; // Wczytanie logo Fendis Digital

import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ChecklistRoundedIcon from "@mui/icons-material/ChecklistRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import DynamicFormRoundedIcon from "@mui/icons-material/DynamicFormRounded";
import DuoRoundedIcon from "@mui/icons-material/DuoRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";

const Sidebar = () => {
  const { logout } = useUser();

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="rounded-3xl flex flex-col justify-between items-center"
    >
      <div className="flex flex-col gap-2">
        <NavLink
          to="/panel"
          end
          className={({ isActive }) =>
            isActive
              ? "p-4 bg-neutral-300 text-blue-500 rounded-3xl transition-all duration-300" // Aktywny link
              : "p-4 rounded-3xl transition-all duration-300 hover:bg-neutral-900"
          }
        >
          <GridViewRoundedIcon />
        </NavLink>
        <NavLink
          to="/panel/ebooks"
          className={({ isActive }) =>
            isActive
              ? "p-4 bg-neutral-300 text-blue-500 rounded-3xl transition-all duration-300"
              : "p-4 rounded-3xl transition-all duration-300 hover:bg-neutral-900"
          }
        >
          <LibraryBooksIcon />
        </NavLink>
        <NavLink
          to="/panel/projects"
          className={({ isActive }) =>
            isActive
              ? "p-4 bg-neutral-300 text-blue-500 rounded-3xl transition-all duration-300"
              : "p-4 rounded-3xl transition-all duration-300 hover:bg-neutral-900"
          }
        >
          <HandymanRoundedIcon />
        </NavLink>
        <NavLink
          to="/panel/check-list"
          className={({ isActive }) =>
            isActive
              ? "p-4 bg-neutral-300 text-blue-500 rounded-3xl transition-all duration-300"
              : "p-4 rounded-3xl transition-all duration-300 hover:bg-neutral-900"
          }
        >
          <ChecklistRoundedIcon />
        </NavLink>
        <NavLink
          to="/panel/road-maps"
          className={({ isActive }) =>
            isActive
              ? "p-4 bg-neutral-300 text-blue-500 rounded-3xl transition-all duration-300"
              : "p-4 rounded-3xl transition-all duration-300 hover:bg-neutral-900"
          }
        >
          <MapRoundedIcon />
        </NavLink>
        <NavLink
          to="/panel/quests"
          className={({ isActive }) =>
            isActive
              ? "p-4 bg-neutral-300 text-blue-500 rounded-3xl transition-all duration-300"
              : "p-4 rounded-3xl transition-all duration-300 hover:bg-neutral-900"
          }
        >
          <DynamicFormRoundedIcon />
        </NavLink>
        <NavLink
          to="/panel/courses"
          className={({ isActive }) =>
            isActive
              ? "p-4 bg-neutral-300 text-blue-500 rounded-3xl transition-all duration-300"
              : "p-4 rounded-3xl transition-all duration-300 hover:bg-neutral-900"
          }
        >
          <DuoRoundedIcon />
        </NavLink>
        <NavLink
          to="/panel/forum"
          className={({ isActive }) =>
            isActive
              ? "p-4 bg-neutral-300 text-blue-500 rounded-3xl transition-all duration-300"
              : "p-4 rounded-3xl transition-all duration-300 hover:bg-neutral-900"
          }
        >
          <ForumRoundedIcon />
        </NavLink>
      </div>

      <button
        onClick={logout}
        className="cursor-pointer p-4 rounded-3xl transition-all duration-300 hover:bg-red-950"
      >
        <LogoutRoundedIcon className="text-red-500" />
      </button>
    </div>
  );
};

export default Sidebar;
