import React from "react";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { About } from "./About";
import Skills from "./Skills";
import { Contact } from "./Contact";
import { Navbar } from "./Navbar";

export const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};
