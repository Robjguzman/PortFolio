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
import dean from "../assets/dean.jpeg";
import SwipeableViews from "react-swipeable-views";

function Experience() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [certificate, associate, dean];

  const handleChangeIndex = (index) => {
    setCurrentImage(index);
  };

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
          date="June 2023 - Aug 2023"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern - TD Bank Securities
          </h3>
          <p>
            Created and meticulously crafted a pioneering Java-based application
            by harnessing the power of the Spring Boot framework and Maven build
            automation. This exceptional project involved comprehensive design
            and development efforts, reflecting my proficiency in modern
            software engineering practices.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sept 2022 - Dec 2022"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Program Manager - Project Destined, New York, NY
          </h3>
          <p>
            As a Program Manager, I played a pivotal role in crafting an
            investment memo using advanced software techniques, which I
            presented to leading firms such as Brookfield, JLL, Tishman Speyer,
            and others. This initiative resulted in a remarkable 20% increase in
            investor engagement and culminated in a successful presentation to
            over 50 stakeholders.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
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
          <p>Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2022 - Aug 2022"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Apprenticeship - New York Jobs CEO Council & CUNY
          </h3>
          <p>
            Web Developer BootCamp - Implemented advanced data analysis
            methodologies to enhance the operational efficiency of the database,
            yielding a notable 20% decrease in query response times.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 2020 - May 2021"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Development and Mentorship Program - Google
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
            Python, through close collaboration with interdisciplinary teams.
          </p>
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
          <p>Computer Science</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className="Accomplishments">
        <h3>Accomplishments</h3>
        <div className="swipeable-container">
          <SwipeableViews
            index={currentImage}
            onChangeIndex={handleChangeIndex}
            enableMouseEvents
          >
            {images.map((image, index) => (
              <div key={index} className="image-container">
                <img
                  src={image}
                  alt={index === 0 ? "Certificate" : "Associate Degree"}
                  className="image"
                />
              </div>
            ))}
          </SwipeableViews>
        </div>
      </div>
    </div>
  );
}

export default Experience;



