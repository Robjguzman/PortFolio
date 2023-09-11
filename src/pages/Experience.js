import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";
import certificate from "../assets/bootcamp.png";
import associate from "../assets/associate.png";

function Experience() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [certificate, associate];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  return (
    <div className="experience">
      <VerticalTimeline lineColor="black">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kappa International HS, Bronx, New York
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bronx Community College, Bronx, New York
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Associate's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 2020 - Sept 2020"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer Intern - Connectemonos
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New York, REMOTE
          </h4>
          <p>
            Proficiently orchestrated the harmonious integration of front-end
            interfaces with backend technologies, specifically Node.js and
            Python, through close collaboration with interdisciplinary teams.{" "}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 2020 - May 2021"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            software engineer Development and Mentorship Program - Google
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New York, Remote
          </h4>
          <p>
            Proved proficiency by completing a diverse set of 10 individual
            coding projects while applying key programming concepts such as
            variables, conditionals, loops, and functions. These projects
            demonstrated my growing expertise and ability to bring ideas to life
            through code.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2021 - Aug 2021"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer Intern - Columbia University Irving Med Center
          </h3>
          <p>
            {" "}
            Demonstrated Proficiency through Successful Completion of 10 Diverse
            Individual Coding Projects, Applying Fundamental Programming
            Concepts including Variables, Conditionals, Loops, and Functions.
            These Projects Showcase My Advancing Competence and Aptitude for
            Translating Concepts into Functional Code Implementations.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2022 - Expected Fall 2023"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Lehman College, Bronx, New York
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p>Computer Science </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2022 - Aug 2022"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Apprendiceship - New York Jobs CEO Council & CUNY
          </h3>
          <p>
            {" "}
            Web Developer BootCamp - Implemented advanced data analysis
            methodologies to enhance the operational efficiency of the database,
            yielding a notable 20% decrease in query response times.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2023 - Aug 2023"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern - TD Bank Securities
          </h3>
          <p>
            {" "}
            Created and meticulously crafted a pioneering Java-based application
            by harnessing the power of the Spring Boot framework and Maven build
            automation. This exceptional project involved comprehensive design
            and development efforts, reflecting my proficiency in modern
            software engineering practices.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className="Accomplishments">
        <h1>Accomplishments</h1>
        <div className="image-container">
          <img
            src={images[currentImage]}
            alt={currentImage === 0 ? "Certificate" : "Associate Degree"}
            className="image"
          />
          <div className="arrow-buttons">
            <button onClick={prevImage}>&#8249;</button>
            <button onClick={nextImage}>&#8250;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
