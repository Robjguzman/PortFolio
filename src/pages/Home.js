import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  const linkedinUrl = "https://www.linkedin.com/in/robertjguzman/";
  const githubUrl = "https://github.com/Robertguzmanny?tab=repositories";
  const emailurl = "mailto:robert.guzman3@lc.cuny.edu";
  return (
    <div className="home">
      <div className="about">
        <h2> Hi there!, I am Robert J. Guzman</h2>
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
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, HTML, CSS, Node.JS,Yarn, Ionic, BootStrap,
              MaterialUI, Android XML.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java SpringBoot, Flask, ExpressJS, Postgres, MySQL, ORACLE
              SQL, Firebase, PowerBI, SQLite
            </span>
          </li>
          <li className="item">
            <h2>Technologies</h2>
            <span>
              Git, GitHub, Jira, Confluence, BitBucket, Json, XML, Kaban Board,
              VS Code, IntelliJ, Pycharm, Dbeaver.
            </span>
          </li>

          <li className="item">
            <h2>Languages</h2>
            <span>Python, Java, JavaScript, TypeScript.</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
