import React, { useMemo } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import codingimage2 from "../assets/codeimage.gif";
import character_student from "../assets/character_student.gif"
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

import "../styles/Home.css";

const Home = React.memo(() => {
  const linkedinUrl = "https://www.linkedin.com/in/robertjguzman/";
  const githubUrl = "https://github.com/Robjguzman/Robertguzmanny";
  const emailurl = "mailto:robert.guzman3@lc.cuny.edu";

  const fadeInUp = useMemo(() => ({
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }), []);

  return (
    <div className="home-container">
      <div id="home">
        <div className="home">
          <motion.div 
            className="welcome"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              className="gif-image" 
              src={character_student} 
              alt="Character"
              loading="eager"
              // eslint-disable-next-line react/no-unknown-property
              fetchpriority="high"
            />
          </motion.div>
          
          <motion.div 
            className="about"
            {...fadeInUp}
          >
            <h1 className="main-title">Hey there! I am Robert J. Guzman</h1>
            <h3 className="animated-text">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  1500,
                  "Full Stack Developer",
                  1500,
                  "React Specialist",
                  1500,
                  "AWS Expert",
                  1500,
                ]}
                style={{ fontSize: "2.5em", fontWeight: "bold" }}
                repeat={Infinity}
                speed={50}
                cursor={true}
              />
            </h3>

            <div className="prompt">
              <p className="intro-text">Passionate about creating innovative solutions through code</p>
              <div className="social-links">
                <motion.a 
                  href={linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LinkedInIcon className="social-icon linkedin" />
                </motion.a>
                <motion.a 
                  href={emailurl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <EmailIcon className="social-icon email" />
                </motion.a>
                <motion.a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <GithubIcon className="social-icon github" />
                </motion.a>
              </div>
             
            </div>
          </motion.div>

          <motion.div 
            className="skills-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h1>Technical Expertise</h1>
            <div className="skills-grid">
              {skillCategories.map((category, categoryIndex) => (
                <div key={category.title} className="skill-category">
                  <h2>{category.title}</h2>
                  <div className="skill-items">
                    {category.skills.map((skill, index) => (
                      <motion.div 
                        key={skill.name}
                        className="skill-item"
                        whileHover={{ scale: 1.05 }}
                      >
                        <i className={skill.icon} style={{ color: skill.color }}></i>
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-bar-container">
                          <motion.div 
                            className="skill-bar"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: (categoryIndex * 4 + index) * 0.1 }}
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="image-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <img 
              className="responsive-image" 
              src={codingimage2} 
              alt="Coding"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;

