// import React from "react";
// import { useParams } from "react-router-dom";
// import { ProjectList } from "../helpers/ProjectList";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import "../styles/ProjectDisplay.css";

// function ProjectDisplay() {
//   const githubUrl = "https://github.com/Robertguzmanny?tab=repositories";
//   const { id } = useParams();
//   const project = ProjectList[id];
//   return (
//     <div className="project">
//       <h1> {project.name}</h1>
//       <img src={project.image} />
//       <p>
//         <b>Skills:</b> {project.skills}
//       </p>
//       <p>
//         <b>Description:</b> {project.description}
//       </p>

//       <a href={project.github} target="_blank" rel="noopener noreferrer">
//         <GitHubIcon />
//       </a>
//     </div>
//   );
// }

// export default ProjectDisplay;

import React from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const githubUrl = "https://github.com/Robertguzmanny?tab=repositories";
  const { id } = useParams();
  const project = ProjectList[id];

  const previousProjectId = parseInt(id, 10) - 1;
  const nextProjectId = parseInt(id, 10) + 1;

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

      <a href={project.github} target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </a>

      <div className="navigation-buttons">
        <Link to="/projects">
          <button>Back to Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectDisplay;
