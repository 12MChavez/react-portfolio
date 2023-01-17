import React from "react";
import "../bulma/css/bulma.min.css";
import projectData from "../components/Project/projectData";
import Project from "../components/Project/Project";
import Footer from "../components/Footer";
import { Columns } from "react-bulma-components";
//for each element in projectData, render a Project component with element of projectData
const Portfolio = projectData && (
  <div>
    <Columns
      desktop={{
        narrow: false,
        offset: 4,
        size: 4,
      }}
      fullhd={{
        narrow: false,
        offset: 0,
        size: 3,
      }}
      mobile={{
        narrow: false,
        offset: 2,
        size: 8,
        textAlign: "center",
        textSize: 3,
      }}
      tablet={{
        narrow: false,
        offset: 3,
        size: 6,
      }}
      widescreen={{
        narrow: false,
        offset: 5,
        size: 2,
      }}
    >
      {projectData.map((el) => (
        <Project key={el.key} data={el} />
      ))}
    </Columns>
    <Footer />
  </div>
);

export default Portfolio;
