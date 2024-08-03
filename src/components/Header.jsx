import React from "react";
import Logo from "../assets/file.png";

function Header() {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-blue-900 w-full">
      <img className="w-36"  src={Logo}></img>
    </div>
  );
}

export default Header;
