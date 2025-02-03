import React from "react";

const Loading = ({ big }) => {
  return <div className={`loader m-auto ${big && "!w-16 !h-16 !border-t-4"}`}></div>;
};

export default Loading;
