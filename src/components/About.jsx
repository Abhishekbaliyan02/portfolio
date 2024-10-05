import React from "react";
import "./Portfolio.css";

export const About = () => {
  let copyemail = () => {
    navigator.clipboard.writeText("baliyanabhi15@gmail.com");
  };

  return (
    <div className="about-page" id="aboutpage">
      <div className="item1">
        <h2>I prioritize client collaboration,fostering open communication</h2>
      </div>
      <div className="item2">
        <h2>I'm very flexible with time zone communications</h2>
      </div>
      <div className="item3">
        <p>I constantly try to improve</p>
        <h2>My Skills</h2>
      </div>
      <div className="item4">
        <h2>
          Bringing creativity and precision to every line of code in my frontend
          projects
        </h2>
      </div>
      <div className="item5">
        <h2>
          DO you want to start a project together?
          <br />{" "}
          <button class="modern-button" onClick={copyemail}>
            <i class="fa-regular fa-copy"></i> E-mail
          </button>
        </h2>
      </div>
      <div className="item6">
        <h2>
          Turning concepts into captivating digital experiences with React.js
          and a keen eye for detail
        </h2>
      </div>
    </div>
  );
};
