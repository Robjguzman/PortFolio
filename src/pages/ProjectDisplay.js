import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p>
        <b>Description:</b> {project.description}
      </p>
      <p>
        <b>Main Purpose:</b> {project.projectRole}
      </p>

      <a href={project.github} target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </a>

      <div className="navigation-buttons">
        <Link to="/projects">
          <button id="back">Back to Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectDisplay;
