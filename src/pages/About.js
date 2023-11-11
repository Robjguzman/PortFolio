// About.js
import React from "react";
import "../styles/about.css"; 
import aboutImage from "../assets/Professional.png";

import resume from "../assets/Robert_Guzman_Tech_Resume_2023.pdf";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-left">
        <div className="about-left-content">
          <div className="shadow">
            <div className="about-img">
              <img src={aboutImage} alt="About me" />
            </div>
          </div>
          <h2>Robert Guzman</h2>
          <h3>TD Securities Software Engineer intern</h3>
        </div>
      </div>

      <div className="about-right">
        <h1>
          hello<span>!</span>
        </h1>
        <h2>Who is Robert?</h2>
        <div className="about-btns">
          <button
            onClick={() =>
              window.open(
                resume,
                "_blank"
              )
            }
            type="button"
            className="btn btn-blue"
          >
            resume
          </button>
        </div>

        <div className="about-me">
          <p>
            <b>
              I am Robert Guzman, an aspiring Software Engineer with a diverse
              skill set encompassing both front-end and back-end technologies. I
              am poised to graduate soon with a degree in Computer Science from
              Lehman College.
            </b>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default About;
