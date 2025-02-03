import React from "react";
import { useUser } from "../../Context/UserContext";

const Main = () => {
  const { user } = useUser();

  return (
    <div
      data-aos="fade-up"
      className="text-white"
    >
      <h1 className="text-2xl">
        Witaj, <span className="text-blue-500">{user.displayName}</span>!
      </h1>
    </div>
  );
};

export default Main;
