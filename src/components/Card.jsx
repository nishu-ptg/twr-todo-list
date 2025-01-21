import React from "react";

const Card = ({
  children,
  bg = "bg-gradient-to-br from-white to-slate-50",
  padding = "p-[1.6vw] md:p-[1vw]",
  rounded = "rounded-lg",
  shadow = "shadow-lg",
  additionalClass = "",
  style = {},
}) => {
  return (
    <div
      className={`${bg} ${padding} ${rounded} ${shadow} ${additionalClass}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
