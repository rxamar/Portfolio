import React from "react";
import { Element } from "react-scroll";
import "./skillContainer.css";
export const SkillContainer = () => {
  return (
    <div>
      <Element className="skillContainer" id="skills">
        <div className="skillContainer_image"></div>
        <div className="skillText">
          <div class="skills-container">
            <h1>Skills</h1>
            <div class="skill-bar">
              <div class="skill-name">
                HTML
                <p>95%</p>
              </div>
              <div class="skill-bar-container1">
                <div class="skill-level1"></div>
              </div>
            </div>
            <div class="skill-bar">
              <div class="skill-name">
                CSS
                <p>90%</p>
              </div>
              <div class="skill-bar-container2">
                <div class="skill-level2"></div>
              </div>
            </div>
            <div class="skill-bar">
              <div class="skill-name">
                JavaScript
                <p>85%</p>
              </div>
              <div class="skill-bar-container3">
                <div class="skill-level3"></div>
              </div>
            </div>
            <div class="skill-bar">
              <div class="skill-name">
                ReactJS
                <p>85%</p>
              </div>
              <div class="skill-bar-container4">
                <div class="skill-level4"></div>
              </div>
            </div>
            <div class="skill-bar">
              <div class="skill-name">
                GIT & GitHub
                <p>80%</p>
              </div>
              <div class="skill-bar-container5">
                <div class="skill-level5"></div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};
