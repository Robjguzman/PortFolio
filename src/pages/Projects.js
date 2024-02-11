import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import "../styles/Projects.css";



// Add an onProjectClick prop
function Projects({ onProjectClick }) {
  return (
    <div id="projects">
      <div className="projects">
        <h1> My Personal Projects</h1>
        <div className="projectList">
          {ProjectList.map((project, idx) => {
            // Replace Link with div or button and handle the click event
            return (
              <div
                key={idx}
                onClick={() => onProjectClick(idx)} // Call onProjectClick when a project is clicked
                style={{ cursor: "pointer" }} // Add a pointer cursor to indicate clickability
              >
                <ProjectItem id={idx} name={project.name} image={project.image} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;

