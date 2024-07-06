// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "../styles/Navbar.css";
// import ReorderIcon from "@material-ui/icons/Reorder";


// function Navbar() {
//   const [expandNavbar, setExpandNavbar] = useState(false);

//   const location = useLocation();

//   useEffect(() => {
//     setExpandNavbar(false);
//   }, [location]);



//   return (
//     <div className="navbar" id={expandNavbar ? "open" : "close"}>
//       <div className="toggleButton">
//         <button
//           onClick={() => {
//             setExpandNavbar((prev) => !prev);
//           }}
//         >
//           <ReorderIcon />
//         </button>
//       </div>
//       <div className="links">
//         <Link to="/"> Home </Link>
//         <Link to="/about"> About </Link>
//         <Link to="/experience"> Experience </Link>
//         <Link to="/projects"> Projects </Link>
//         <Link to="/contact"> Contact </Link>
//       </div>
     
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  // This function will handle the toggling of the navbar
  const toggleNavbar = () => {
    setExpandNavbar(prev => !prev);
  };

  return (
    <nav className={`navbar ${expandNavbar ? "open" : ""}`}>
      <div className="toggleButton">
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <a href="#home" onClick={toggleNavbar}>Home</a>
        <a href="#about" onClick={toggleNavbar}>About</a>
        <a href="#projects" onClick={toggleNavbar}>Projects</a>
        <a href="#experience" onClick={toggleNavbar}>Experience</a>
        <a href="#contact" onClick={toggleNavbar}>Contact</a>
        <a href="#api" onClick={toggleNavbar}>API Test</a>
      </div>
    </nav>
  );
}

export default Navbar;

