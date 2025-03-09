import React from "react";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav className="bg-slate-700 py-1 text-white">
      <div className="flex justify-between md:px-10 mx-10">
        <Logo size="xl" />
        <button className="flex hover:cursor-pointer justify-center items-center text-sm ring-2 ring-white bg-violet-800 px-2 font-bold rounded-full">
          <img className="mr-2" src="./images/github.png" alt="GitHub Logo" />
          Github
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
