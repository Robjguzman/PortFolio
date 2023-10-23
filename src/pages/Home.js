import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import codingimage from "../assets/animation.gif";

import "../styles/Home.css";

function Home() {
  const linkedinUrl = "https://www.linkedin.com/in/robertjguzman/";
  const githubUrl = "https://github.com/Robertguzmanny?tab=repositories";
  const emailurl = "mailto:robert.guzman3@lc.cuny.edu";
  return (
    <div className="home">
      <div className="about">
        <h2> Hey there! I am Robert J. Guzman</h2>
        <div className="prompt">
          <p>Below are my Teck stack and Technologies</p>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href={emailurl} target="_blank" rel="noopener noreferrer">
            <EmailIcon />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="container">
        <div className="centered-image">
          <img className="responsive-image"src={codingimage} alt="Gift"  />
        </div>
      </div>

      <div className="skills">
        <h1>Skills</h1>
        <ul className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              <i className="fab fa-react" style={{ color: "#61DAFB" }}></i>{" "}
              <span className="skill-name">ReactJS</span>,{" "}
              <i className="fab fa-angular" style={{ color: "#DD0031" }}></i>{" "}
              <span className="skill-name">Angular</span>,{" "}
              <i className="fab fa-html5" style={{ color: "#E34F26" }}></i>{" "}
              <span className="skill-name">HTML</span>,{" "}
              <i className="fab fa-css3" style={{ color: "#1572B6" }}></i>{" "}
              <span className="skill-name">CSS</span>,{" "}
              <i className="fab fa-node-js" style={{ color: "#68A063" }}></i>{" "}
              <span className="skill-name">Node.JS</span>,{" "}
              <i className="fab fa-yarn" style={{ color: "#2C8EBB" }}></i>{" "}
              <span className="skill-name">Yarn</span>,{" "}
              <i className="fab fa-ionic" style={{ color: "#3880FF" }}></i>{" "}
              <span className="skill-name">Ionic</span>,{" "}
              <i className="fab fa-bootstrap" style={{ color: "#7952B3" }}></i>{" "}
              <span className="skill-name">BootStrap</span>,{" "}
              <i
                className="fab fa-material-ui"
                style={{ color: "#0081CB" }}
              ></i>{" "}
              <span className="skill-name">MaterialUI</span>,{" "}
              <i className="fab fa-android" style={{ color: "#3DDC84" }}></i>{" "}
              <span className="skill-name">Android XML</span>.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              <i className="fab fa-node-js" style={{ color: "#68A063" }}></i>{" "}
              <span className="skill-name">NodeJS</span>,{" "}
              <i className="fab fa-java" style={{ color: "#007396" }}></i>{" "}
              <span className="skill-name">Java SpringBoot</span>,{" "}
              <i className="fab fa-python" style={{ color: "#3572A5" }}></i>{" "}
              <span className="skill-name">Flask</span>,{" "}
              <i className="fab fa-node-js" style={{ color: "#68A063" }}></i>{" "}
              <span className="skill-name">ExpressJS</span>,{" "}
              <i className="fas fa-database" style={{ color: "#263238" }}></i>{" "}
              <span className="database-icon">Postgres</span>,{" "}
              <i className="fas fa-database" style={{ color: "#263238" }}></i>{" "}
              <span className="database-icon">MySQL</span>,{" "}
              <i className="fas fa-database" style={{ color: "#263238" }}></i>{" "}
              <span className="database-icon">Oracle SQL</span>,{" "}
              <i className="fab fa-firefox" style={{ color: "#FFA000" }}></i>{" "}
              <span className="skill-name">Firebase</span>,{" "}
              <i className="fas fa-database" style={{ color: "#263238" }}></i>{" "}
              <span className="skill-name">PowerBI</span>,{" "}
              <i className="fas fa-database" style={{ color: "#263238" }}></i>{" "}
              <span className="database-icon">SQLite</span>.
            </span>
          </li>
          <li className="item">
            <h2>Technologies</h2>
            <span>
              <i className="fab fa-git" style={{ color: "#F34F29" }}></i>{" "}
              <span className="skill-name">Git</span>,{" "}
              <i className="fab fa-github" style={{ color: "#181717" }}></i>{" "}
              <span className="skill-name">GitHub</span>,{" "}
              <i className="fab fa-jira" style={{ color: "#0052CC" }}></i>{" "}
              <span className="skill-name">Jira</span>,{" "}
              <i className="fab fa-confluence" style={{ color: "#172B4D" }}></i>{" "}
              <span className="skill-name">Confluence</span>,{" "}
              <i className="fab fa-bitbucket" style={{ color: "#0052CC" }}></i>{" "}
              <span className="skill-name">BitBucket</span>,{" "}
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              <i className="fab fa-python" style={{ color: "#3572A5" }}></i>{" "}
              <span className="skill-name">Python</span>,{" "}
              <i className="fab fa-java" style={{ color: "#007396" }}></i>{" "}
              <span className="skill-name">Java</span>,{" "}
              <i className="fab fa-js" style={{ color: "#F7DF1E" }}></i>{" "}
              <span className="skill-name">JavaScript</span>,{" "}
              <i className="fab fa-react" style={{ color: "#61DAFB" }}></i>{" "}
              <span className="skill-name">TypeScript</span>.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
