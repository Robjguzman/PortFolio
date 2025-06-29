import React from "react";
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
import data from "../assets/R_certificate.png";
import dean from "../assets/dean.jpeg";
import dean2 from "../assets/dean-2023.png";
import CyberSec from "../assets/CyberSec.png";
import bachelors from "../assets/bachelors.png"

function Experience() {
  const images = [bachelors, associate, dean, dean2, certificate, data, CyberSec];

  return (
    <div id="experience">
      <div className="experience">
        <div className="experience-header">
          <h1>Professional Experience</h1>
          <p>My journey in software engineering and technology</p>
        </div>
        
        <VerticalTimeline lineColor="#000000">
          {/* Current Position - AIG Information Security Office */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work current-position"
            date="April 2025 - Present"
            iconStyle={{ background: "#000000", color: "#fff", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}
            icon={<WorkIcon />}
            contentStyle={{ 
              background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)", 
              border: "2px solid #000000",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #000000" }}
          >
            <div className="experience-content">
              <div className="company-badge">CURRENT POSITION</div>
              <h3 className="vertical-timeline-element-title">
                Software Engineer, Information Security Office
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                American International Group (AIG) • Jersey City, NJ
              </h4>
              <div className="experience-highlights">
                <div className="highlight-item">
                  <span className="metric">30%</span>
                  <span className="description">Reduction in vulnerabilities through automated security assessments</span>
                </div>
                <div className="highlight-item">
                  <span className="metric">32%</span>
                  <span className="description">Boost in data throughput via microservices optimization</span>
                </div>
                <div className="highlight-item">
                  <span className="metric">500+</span>
                  <span className="description">Compliance analysts supported with improved UI</span>
                </div>
              </div>
              <div className="tech-stack">
                <span className="tech-tag">Spring Boot</span>
                <span className="tech-tag">Angular</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">BlinkOps</span>
                <span className="tech-tag">TypeScript</span>
              </div>
            </div>
          </VerticalTimelineElement>

          {/* AIG GenAI Role */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2024 - April 2025"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<WorkIcon />}
            contentStyle={{ 
              background: "#ffffff", 
              borderRadius: "15px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
            }}
          >
            <div className="experience-content">
              <h3 className="vertical-timeline-element-title">
                Software Engineer, GenAI
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                American International Group (AIG) • Jersey City, NJ
              </h4>
              <div className="experience-highlights">
                <div className="highlight-item">
                  <span className="metric">13%</span>
                  <span className="description">Reduction in cycle time with serverless GenAI migration</span>
                </div>
                <div className="highlight-item">
                  <span className="metric">20K+</span>
                  <span className="description">IBM UDB queries translated using Claude LLM</span>
                </div>
                <div className="highlight-item">
                  <span className="metric">500+</span>
                  <span className="description">Underwriting analyses supported with &lt;500ms responses</span>
                </div>
                <div className="highlight-item">
                  <span className="metric">250+</span>
                  <span className="description">Python/JS/TS files documented with auto-generated docs</span>
                </div>
              </div>
              <div className="tech-stack">
                <span className="tech-tag">AWS Bedrock</span>
                <span className="tech-tag">Claude LLM</span>
                <span className="tech-tag">Lambda</span>
                <span className="tech-tag">DynamoDB</span>
                <span className="tech-tag">Angular</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Palantir Foundry</span>
              </div>
            </div>
          </VerticalTimelineElement>

          {/* TD Bank */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2023 - Aug 2023"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<WorkIcon />}
            contentStyle={{ 
              background: "#ffffff", 
              borderRadius: "15px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
            }}
          >
            <div className="experience-content">
              <h3 className="vertical-timeline-element-title">
                Software Engineer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                TD Bank Securities • Manhattan, NY
              </h4>
              <div className="experience-highlights">
                <div className="highlight-item">
                  <span className="metric">17%</span>
                  <span className="description">Reduction in data storage and retrieval time</span>
                </div>
                <div className="highlight-item">
                  <span className="metric">22%</span>
                  <span className="description">Improvement in data processing efficiency</span>
                </div>
              </div>
              <div className="tech-stack">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Spring Boot</span>
                <span className="tech-tag">Oracle SQL</span>
                <span className="tech-tag">Maven</span>
                <span className="tech-tag">Python</span>
              </div>
            </div>
          </VerticalTimelineElement>

          {/* Project Destined */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sept 2022 - Dec 2022"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<WorkIcon />}
            contentStyle={{ 
              background: "#ffffff", 
              borderRadius: "15px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
            }}
          >
            <div className="experience-content">
              <h3 className="vertical-timeline-element-title">
                Program Manager
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Project Destined – Cushman & Wakefield • New York, NY
              </h4>
              <div className="experience-highlights">
                <div className="highlight-item">
                  <span className="metric">20%</span>
                  <span className="description">Increase in investor engagement</span>
                </div>
                <div className="highlight-item">
                  <span className="metric">50+</span>
                  <span className="description">Stakeholders presented to successfully</span>
                </div>
                <div className="highlight-item">
                  <span className="metric">10+</span>
                  <span className="description">Interns managed across 12-week program</span>
                </div>
              </div>
              <div className="tech-stack">
                <span className="tech-tag">Data Modeling</span>
                <span className="tech-tag">Investment Analysis</span>
                <span className="tech-tag">Team Leadership</span>
              </div>
            </div>
          </VerticalTimelineElement>

          {/* Education - Lehman College */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Jan 2022 - Dec 2023"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<SchoolIcon />}
            contentStyle={{ 
              background: "linear-gradient(135deg, #2c3e50 0%, #000000 100%)", 
              color: "#ffffff",
              borderRadius: "15px",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #000000" }}
          >
            <div className="experience-content education">
              <h3 className="vertical-timeline-element-title">
                Bachelor of Science in Computer Science (Cum Laude)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Lehman College, CUNY • Bronx, New York
              </h4>
              <div className="education-details">
                <div className="gpa-badge">GPA: 3.5/4.0</div>
                <div className="honor-badge">Cum Laude</div>
              </div>
            </div>
          </VerticalTimelineElement>

          {/* Software Engineer Apprenticeship */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2022 - Aug 2022"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<WorkIcon />}
            contentStyle={{ 
              background: "#ffffff", 
              borderRadius: "15px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
            }}
          >
            <div className="experience-content">
              <h3 className="vertical-timeline-element-title">
                Software Engineer Apprenticeship
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                New York Jobs CEO Council & CUNY • New York, NY
              </h4>
              <div className="experience-highlights">
                <div className="highlight-item">
                  <span className="metric">20%</span>
                  <span className="description">Decrease in database query response times</span>
                </div>
              </div>
              <div className="tech-stack">
                <span className="tech-tag">Data Analysis</span>
                <span className="tech-tag">Database Optimization</span>
                <span className="tech-tag">Web Development</span>
              </div>
            </div>
          </VerticalTimelineElement>

          {/* Columbia University Med Center */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2021 - Sept 2021"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<WorkIcon />}
            contentStyle={{ 
              background: "#ffffff", 
              borderRadius: "15px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
            }}
          >
            <div className="experience-content">
              <h3 className="vertical-timeline-element-title">
                Software Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Columbia University Med Center • Manhattan, NY
              </h4>
              <div className="experience-highlights">
                <div className="highlight-item">
                  <span className="metric">50+</span>
                  <span className="description">JavaScript bugs fixed</span>
                </div>
                <div className="highlight-item">
                  <span className="metric">8%</span>
                  <span className="description">Increase in product efficiency</span>
                </div>
              </div>
              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express.js</span>
                <span className="tech-tag">SQL</span>
                <span className="tech-tag">Jira</span>
              </div>
            </div>
          </VerticalTimelineElement>

          {/* Google Development Program */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2020 - May 2021"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<WorkIcon />}
            contentStyle={{ 
              background: "#ffffff", 
              borderRadius: "15px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
            }}
          >
            <div className="experience-content">
              <h3 className="vertical-timeline-element-title">
                Software Engineer Development and Mentorship Program
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Google • New York, Remote
              </h4>
              <div className="experience-highlights">
                <div className="highlight-item">
                  <span className="metric">10</span>
                  <span className="description">Individual coding projects completed</span>
                </div>
                <div className="highlight-item">
                  <span className="metric">20%</span>
                  <span className="description">Memory utilization improvement</span>
                </div>
                <div className="highlight-item">
                  <span className="metric">13%</span>
                  <span className="description">Reduction in issue resolution time</span>
                </div>
              </div>
              <div className="tech-stack">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Data Structures</span>
                <span className="tech-tag">Algorithms</span>
                <span className="tech-tag">Problem Solving</span>
              </div>
            </div>
          </VerticalTimelineElement>

          {/* Connectemonos */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2020 - Sept 2020"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<WorkIcon />}
            contentStyle={{ 
              background: "#ffffff", 
              borderRadius: "15px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
            }}
          >
            <div className="experience-content">
              <h3 className="vertical-timeline-element-title">
                Software Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Connectemonos • New York, Remote
              </h4>
              <div className="experience-highlights">
                <div className="highlight-item">
                  <span className="metric">Full-Stack</span>
                  <span className="description">Integration of frontend and backend technologies</span>
                </div>
              </div>
              <div className="tech-stack">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Frontend Development</span>
                <span className="tech-tag">Team Collaboration</span>
              </div>
            </div>
          </VerticalTimelineElement>

        </VerticalTimeline>
        
        <div className="accomplishments-section">
          <div className="accomplishments-header">
            <h2>Certifications & Achievements</h2>
            <p>Professional certifications and academic recognitions</p>
          </div>
          
          <div className="accomplishments-grid">
            {images.map((image, index) => (
              <div key={index} className="certificate-item">
                <div className="certificate-container">
                  <img
                    src={image}
                    alt={`Certificate ${index + 1}`}
                    className="certificate-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
