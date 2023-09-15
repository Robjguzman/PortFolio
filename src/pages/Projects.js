import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import "../styles/Projects.css";

function Projects() {
  // Define custom CSS styles for project links
  const linkStyles = {
    textDecoration: "none", // Remove underlines
    color: "black", // Set the text color to black
  };

  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <Link
              to={`/project/${idx}`}
              key={idx.toString()}
              style={linkStyles} // Apply custom styles to the link
            >
              <ProjectItem id={idx} name={project.name} image={project.image} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
