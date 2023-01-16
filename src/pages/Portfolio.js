import React from "react";
import "../bulma/css/bulma.min.css";
import Project from "../components/Project/Project";
import projectData from "../components/Project/projectData";

//for each element in projectData, render a Project component with element of projectData
const Portfolio = projectData && (
  <div>
    <div className="columns">
      <div className="column"></div>
    </div>
    {projectData.map((el) => (
      <Project key={el.key} data={el} />
    ))}
  </div>
);

export default Portfolio;
