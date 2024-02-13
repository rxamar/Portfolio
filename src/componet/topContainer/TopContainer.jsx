import React from "react";
import { Element } from "react-scroll";
import { TopContent } from "../topContent/TopContent";
import "./topContainer.css";
export const TopContainer = () => {
  return (
    <Element name="about" className="topContainer">
      <TopContent />
    </Element>
  );
};
