import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="image.png" alt="logo" />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/portfolio">Portfolio</Link>
      </div>
      <Button />
    </nav>
  );
};

export default Navbar;
