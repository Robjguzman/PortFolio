import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  const linkedinUrl = "https://www.linkedin.com/in/robertjguzman/";
  const githubUrl = "https://github.com/Robertguzmanny?tab=repositories";
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>

        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      </div>
      <p> &copy; 2024 robguzman.netlify.app</p>
    </div>
  );
}

export default Footer;
