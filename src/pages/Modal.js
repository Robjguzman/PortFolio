// Modal.js
import React from "react";
import ReactDOM from "react-dom";
import "../styles/Modal.css"; 


const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose}>
          &times; {}
        </button>
        {/* Use a dedicated container for the image */}
        <div className="image-container">
          {children} 
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") // Ensure that a div with id="modal-root" is present in your index.html file
  );
};

export default Modal;
