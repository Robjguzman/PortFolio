import React from "react";
import "../styles/about.css";
import aboutImage from "../assets/Professional.png";
import resume from "../assets/Robert_Guzman_Tech_Resume_2024.pdf";

function About() {
  const openResume = () => {
    window.open(resume, "_blank");
  };

  return (
      <div id="about">
        <div id="about-container">
          <section id="about-section">
            {/* About left */}
            <div className="about-left">
              <img src={aboutImage} alt="Robert Guzman" />
            </div>

            {/* About right */}
            <div className="about-right">
              <h1>My Story</h1>
              <p>
                I am Robert Guzman, an aspiring Software Engineer with a diverse
                skill set encompassing both front-end and back-end technologies.
                I am a recent graduate with a degree in Computer Science from
                Lehman College.
              </p>

              <h2>Interests and Hobbies</h2>
              <p>
                Beyond my professional endeavors, I am deeply passionate about
                two main aspects of my life. First and foremost is my love for
                baseball—a sport that has been a part of my identity since I was
                young. I find immense joy and camaraderie in the game, both as a
                player and a devoted fan. Additionally, my fascination with
                technology has been a driving force in my personal growth.
              </p>
              <p>
                From an early age, I immersed myself in the world of computers
                and programming. This interest led me to pursue a career in
                Software Engineering, where I blend my passion for technology
                with the excitement of creating innovative solutions. Born in
                the Dominican Republic, I brought the rich tapestry of my
                culture to New York at a young age. This unique blend of
                experiences has shaped my perspective and instilled in me a
                strong work ethic and resilience.
              </p>

              <h2>Goals</h2>
              <p>
                One of my primary goals is to contribute meaningfully to the
                field of software engineering by developing innovative solutions
                that address real-world challenges. I aim to continuously
                enhance my skills and stay abreast of emerging technologies to
                deliver high-quality and efficient software.
              </p>

              <button onClick={openResume} className="resume-button">
                Resume
              </button>
            </div>
          </section>
        </div>
      </div>
  );
}

export default About;
