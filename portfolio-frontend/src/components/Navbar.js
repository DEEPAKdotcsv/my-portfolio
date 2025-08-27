// src/components/Navbar.js
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-content">
        <a className="brand" href="#home">
          Deepak Padmesh
        </a>
        <nav className="links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
