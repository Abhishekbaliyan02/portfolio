import React from "react";
import "./Portfolio.css";
import resume from "../images/resume.pdf";

export const Home = () => {
  return (
    <div className="home-page" id="homepage">
      <div className="image"></div>
      <div className="data-home-page">
        <h1>
          Building Seamless Digital Interfaces with <span>Precision</span> and{" "}
          <span>Passion</span>
        </h1>
        <p>
          Hi! I'm Abhishek, a Frontend Developer and an Open source contributor
        </p>
        <button class="neon-button">
          <a href={resume} target="_blank">
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
};
