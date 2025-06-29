import React, {  useEffect } from "react";
import ReactDOM from 'react-dom';
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css"; 

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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <span>×</span>
        </button>
        
        <div className="project-header">
          <h1 className="project-title">{project.name}</h1>
          <div className="project-badges">
            {project.skills && project.skills.split(',').map((skill, index) => (
              <span key={index} className="skill-badge">{skill.trim()}</span>
            ))}
          </div>
        </div>

        <div className="project-image">
          <img src={project.image} alt={project.name} />
          <div className="image-overlay">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              <GitHubIcon className="github-icon" />
              <span>View Code</span>
            </a>
          </div>
        </div>

        <div className="project-content">
          <div className="content-section">
            <h3 className="section-title">Description</h3>
            <p className="section-text">{project.description}</p>
          </div>
          
          <div className="content-section">
            <h3 className="section-title">Main Purpose</h3>
            <p className="section-text">{project.projectRole}</p>
          </div>

          <div className="content-section">
            <h3 className="section-title">Technologies Used</h3>
            <div className="tech-grid">
              {project.skills && project.skills.split(',').map((skill, index) => (
                <div key={index} className="tech-item">{skill.trim()}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="project-footer">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="primary-button"
          >
            <GitHubIcon />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  ), document.body);
}

export default ProjectDisplay;
