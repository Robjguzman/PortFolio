// import React, { useState } from "react";
// import "./App.css";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Experience from "./pages/Experience";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ProjectDisplay from "./pages/ProjectDisplay";
// import AboutMe from "./pages/About";
// import Contact from "./pages/Contact";
// import Modal from "./pages/Modal"; 

// function App() {
//   // State to control the visibility of the ProjectDisplay modal
//   const [isProjectDisplayOpen, setIsProjectDisplayOpen] = useState(false);
//   // State to hold the currently selected project's ID
//   const [currentProjectId, setCurrentProjectId] = useState(null);

//   // Function to open the modal and set the current project ID
//   const handleProjectClick = (projectId) => {
//     setCurrentProjectId(projectId);
//     setIsProjectDisplayOpen(true);
//   };

//   // Function to close the modal
//   const handleClose = () => {
//     setIsProjectDisplayOpen(false);
//     setCurrentProjectId(null);
//   };

//   return (
//     <div className="App">
//       <Navbar  />
//       <main>
//         <Home />
//         <AboutMe />
//         <Projects onProjectClick={handleProjectClick} />
//         <Experience />
//         <Contact />
//       </main>
//       {isProjectDisplayOpen && (
//         <Modal onClose={handleClose}>
//           <ProjectDisplay projectId={currentProjectId} onClose={handleClose} />
//         </Modal>
//       )}
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import AboutMe from "./pages/About";
import Contact from "./pages/Contact";
import Modal from "./pages/Modal";
import API from "./pages/Api-testing";
import AIChatbot from "./components/AIChatbot";

function App() {
  const [isProjectDisplayOpen, setIsProjectDisplayOpen] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);

  const handleProjectClick = (projectId) => {
    setCurrentProjectId(projectId);
    setIsProjectDisplayOpen(true);
  };

  const handleClose = () => {
    setIsProjectDisplayOpen(false);
    setCurrentProjectId(null);
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once while scrolling
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Home data-aos="fade-down-left" />
        <AboutMe />
        <Projects onProjectClick={handleProjectClick} />
        <Experience />
        <Contact />
        <API />
      </main>
      {isProjectDisplayOpen && (
        <Modal onClose={handleClose}>
          <ProjectDisplay projectId={currentProjectId} onClose={handleClose} />
        </Modal>
      )}
      <Footer />
      <AIChatbot />
    </div>
  );
}

export default App;
