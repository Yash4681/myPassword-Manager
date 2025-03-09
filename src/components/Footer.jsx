import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="w-full bg-slate-800 text-white">
      <Logo />
      <span className="flex text-sm justify-center">
        Made with{" "}
        <img className="size-5 mx-1" src="./images/heart.png" alt="heart" /> by
        Yash
      </span>
    </div>
  );
};

export default Footer;
