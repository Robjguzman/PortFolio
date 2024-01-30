import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import db from "../helpers/firebase"; // Adjust path as necessary
import "../styles/Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State variable for loading
  const [error, setError] = useState(""); // State variable for error handling

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Reset error message

    try {
      const messageData = {
        name,
        email,
        message,
        createdAt: Timestamp.now(),
      };
  
      const firestorePromise = addDoc(collection(db, "messages"), messageData);
      const serverPromise = fetch(
        "https://sparkling-teal-cowboy-boots.cyclic.app/api/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messageData),
        }
      );
  
      const [docRef, response] = await Promise.all([firestorePromise, serverPromise]);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      console.log(`Message saved to Firestore with ID: ${docRef.id}`, messageData);
  
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to send message. Please try again.");
    }
  
    setIsLoading(false);
  };

  const handleRetry = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Have any questions? Or just want to connect, please don't hesitate to get in touch!</p>
        {isSubmitted ? (
          <div className="thank-you">
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully.</p>
            <button onClick={handleRetry}>Send Another Message</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="4" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <div className="form-group">
              {isLoading ? (
                <div className="spinner"></div>
              ) : (
                <button type="submit">Submit</button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
