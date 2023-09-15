import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const projectId = parseInt(id, 10); // Parse as an integer
  const project = ProjectList[projectId];

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const prevProjectId = projectId > 0 ? projectId - 1 : null;
  const nextProjectId =
    projectId < ProjectList.length - 1 ? projectId + 1 : null;

  const handlePrevClick = () => {
    // Scroll to the top of the page when "Previous" is clicked
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    // Scroll to the top of the page when "Back to Projects" is clicked
    window.scrollTo(0, 0);
  };

  return (
    <div className="project">
      <h1> {project.name}</h1>

      <img src={project.image} alt={project.name} />

      <div className="Inside-Content">
        <p>
          <b>Skills:</b> {project.skills}
        </p>
        <p>
          <b>Description:</b> {project.description}
        </p>
        <p>
          <b>Main Purpose:</b> {project.projectRole}
        </p>
      </div>

      <a href={project.github} target="_blank" rel="noopener noreferrer">
        <GitHubIcon className="Github" />
      </a>

      <div className="navigation-buttons">
        {nextProjectId !== null && (
          <Link to={`/project/${nextProjectId}`} onClick={handlePrevClick}>
            <button id="next">Next Project</button>
          </Link>
        )}
        {prevProjectId !== null && (
          <Link to={`/project/${prevProjectId}`} onClick={handleBackClick}>
            <button id="prev">Previous Project</button>
          </Link>
        )}
        <Link to="/projects">
          <button id="back" onClick={handleBackClick}>
            Back to Projects
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectDisplay;
