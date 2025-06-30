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

import React, { useState, useEffect, Suspense, lazy } from "react";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Projects = lazy(() => import("./pages/Projects"));
const Experience = lazy(() => import("./pages/Experience"));
const ProjectDisplay = lazy(() => import("./pages/ProjectDisplay"));
const AboutMe = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Modal = lazy(() => import("./pages/Modal"));
const API = lazy(() => import("./pages/Api-testing"));
const AIChatbot = lazy(() => import("./components/AIChatbot"));

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

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <AboutMe />
          <Projects onProjectClick={handleProjectClick} />
          <Experience />
          <Contact />
          <API />
        </Suspense>
      </main>
      {isProjectDisplayOpen && (
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <Modal onClose={handleClose}>
            <ProjectDisplay projectId={currentProjectId} onClose={handleClose} />
          </Modal>
        </Suspense>
      )}
      <Footer />
      <Suspense fallback={null}>
        <AIChatbot />
      </Suspense>
    </div>
  );
}

export default App;
