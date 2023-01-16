import React from "react";
import "../bulma/css/bulma.min.css";
import projectData from "../components/Project/projectData";
import Project from "../components/Project/Project";
import Footer from "../components/Footer";

//for each element in projectData, render a Project component with element of projectData
const Portfolio = projectData && (
  <div>
    <div className="columns">
      <div className="column"></div>
    </div>
    {projectData.map((el) => (
      <Project key={el.key} data={el} />
    ))}
    <Footer />
  </div>
);

export default Portfolio;
