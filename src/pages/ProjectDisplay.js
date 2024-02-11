import React, {  useEffect } from "react";
import ReactDOM from 'react-dom';
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import "../styles/Modal.css"; // Ensure you have styles for the modal

function ProjectDisplay({ onClose, projectId }) {
  const project = ProjectList[projectId];

  useEffect(() => {
    // Prevent scrolling on the background page
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return ReactDOM.createPortal((
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h1>{project.name}</h1>
        <div className="project-image">

        <img src={project.image} alt={project.name} />

        </div>
        <div className="Inside-Content">
          <p><b>Skills:</b> {project.skills}</p>
          <p><b>Description:</b> {project.description}</p>
          <p><b>Main Purpose:</b> {project.projectRole}</p>
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="Github" />
        </a>
      </div>
    </div>
  ), document.body);
}

export default ProjectDisplay;
