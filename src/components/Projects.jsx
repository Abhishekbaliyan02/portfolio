import React from "react";
import shoppingimage from "../images/shopping.png";
import quizimage from "../images/quizz.png";
import weatherimage from "../images/weather.png";

export const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>
        My recent <span>projects</span>
      </h1>
      <div className="cards">
        <div className="project-card">
          <img src={shoppingimage} alt="" />
          <h2>Shopping Time (E-commerce website )</h2>
          <p>
            {" "}
            Developed a full-featured e-commerce <br /> web app using React.js,
            enabling users to browse products, add items to a shopping cart, and
            complete purchases. Integrated secure user authentication, dynamic
            routing, and state management with React hooks and Context API for
            seamless user experience and efficient application performance.
          </p>
          <div className="language">
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-react"></i>
          </div>
          <a href="https://shopping-time-two.vercel.app/" target="_Blank">
            Check Live Site <i class="fa-brands fa-telegram"></i>
          </a>
        </div>
        <div className="project-card">
          <img src={weatherimage} alt="" />
          <h2>Weather App</h2>
          <p>
            {" "}
            The user-friendly interface allows user <br /> to search for any
            location and view current conditions such as temperature, humidity,
            and wind speed. The app is fully responsive and optimized for
            seamless performance across devices, making it an efficient tool for
            staying updated on the weather.".
          </p>
          <div className="language">
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-react"></i>
          </div>
          <a href="https://weather-app-drab-delta.vercel.app/" target="_Blank">
            Check Live Site <i class="fa-brands fa-telegram"></i>
          </a>
        </div>
        <div className="project-card">
          <img src={quizimage} alt="" />
          <h2>Quiz Game</h2>
          <p>
            {" "}
            Built a dynamic quiz game using Java <br /> Script, incorporating
            features like a countdown timer, question navigation, and a results
            page displaying total time taken and score. Designed with user
            interaction in mind, including capturing and displaying usernames
            for personalized results
          </p>
          <div className="language">
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-js"></i>
            <div> </div>
            <div> </div>
            <div> </div>
            <div> </div>
          </div>
          <a href="">
            Check Live Site <i class="fa-brands fa-telegram"></i>
          </a>
        </div>
        {/* <div className="project-card">
          <img src={quizimage} alt="" />
          <h2>Quiz Game</h2>
          <p>
            {" "}
            Built a dynamic quiz game using Java <br /> Script, incorporating
            features like a countdown timer, question navigation, and a results
            page displaying total time taken and score. Designed with user
            interaction in mind, including capturing and displaying usernames
            for personalized results
          </p>
          <div className="language">
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-js"></i>
            <div> </div>
            <div> </div>
            <div> </div>
            <div> </div>
          </div>
          <a href="">
            Check Live Site <i class="fa-brands fa-telegram"></i>
          </a>
        </div> */}
      </div>
    </div>
  );
};
