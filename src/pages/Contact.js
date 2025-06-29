import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null); // Clear previous errors

        try {
            const response = await fetch(
                "https://portfolio-backend-jet-phi.vercel.app/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, message }),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log("Server response", responseData);

            setIsSubmitted(true);
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Error:", error.message);
            setError(error.message || "Failed to send message. Please try again.");
        }

        setIsLoading(false);
    };

    const handleRetry = () => {
        setIsSubmitted(false);
        setError(null);
    };

    return (
        <div id="contact">
            <div className="contact-page">
                <div className="contact-container">
                    <h1>Contact Me</h1>
                    <p>Have any questions? Or just want to connect, please dont hesitate to get in touch!</p>
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
                            <div className="form-group">
                                {isLoading ? (
                                    <div className="spinner"></div>
                                ) : (
                                    <button type="submit">Submit</button>
                                )}
                            </div>
                            {error && <p className="error">{error}</p>}
                        </form>
                    )}
                    <div className="social-links">
                        <a
                            href="https://www.linkedin.com/in/robertjguzman/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/Robertguzmanny"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
