import React from "react";
import "./Portfolio.css";

export const Contact = () => {
  return (
    <div className="contact-page" id="contactpage">
      <div className="upperpart">
        <h1>
          Ready to take <span>your</span> digital <br /> presence to the next
          level?
        </h1>
        <p>
          Reach out to me today and let's discuss how I can help you achieve
          your goals.
        </p>
        <button class="neon-btn">Let's get in touch</button>
      </div>
      <div className="lowerpart">
        <p>
          Copyright <i class="fa-regular fa-copyright"></i> 2024 Abhishek
        </p>
        <div className="icons">
          <a href="https://github.com/Abhishekbaliyan02" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/abhishek0002/" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
