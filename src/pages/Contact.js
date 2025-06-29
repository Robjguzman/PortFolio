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
        setError(null);

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
                    <div className="contact-header">
                        <h1>Get In Touch</h1>
                        <p>Have any questions or want to collaborate? I&apos;d love to hear from you. Let&apos;s connect and discuss how we can work together!</p>
                    </div>

                    {isSubmitted ? (
                        <div className="thank-you-section">
                            <div className="success-message">
                                <h2>Thank You!</h2>
                                <p>Your message has been sent successfully. I&apos;ll get back to you as soon as possible!</p>
                                <button onClick={handleRetry} className="retry-btn">Send Another Message</button>
                            </div>
                        </div>
                    ) : (
                        <div className="contact-content">
                            <div className="contact-info">
                                <h3>Let&apos;s Connect</h3>
                                <p>I&apos;m always excited to discuss new opportunities, innovative projects, or just have a conversation about technology and software development.</p>
                                

                                <div className="social-section">
                                    <h4>Follow Me</h4>
                                    <div className="social-links">
                                        <a
                                            href="https://www.linkedin.com/in/robertjguzman/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link"
                                        >
                                            <i className="fab fa-linkedin"></i>
                                            <span>LinkedIn</span>
                                        </a>
                                        <a
                                            href="https://github.com/Robjguzman/Robertguzmanny"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link"
                                        >
                                            <i className="fab fa-github"></i>
                                            <span>GitHub</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-form-section">
                                <h3>Send Message</h3>
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Enter your full name"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Enter your email address"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell me about your project, questions, or just say hello..."
                                            rows="6"
                                            required
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <div className="form-submit">
                                        {isLoading ? (
                                            <div className="loading-section">
                                                <div className="spinner"></div>
                                                <span>Sending message...</span>
                                            </div>
                                        ) : (
                                            <button type="submit" className="submit-button">
                                                Send Message
                                            </button>
                                        )}
                                    </div>
                                    {error && (
                                        <div className="error-message">
                                            <p>{error}</p>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;
