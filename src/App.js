import React, { useState, useEffect, Suspense, lazy } from "react";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

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
        <Suspense fallback={<Loading />}>
          <AboutMe />
          <Projects onProjectClick={handleProjectClick} />
          <Experience />
          <Contact />
          <API />
        </Suspense>
      </main>
      {isProjectDisplayOpen && (
        <Suspense fallback={<Loading />}>
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
