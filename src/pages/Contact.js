import React, { useState, useEffect } from "react";
import "firebase/firestore"; // Import Firestore
import emailjs from "emailjs-com";
import "../styles/Contact.css";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  query,
  getDocs,
} from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDSonZmD79RMp7Z9vnwGiZJ8UqAV8NiXNg",
  authDomain: "portfolio-13ed0.firebaseapp.com",
  projectId: "portfolio-13ed0",
  storageBucket: "portfolio-13ed0.appspot.com",
  messagingSenderId: "253400965266",
  appId: "1:253400965266:web:fd0e71016d0be619b7464b",
  measurementId: "G-NC590TQ5JB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission
  const [nextMessageId, setNextMessageId] = useState(null); // State to store the next message ID

  useEffect(() => {
    const generateNextMessageId = async () => {
      const messagesCollection = collection(db, "portfolio");
      const messagesQuery = query(messagesCollection);
      const querySnapshot = await getDocs(messagesQuery);
      const messageCount = querySnapshot.size + 1; // Increment the count
      return `message${messageCount}`;
    };

    generateNextMessageId().then((nextId) => {
      setNextMessageId(nextId);
    });
  }, [db]);

  const handleSubmit = async (e) => {
    // Make the function asynchronous
    e.preventDefault();
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_xwskvim",
        "template_9ms46jg",
        templateParams,
        "mbBemdB_C2XHSEqKc"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setName("");
          setEmail("");
          setMessage("");
          setIsSubmitted(true);
          // Set submission state to true
        },
        (error) => {
          console.error("Email send error:", error);
        }
      );

    try {
      // Save data to Firestore with the generated message ID
      const docRef = await addDoc(collection(db, "portfolio"), {
        name: name,
        email: email,
        message: message,
        messageId: nextMessageId,
        timestamp: serverTimestamp(),
      });

      console.log("Document written with ID: ", docRef.id);

      // Clear form fields and update submission state (your existing code)
      setNextMessageId(null); // Reset nextMessageId after submission
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleRetry = () => {
    // Function to handle going back to the form for another submission
    setIsSubmitted(false); // Set submission state back to false
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>
          Have any questions? Or just want to connect, please don't hesitate to
          get in touch!
        </p>
        {isSubmitted ? (
          <div className="thank-you">
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully.</p>
            <button onClick={handleRetry}>Send Another Message</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
