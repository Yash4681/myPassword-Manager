import React from "react";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav className="bg-slate-300 h-10 py-1">
      <div className="flex justify-between px-10">
        <Logo size="xl" />
        <button className="flex justify-center items-center bg-violet-500 px-2 font-bold rounded-full">
          <img className="mr-2" src="./images/github.svg" alt="GitHub Logo" />
          Github
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
