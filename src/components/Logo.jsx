import React from "react";

const Logo = ({ size }) => {
  return (
    <div className={`text-${size} text-center font-bold`}>
      <span className="text-violet-700">&lt;</span>
      Pass
      <span className="text-violet-700">/OP&gt;</span>
    </div>
  );
};

export default Logo;
