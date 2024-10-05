import React from "react";
import "./Portfolio.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1>
        My <span>Approach</span>
      </h1>
      <div className="mycards">
        <div class="flipcard">
          <div class="flipcardinner">
            <div class="flipcardfront">
              <h1>Phase 1</h1>
            </div>
            <div class="flipcardback">
              <h1>Planning & Strategy</h1>

              <p>
                We'll collabrate to map out your website's goals,target
                audience, and key functionalities.We'll discuss things like site
                strucuture,navigation, and content requirements.
              </p>
            </div>
          </div>
        </div>
        <div class="flipcard">
          <div class="flipcardinner">
            <div class="flipcardfront">
              <h1>Phase 2</h1>
            </div>
            <div class="flipcardback">
              <h1>Development & Progress Update</h1>

              <p>
                Once we agree on the plan, I cue my lofi playlist and dive into
                coding. From intial sketches to polished code, I keep you
                updated every step of the way.
              </p>
            </div>
          </div>
        </div>
        <div class="flipcard">
          <div class="flipcardinner">
            <div class="flipcardfront">
              <h1>Phase 3</h1>
            </div>
            <div class="flipcardback">
              <h1>Development & Launch</h1>

              <p>
                This is where the magic happens! Based on the approved design,
                I'll translate everything into functional code, building your
                website from the ground up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
