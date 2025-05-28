import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import codingimage2 from "../assets/codeimage.gif";
import character_student from "../assets/character_student.gif"
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import "../styles/Home.css";

function Home() {
  const linkedinUrl = "https://www.linkedin.com/in/robertjguzman/";
  const githubUrl = "https://github.com/Robertguzmanny?tab=repositories";
  const emailurl = "mailto:robert.guzman3@lc.cuny.edu";

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

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
            <img className="gif-image" src={character_student} alt="Character"/>
          </motion.div>
          
          <motion.div 
            className="about"
            {...fadeInUp}
          >
            <h1 className="main-title">Hey there! I am Robert J. Guzman</h1>
            <h3 className="animated-text">
              <TypeAnimation
                sequence={[
                  "Computer Science",
                  500,
                  "Software Engineer",
                  500,
                  "Software Developer",
                  500,
                  "Web Developer",
                  500,
                  "Project Manager",
                  500,
                  "Android Developer",
                  500,
                  "Databases",
                  500
                ]}
                style={{ fontSize: "2.5em", fontWeight: "bold" }}
                repeat={Infinity}
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
              <div className="skill-category">
                <h2>Front-End</h2>
                <div className="skill-items">
                  {[
                    { name: 'ReactJS', level: 90, icon: 'fab fa-react', color: '#61DAFB' },
                    { name: 'Angular', level: 85, icon: 'fab fa-angular', color: '#DD0031' },
                    { name: 'HTML/CSS', level: 95, icon: 'fab fa-html5', color: '#E34F26' },
                    { name: 'Node.JS', level: 88, icon: 'fab fa-node-js', color: '#68A063' },
                  ].map((skill, index) => (
                    <motion.div 
                      key={index}
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
                          transition={{ duration: 1, delay: index * 0.2 }}
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h2>Back-End</h2>
                <div className="skill-items">
                  {[
                    { name: 'NodeJS', level: 90, icon: 'fab fa-node-js', color: '#68A063' },
                    { name: 'Java SpringBoot', level: 85, icon: 'fab fa-java', color: '#007396' },
                    { name: 'Python', level: 88, icon: 'fab fa-python', color: '#3572A5' },
                    { name: 'ExpressJS', level: 85, icon: 'fab fa-node-js', color: '#68A063' },
                  ].map((skill, index) => (
                    <motion.div 
                      key={index}
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
                          transition={{ duration: 1, delay: index * 0.2 }}
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h2>Technologies</h2>
                <div className="skill-items">
                  {[
                    { name: 'Git', level: 90, icon: 'fab fa-git', color: '#F34F29' },
                    { name: 'GitHub', level: 85, icon: 'fab fa-github', color: '#181717' },
                    { name: 'Jira', level: 88, icon: 'fab fa-jira', color: '#0052CC' },
                    { name: 'Confluence', level: 85, icon: 'fab fa-confluence', color: '#172B4D' },
                  ].map((skill, index) => (
                    <motion.div 
                      key={index}
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
                          transition={{ duration: 1, delay: index * 0.2 }}
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h2>Languages</h2>
                <div className="skill-items">
                  {[
                    { name: 'Python', level: 90, icon: 'fab fa-python', color: '#3572A5' },
                    { name: 'Java', level: 85, icon: 'fab fa-java', color: '#007396' },
                    { name: 'JavaScript', level: 88, icon: 'fab fa-js', color: '#F7DF1E' },
                    { name: 'TypeScript', level: 85, icon: 'fab fa-react', color: '#61DAFB' },
                  ].map((skill, index) => (
                    <motion.div 
                      key={index}
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
                          transition={{ duration: 1, delay: index * 0.2 }}
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="image-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <img className="responsive-image" src={codingimage2} alt="Coding" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;

