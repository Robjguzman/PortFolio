import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import AboutMe from "./pages/About";
import Contact from "./pages/Contact";
import Modal from "./pages/Modal"; 

function App() {
  // State to control the visibility of the ProjectDisplay modal
  const [isProjectDisplayOpen, setIsProjectDisplayOpen] = useState(false);
  // State to hold the currently selected project's ID
  const [currentProjectId, setCurrentProjectId] = useState(null);

  // Function to open the modal and set the current project ID
  const handleProjectClick = (projectId) => {
    setCurrentProjectId(projectId);
    setIsProjectDisplayOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setIsProjectDisplayOpen(false);
    setCurrentProjectId(null);
  };

  return (
    <div className="App">
      <Navbar  />
      <main>
        <Home />
        <AboutMe />
        <Projects onProjectClick={handleProjectClick} />
        <Experience />
        <Contact />
      </main>
      {isProjectDisplayOpen && (
        <Modal onClose={handleClose}>
          <ProjectDisplay projectId={currentProjectId} onClose={handleClose} />
        </Modal>
      )}
      <Footer />
    </div>
  );
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutMe />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/project/:id" element={<ProjectDisplay />} />
//           <Route path="/experience" element={<Experience />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;