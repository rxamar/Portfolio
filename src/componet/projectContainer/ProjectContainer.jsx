import React from "react";
import "./projectContainer.css";
import { Element } from "react-scroll";
export const ProjectContainer = () => {
  const clone_project = [
    {
      img: "https://image.tmdb.org/t/p/original/nBrkOZyI75artyizuBFeya48KbO.jpg",
      title: "Netflix_Clone",
      desc: "Explore a world of entertainment with our Netflix clone, a meticulously crafted streaming platform that brings the best of movies and TV shows to your fingertips. Immerse yourself in a seamless user experience reminiscent of the beloved original, as you discover a vast library of content spanning various genres.",
    },
  ];
  return (
    <div>
      <Element>
        <div className="projectContainer">
          <div className="textContainer">
            <h4>Project</h4>
            <p>
              Here is a project that I've completed, aimed at making
              entertainment more accessible and user-friendly.
            </p>
          </div>
          <div className="projectContainer_project">
            {clone_project.map((project, index) => (
              <div className="project" key={index}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="projectImage"
                />
                <div className="projectDetails">
                  <h2 className="projectTitle">{project.title}</h2>
                  <p className="projectDesc">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </div>
  );
};
