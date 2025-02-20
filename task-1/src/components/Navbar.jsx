import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="image.png" alt="logo" />
      <div className="links">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Portfolio</a>
      </div>
      <Button />
    </nav>
  );
};

export default Navbar;
