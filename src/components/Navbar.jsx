import React from "react";
import "./Portfolio.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="main-navbar">
        <ul>
          <li>
            <a href="#aboutpage">ABOUT ME</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contactpage">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
